# 交付说明

## 1. 怎么跑

```bash
pnpm install
pnpm dev          # http://localhost:3000 → 自动跳到 /guides
pnpm import:guides
pnpm build
pnpm typecheck
```

Node 20.9+。本机验证环境：Node v24.16.0、pnpm 10.33.0（通过 corepack 调用）。

> 本机 Windows 沙箱下 pnpm 装依赖时，默认的符号链接方式报 `ERR_PNPM_SYMLINK_FAILED`，改用
> `pnpm install --config.node-linker=hoisted` 通过。这个设置只影响 node_modules 布局，没有写进仓库。

## 2. 做了什么

| 交付物 | 位置 | 状态 |
|---|---|---|
| 总览页 | `src/app/guides/page.tsx` | 三栏：左目录 / 正文 / 本页目录；22 个工具分三组可折叠；有教程的可点、其余置灰标「教程整理中」；5 张教程卡片；窄屏目录收成顶部抽屉 |
| 教程页 | `src/app/guides/[slug]/page.tsx` | 分类标签、标题、摘要、更新时间；工具信息条（logo/官网/国内可用/免费档）；Markdown 渲染；右目录滚动高亮；上一篇/下一篇；不存在的 slug 走 `notFound()` |
| 导入脚本 | `scripts/import-guides.mjs` | yaml 解析 + zod 校验；tool 存在性、日期格式、截图文件存在性、slug 重复（忽略大小写）四类全部拦下，一次列全，退出码 1 且不写文件；成功时按 updatedAt 倒序、同日按 slug 升序 |
| 教程 | `content/guides/*.md` → `data/guides.json` | 5 篇，覆盖 3 个分类 |
| 样式 | `src/components/guides/guides.module.css` | 只用 tokens.css 变量；无内联样式（not-found 页也一样） |
| 教程骨架 | `docs/教程骨架.md` + `docs/截图清单-deepseek-harness.md` | 以 DeepSeek Harness 一篇为样板：九节结构、小节拆法、配图命名与来源标注，其余四篇照此填 |

新增文件都在 `src/components/guides/`：`SidebarNav`（折叠 + 移动端抽屉）、`Toc`（滚动高亮）、`Markdown`（标题锚点）、`GuideCard`、`ProductBar`。

## 3. 为什么选这 5 个

| 工具 | 分类 | 理由 |
|---|---|---|
| Cursor | 编程工具 | 站内最常被问「然后呢」的工具；官方文档写得细，适合作为「境外工具 + 国内怎么用」的样本 |
| TRAE | 编程工具 | 国内手机号就能注册，是新手最可能真的装上的一个 |
| DeepSeek Harness | 编程工具 | 本站自己的工作台，插件化 + 权限审批最能体现「智能体」和普通补全的区别 |
| 即梦AI | 图像与视频 | 网页打开就能用，不用装软件、不用境外支付，出图链路最短 |
| 可灵AI | 图像与视频 | 补上视频生成，和即梦形成「图 / 视频」两条链 |

覆盖 3 个分类（编程 / 图像与视频），满足「至少 2 类」。

## 4. 核对来源与日期

核对日期统一为 2026-10-18，来源写在各篇 frontmatter 的 `sourceUrls` 里。

| 教程 | 主要来源 | 核对程度 |
|---|---|---|
| Cursor | cursor.com/docs、/downloads、/pricing | 官网文档与下载页已核对；菜单路径按文档描述 |
| TRAE | trae.cn、docs.trae.ai、价格页 | 官网与文档已核对；国内版菜单文案各版本不一致，文中已注明 |
| DeepSeek Harness | deepseek.com/harness、GitHub README、官方文档站、providers 文档 | 官方 README 的启动命令与 Web UI 指南已逐条核对 |
| 即梦AI | jimeng.jianying.com 及其工具页 | 入口与登录方式已核对；积分规则以页面为准 |
| 可灵AI | klingai.com/cn、app.klingai.com | 入口与登录方式已核对；模式与积分以页面为准 |

## 5. 已知问题 / 没做完

1. **截图还没补（最大缺口）。** 5 篇目前都是 `screenshots: []`，没有实机截图，也没下载官方图。原因：本次交付窗口只有约 2 小时，优先保证了页面与导入链路能跑。**没有用任何 AI 生成图或宣传图冒充实机截图**。补法：按任务书 5.4 在 `public/guides/<slug>/` 放图，再把路径写回 frontmatter。
2. **没有逐台实机安装验证。** 教程里的步骤是从官方文档和公开页面整理的，写成了可照做的粒度，但没有在干净机器上从头走一遍每一篇。第 5 篇（可灵）与第 3 篇（TRAE）的菜单文案跨版本差异最大，风险最高。
3. **第三方延伸阅读只放了官方链接。** 任务书要求「只放你实际打开读过正文的」，这次没有时间逐篇读第三方教程，所以没放，避免编链接。
4. **PR 模板不在 main 上。** `.github/pull_request_template.md` 只存在于 `case/task-brief` 分支（PR #1），本分支基于 main，所以开 PR 时模板不会自动带上。需要的话把该分支合进来即可。
5. **移动端只做了 CSS 断点，没在真机/390 宽度截图核对。** 1440/1280 已用浏览器截图核对。

## 6. 依赖说明

没有新增依赖。脚本用的 `yaml` 和 `zod` 本来就在 `package.json` 里；页面用 `react-markdown`，也是原有依赖。

## 7. 自检结果

| 项 | 结果 |
|---|---|
| `pnpm typecheck` | 通过（无 `any`） |
| `pnpm build` | 通过（`/guides`、`/guides/[slug]` 动态渲染） |
| `pnpm import:guides` | 5 篇通过；连跑两次 `data/guides.json` 哈希一致 |
| 校验拦截 | 演示文件同时带「tool 不存在 + 日期格式错 + 截图不存在」，三条一次列出，退出码 1，json 未改动 |
| 页面只读生成物 | 页面只读 `data/guides.json`；清空成 `[]` 时总览显示「教程正在整理」 |
| 教程字数 | 5 篇纯汉字数 1538–1737（不含代码块与表格），落在 1500–3000 区间 |
