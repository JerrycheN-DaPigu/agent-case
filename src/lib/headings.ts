export type Heading = {
  id: string
  text: string
  level: 2 | 3
}

/** 把标题转成锚点：保留中英文与数字，其余折叠成连字符 */
export function slugifyHeading(text: string): string {
  const normalized = text
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
  return normalized || 'section'
}

/** 同名标题依次加 -1、-2，保证 id 唯一；extractHeadings 与 Markdown 组件共用 */
export function nextAnchor(base: string, seen: Map<string, number>): string {
  const times = seen.get(base) ?? 0
  seen.set(base, times + 1)
  return times === 0 ? base : base + '-' + times
}

function stripInline(text: string): string {
  return text
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .trim()
}

/** 从 Markdown 正文里抽 ## / ### 作为右侧本页目录 */
export function extractHeadings(markdown: string): Heading[] {
  const seen = new Map<string, number>()
  const headings: Heading[] = []
  let inFence = false

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) continue

    const text = stripInline(match[2])
    headings.push({
      id: nextAnchor(slugifyHeading(text), seen),
      text,
      level: match[1].length === 2 ? 2 : 3,
    })
  }

  return headings
}
