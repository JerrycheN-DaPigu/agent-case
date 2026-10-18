# 教程源文件：格式与导入契约

教程正文写在 `content/guides/<slug>.md`，一个文件一篇。文件名就是 `slug`（小写、连字符，例如 `cursor-guide.md`）。

## 文件长这样

```markdown
---
title: Cursor 上手教程：从安装到跑通第一个任务
tool: cursor
summary: 一个没写过代码的人也能照着做完的 Cursor 入门：装好、登录、让它改好第一个文件。
updatedAt: 2026-10-20
screenshots:
  - /guides/cursor-guide/01-下载页.png
  - /guides/cursor-guide/02-登录.png
sourceUrls:
  - https://cursor.com/docs/get-started/quickstart
  - https://cursor.com/download
---

## 它能做什么

Cursor 是一个……

## 国内怎么用

……
```

## frontmatter 字段

| 字段 | 类型 | 必填 | 规则 |
|---|---|---|---|
| `title` | string | 是 | 10–40 字，别写「XX 工具介绍」这种 |
| `tool` | string | 是 | 必须是 `data/products/` 里存在的 slug，例如 `cursor`、`trae`、`jimeng` |
| `summary` | string | 是 | 40–80 字，一句话说清「谁、能学到什么」 |
| `updatedAt` | string | 是 | `YYYY-MM-DD`，内容核对日期 |
| `screenshots` | string[] | 否 | 以 `/` 开头，相对于 `public/`。文件必须真的存在 |
| `sourceUrls` | string[] | 是 | 至少 3 条，正文里每个事实的结果都要能在这里找到依据 |

## 正文规则

- 从 `##` 开始写，**不要写 `#`**（文章标题由页面从 `title` 渲染）。
- 页面右侧目录从 `##` 和 `###` 提取，所以小节标题要写得能被一眼看懂。
- 图片一律下载到 `public/guides/<slug>/`，用 `/guides/<slug>/xx.png` 这种绝对路径，不要外链。
- 每张图的 alt 里要带来源：`![官方下载页，红框是 Windows 入口（来源：官方页面）](/guides/cursor-guide/01-下载页.png)`。来源写法见任务书 5.4。
- 代码块标语言（```bash、```powershell、```json）。
- 表格能用，但别拿表格代替步骤说明。
- 小节顺序按任务书第 5.2 节来。

## 导入脚本要满足什么

写 `scripts/import-guides.mjs`，跑 `pnpm import:guides`。完整校验规则见 `docs/任务书.md` 第 4.2 节，这里是速查：

```text
content/guides/*.md
  → 解析 frontmatter（yaml）
  → zod 校验字段
  → 校验 tool 存在、updatedAt 格式、screenshots 文件存在、slug 不重复
  → 有错：全部列出来 + 退出码 1 + 不写文件
  → 没错：写 data/guides.json（按 updatedAt 倒序，同一天按 slug 升序）
```

产出的每一条要符合 `src/lib/guides.ts` 里的 `Guide` 类型。

`data/guides.json` 是**生成物**，不要手改。改了下次导入就被覆盖。
