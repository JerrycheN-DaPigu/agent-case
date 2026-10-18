import fs from 'node:fs'
import path from 'node:path'

/**
 * 教程数据读取层。
 *
 * `data/guides.json` 由导入脚本生成（`pnpm import:guides`，脚本要你自己写，
 * 约定见 content/README.md）。页面只读这一份 JSON，不要直接读 content/guides/ 下的 md。
 *
 * 现在文件里是空数组，所以你跑起来看不到教程——正常。
 */

export type Guide = {
  /** 由文件名决定，例如 content/guides/cursor-guide.md → "cursor-guide" */
  slug: string
  /** 文章标题 */
  title: string
  /** 对应的工具 slug，必须在 data/products 里存在 */
  tool: string
  /** 一句话摘要，40–80 字 */
  summary: string
  /** 内容核对日期，YYYY-MM-DD */
  updatedAt: string
  /** 配图路径，以 public 为根，例如 "/guides/cursor/01-install.png" */
  screenshots: string[]
  /** 正文里每个事实的依据链接 */
  sourceUrls: string[]
  /** Markdown 正文（不含 frontmatter） */
  body: string
}

const GUIDES_FILE = path.join(process.cwd(), 'data', 'guides.json')

let cache: Guide[] | null = null

export function listGuides(): Guide[] {
  if (cache) return cache
  const raw = fs.readFileSync(GUIDES_FILE, 'utf8')
  const parsed: unknown = JSON.parse(raw)
  if (!Array.isArray(parsed)) {
    throw new Error('data/guides.json 必须是数组，检查导入脚本的输出格式')
  }
  cache = parsed as Guide[]
  return cache
}

export function getGuide(slug: string): Guide | null {
  return listGuides().find((guide) => guide.slug === slug) ?? null
}
