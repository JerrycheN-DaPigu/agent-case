# AGENTS.md · 这个仓库的规矩

这是一个实习生考察 case：做工具指南页面 + 5 篇教程。你先读 `README.md`，再读 `docs/任务书.md`，那是完整要求。

## 动手前

- 通读 `docs/任务书.md` 和 `docs/验收清单.md`。
- 看 `docs/参考/` 里的参考页截图和说明。
- 看一眼 `content/README.md`（教程格式 + 导入脚本契约）和 `data/README.md`（工具字段）。

## 硬规则

1. **不要改**：`data/products/*.yaml`、`src/styles/tokens.css`、`src/lib/products.ts`、教程源文件之外的数据。`src/app/layout.tsx` 只允许加导航项。
2. 颜色、间距、圆角只用 `tokens.css` 的变量，不写死色值；组件样式写 `*.module.css`。
3. TypeScript `strict`，不许 `any`。
4. 不引 Tailwind、UI 库、外部字体、外部图片、CDN。
5. 教程正文不许硬编码进组件，必须走 `content/guides/*.md` → `pnpm import:guides` → `data/guides.json` → 页面。
6. 教程要自己实机跑通；配图可以用自己的、官方的、别人教程里的，但**每张都要标来源**，且至少 2 张是自己截的。不许 AI 生成假界面。
7. 不写翻墙、代理、虚拟卡、买号、代充、接码。

## 完成标准

`pnpm build`、`pnpm typecheck`、`pnpm import:guides` 都通过，`docs/验收清单.md` 逐条能演示。

## 提交

分支 `intern/<你的名字>`，分阶段提交，不要直接推 `main`。
