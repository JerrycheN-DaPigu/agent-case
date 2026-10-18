"""把本地跑起来的真实页面导出成单文件 HTML（CSS/字体/图片内联，页面状态定格，去掉脚本）。

前提：站点跑在 http://127.0.0.1:3001（临时库 qiyuan_preview）。

要点：
1. 导出前先把页面从头滚到底，让滚动触发的入场动画全部跑完，否则下半页会停在初始的透明状态；
2. 视频保留 <video> 元素、只把 poster 内联，不换成 <img>，否则尺寸会被撑坏；
3. 最后一步才删 <script>。DOM 已经是渲染完的状态，删掉脚本不影响画面。
"""

import asyncio
import os
from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:3001"
OUT = r"D:\agent-case\reference-site"

PAGES = [
    ("/", "home.html", "首页"),
    ("/products", "tools.html", "工具列表"),
    ("/products/cursor", "tool-cursor.html", "工具详情"),
    ("/guides", "guides.html", "文章列表"),
]

LINK_MAP = {
    "/": "home.html",
    "/products": "tools.html",
    "/products/cursor": "tool-cursor.html",
    "/guides": "guides.html",
}

SETTLE_JS = r"""
async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  document.querySelectorAll('[class*="Curtain"]').forEach((e) => e.remove());
  const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  const step = Math.max(200, Math.floor(window.innerHeight * 0.6));
  for (let y = 0; y < height; y += step) {
    window.scrollTo(0, y);
    await sleep(140);
  }
  window.scrollTo(0, height);
  await sleep(500);
  window.scrollTo(0, 0);
  await sleep(600);
  // 把还没跑完的 CSS / WAAPI 动画直接推到终态，否则会定格在半透明的中间帧
  document.getAnimations().forEach((a) => { try { a.finish(); } catch (e) {} });
  await sleep(300);
}
"""

INLINE_JS = r"""
async () => {
  const toDataUrl = async (url) => {
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('bad ' + res.status);
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = reject;
      fr.readAsDataURL(blob);
    });
  };

  // 1) 外链样式表 → <style>，并把里面 url(...) 的资源内联
  for (const link of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
    const href = link.href;
    try {
      const res = await fetch(href, { credentials: 'same-origin' });
      let css = await res.text();
      const urls = new Set();
      for (const m of css.matchAll(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g)) urls.add(m[2]);
      for (const u of urls) {
        if (!u || u.startsWith('data:') || u.startsWith('#')) continue;
        try {
          const data = await toDataUrl(new URL(u, href).href);
          css = css.split(u).join(data);
        } catch (e) {}
      }
      const style = document.createElement('style');
      style.textContent = css;
      link.replaceWith(style);
    } catch (e) {}
  }

  // 2) <img> → data URI
  for (const img of document.querySelectorAll('img')) {
    const src = img.currentSrc || img.getAttribute('src');
    if (src && !src.startsWith('data:')) {
      try { img.setAttribute('src', await toDataUrl(new URL(src, location.href).href)); } catch (e) {}
    }
    img.removeAttribute('srcset');
    img.removeAttribute('loading');
  }

  // 3) 行内样式里的背景图
  for (const el of document.querySelectorAll('[style*="url("]')) {
    let s = el.getAttribute('style');
    for (const m of [...s.matchAll(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g)]) {
      const u = m[2];
      if (!u || u.startsWith('data:')) continue;
      try {
        const data = await toDataUrl(new URL(u, location.href).href);
        s = s.split(u).join(data);
      } catch (e) {}
    }
    el.setAttribute('style', s);
  }

  // 4) 视频：保留元素，只把封面内联，去掉会去请求视频源的 src
  for (const v of document.querySelectorAll('video')) {
    const poster = v.getAttribute('poster');
    if (poster && !poster.startsWith('data:')) {
      try { v.setAttribute('poster', await toDataUrl(new URL(poster, location.href).href)); } catch (e) {}
    }
    v.removeAttribute('src');
    v.querySelectorAll('source').forEach((s) => s.remove());
    v.removeAttribute('autoplay');
    v.pause?.();
  }
}
"""

REMOVE_SCRIPTS_JS = r"""
() => {
  document.querySelectorAll('script, link[rel="preload"], link[rel="prefetch"], link[rel="modulepreload"], noscript').forEach((n) => n.remove());
}
"""

# 快照里让所有动画/过渡瞬间走到终态：CSS 动画在重新打开时会从头再播一遍，
# 入场慢的元素会长时间停在半透明。这里把时长压到 0 并保留 fill-mode 的终态。
FREEZE_ANIMATIONS_JS = r"""
() => {
  const style = document.createElement('style');
  style.setAttribute('data-snapshot', 'freeze-animations');
  style.textContent = `*, *::before, *::after {
    animation-duration: 0.001s !important;
    animation-delay: 0s !important;
    animation-fill-mode: both !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    scroll-behavior: auto !important;
  }`;
  document.head.appendChild(style);
}
"""

REWRITE_LINKS_JS = r"""
(mapping) => {
  document.querySelectorAll('a[href]').forEach((a) => {
    const raw = a.getAttribute('href');
    let path = raw;
    try { path = new URL(raw, location.href).pathname; } catch (e) { return; }
    if (mapping[path]) {
      a.setAttribute('href', mapping[path]);
    } else {
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
    }
  });
}
"""


async def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel="chrome", headless=True)
        ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await ctx.new_page()

        for path, filename, label in PAGES:
            await page.goto(BASE + path, wait_until="networkidle", timeout=180000)
            await page.wait_for_timeout(2000)
            await page.evaluate(SETTLE_JS)
            await page.evaluate(INLINE_JS)
            await page.evaluate(REWRITE_LINKS_JS, LINK_MAP)
            await page.evaluate(REMOVE_SCRIPTS_JS)
            await page.evaluate(FREEZE_ANIMATIONS_JS)
            html = await page.content()
            target = os.path.join(OUT, filename)
            with open(target, "w", encoding="utf-8") as f:
                f.write("<!doctype html>\n" + html)
            size = os.path.getsize(target) / 1024 / 1024
            print(f"OK {path:16s} -> {filename:18s} {size:.2f} MB")


asyncio.run(main())
