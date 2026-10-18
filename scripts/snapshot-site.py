"""把本地跑起来的真实页面导出成单文件 HTML（CSS/字体/图片全部内联，去掉脚本）。

用法前提：站点跑在 http://127.0.0.1:3001（临时库 qiyuan_preview）。
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
  const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
  for (const link of links) {
    const href = link.href;
    try {
      const res = await fetch(href, { credentials: 'same-origin' });
      let css = await res.text();
      const urls = new Set();
      for (const m of css.matchAll(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g)) urls.add(m[2]);
      for (const u of urls) {
        if (!u || u.startsWith('data:') || u.startsWith('#')) continue;
        try {
          const abs = new URL(u, href).href;
          const data = await toDataUrl(abs);
          css = css.split(u).join(data);
        } catch (e) { /* 单个资源失败不影响整体 */ }
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

  // 4) 视频换封面图，去掉播放
  for (const v of document.querySelectorAll('video')) {
    const poster = v.getAttribute('poster');
    if (poster) {
      try {
        const data = await toDataUrl(new URL(poster, location.href).href);
        const img = document.createElement('img');
        img.setAttribute('src', data);
        img.setAttribute('alt', '');
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        v.replaceWith(img);
      } catch (e) { v.remove(); }
    } else {
      v.remove();
    }
  }

  // 5) 去掉一切脚本与预加载
  document.querySelectorAll('script, link[rel="preload"], link[rel="prefetch"], link[rel="modulepreload"], noscript').forEach((n) => n.remove());
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
      // 快照里点不动的链接：保留外观，去掉可点
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
            await page.wait_for_timeout(1500)
            await page.evaluate(
                "() => document.querySelectorAll('[class*=\"Curtain\"]').forEach(e => e.remove())"
            )
            await page.wait_for_timeout(300)
            await page.evaluate(INLINE_JS)
            await page.evaluate(REWRITE_LINKS_JS, LINK_MAP)
            html = await page.content()
            target = os.path.join(OUT, filename)
            with open(target, "w", encoding="utf-8") as f:
                f.write("<!doctype html>\n" + html)
            size = os.path.getsize(target) / 1024 / 1024
            print(f"OK {path:16s} -> {filename:18s} {size:.1f} MB")

        await browser.close()


asyncio.run(main())
