#!/usr/bin/env node
/**
 * 把 content/guides/<slug>.md 编译成 data/guides.json。
 *
 * 约定见 content/README.md 与 docs/任务书.md §4.2：
 * - slug 取文件名（去掉 .md）
 * - 用 yaml 解析 frontmatter，用 zod 校验字段
 * - 四类错误一次列全，退出码 1，且不写半成品
 * - 成功时按 updatedAt 倒序、同一天按 slug 升序输出，可重复执行
 */
import fs from 'node:fs'
import path from 'node:path'
import { parse as parseYaml } from 'yaml'
import { z } from 'zod'

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'content', 'guides')
const PRODUCTS_DIR = path.join(ROOT, 'data', 'products')
const PUBLIC_DIR = path.join(ROOT, 'public')
const OUTPUT_FILE = path.join(ROOT, 'data', 'guides.json')

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

const frontmatterSchema = z.object({
  title: z.string({ error: '缺失或类型不对，应为 string' }).trim().min(1, '不能为空'),
  tool: z.string({ error: '缺失或类型不对，应为 string' }).trim().min(1, '不能为空'),
  summary: z.string({ error: '缺失或类型不对，应为 string' }).trim().min(1, '不能为空'),
  updatedAt: z
    .string({ error: '缺失或类型不对，应为 string' })
    .regex(DATE_PATTERN, '必须是 YYYY-MM-DD'),
  screenshots: z
    .array(z.string({ error: '数组元素必须是 string' }), {
      error: '缺失或类型不对，应为 string[]',
    })
    .optional(),
  sourceUrls: z
    .array(z.string({ error: '数组元素必须是 string' }), {
      error: '缺失或类型不对，应为 string[]',
    })
    .min(1, '至少给 1 条'),
})

function listMarkdownFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.toLowerCase().endsWith('.md'))
    .sort()
}

function splitFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  if (!text.startsWith('---\n')) {
    return { error: '文件必须以 --- 开头的 frontmatter 开始' }
  }
  const end = text.indexOf('\n---', 3)
  if (end === -1) {
    return { error: 'frontmatter 没有闭合的 ---' }
  }
  const head = text.slice(3, end)
  const body = text.slice(end + 4).replace(/^\n+/, '')
  return { head, body }
}

function isRealDate(value) {
  if (!DATE_PATTERN.test(value)) return false
  const date = new Date(value + 'T00:00:00Z')
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

function collectProducts() {
  if (!fs.existsSync(PRODUCTS_DIR)) return new Set()
  return new Set(
    fs
      .readdirSync(PRODUCTS_DIR)
      .filter((file) => /\.ya?ml$/.test(file))
      .map((file) => file.replace(/\.ya?ml$/, '')),
  )
}

function checkScreenshot(pathname) {
  if (!pathname.startsWith('/')) return '必须以 / 开头（相对 public/）'
  const absolute = path.join(PUBLIC_DIR, pathname)
  if (!absolute.startsWith(PUBLIC_DIR)) return '路径越过了 public/'
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) {
    return 'public' + pathname + ' 不存在'
  }
  return null
}

function fail(errors) {
  for (const error of errors) console.error(error)
  console.error('\n导入中止：' + errors.length + ' 处错误，data/guides.json 未改动。')
  process.exitCode = 1
}

function main() {
  const files = listMarkdownFiles()
  const products = collectProducts()
  const errors = []
  const guides = []
  const seenSlugs = new Map()

  for (const file of files) {
    const relative = 'content/guides/' + file
    const slug = file.replace(/\.md$/i, '')
    const lowerSlug = slug.toLowerCase()

    if (seenSlugs.has(lowerSlug)) {
      errors.push(
        relative + ':slug: 与 ' + seenSlugs.get(lowerSlug) + ' 重复（文件名忽略大小写）',
      )
      continue
    }
    seenSlugs.set(lowerSlug, relative)

    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
    const split = splitFrontmatter(raw)
    if (split.error) {
      errors.push(relative + ':frontmatter: ' + split.error)
      continue
    }

    let frontmatter
    try {
      frontmatter = parseYaml(split.head)
    } catch (error) {
      errors.push(relative + ':frontmatter: YAML 解析失败：' + error.message)
      continue
    }
    if (frontmatter === null || typeof frontmatter !== 'object' || Array.isArray(frontmatter)) {
      errors.push(relative + ':frontmatter: 必须是一组 key: value')
      continue
    }

    const parsed = frontmatterSchema.safeParse(frontmatter)
    const fileErrors = []

    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        fileErrors.push(
          relative + ':' + (issue.path.join('.') || 'frontmatter') + ': ' + issue.message,
        )
      }
    }

    const data = parsed.success ? parsed.data : null
    // zod 已经报过的字段不再重复报，其余字段继续做业务校验，把错误一次列全
    const failedFields = new Set(
      parsed.success ? [] : parsed.error.issues.map((issue) => String(issue.path[0] ?? '')),
    )
    const tool = data?.tool ?? frontmatter.tool
    const updatedAt = data?.updatedAt ?? frontmatter.updatedAt
    const screenshots = Array.isArray(frontmatter.screenshots)
      ? frontmatter.screenshots.filter((item) => typeof item === 'string')
      : []

    if (!failedFields.has('tool') && typeof tool === 'string' && !products.has(tool)) {
      fileErrors.push(relative + ':tool: data/products/ 里没有 ' + tool)
    }

    if (
      !failedFields.has('updatedAt') &&
      typeof updatedAt === 'string' &&
      !isRealDate(updatedAt)
    ) {
      fileErrors.push(relative + ':updatedAt: ' + updatedAt + ' 不是有效日期（YYYY-MM-DD）')
    }

    if (!failedFields.has('screenshots')) {
      for (const screenshot of screenshots) {
        const problem = checkScreenshot(screenshot)
        if (problem) fileErrors.push(relative + ':screenshots: ' + problem)
      }
    }

    if (fileErrors.length > 0 || !data) {
      errors.push(...fileErrors)
      continue
    }

    guides.push({
      slug,
      title: data.title,
      tool: data.tool,
      summary: data.summary,
      updatedAt: data.updatedAt,
      screenshots,
      sourceUrls: data.sourceUrls,
      body: split.body.endsWith('\n') ? split.body : split.body + '\n',
    })
  }

  if (errors.length > 0) {
    fail(errors)
    return
  }

  guides.sort((a, b) => {
    if (a.updatedAt !== b.updatedAt) return a.updatedAt < b.updatedAt ? 1 : -1
    return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  })

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(guides, null, 2) + '\n', 'utf8')

  console.log(
    '读取 ' + files.length + ' 个文件，通过 ' + guides.length + ' 个，写入 ' + guides.length + ' 条。',
  )
}

main()