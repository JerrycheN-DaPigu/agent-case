# 截图清单 · DeepSeek Harness

任务书要求：每篇 ≥6 张图，其中 ≥2 张自己实机截；每张标来源；不能出现账号名、邮箱、Key、真实姓名、本机用户名。

下面 10 张是给这一篇准备的。文件名按顺序，放到 `public/guides/deepseek-harness-guide/`，拍完把路径写回 `content/guides/deepseek-harness-guide.md` 的 `screenshots` 字段，再跑 `pnpm import:guides`。

| 文件名 | 拍什么 | alt（写清这张在证明什么） | 来源标注 |
|---|---|---|---|
| 01-官网下载页.png | deepseek.com/harness 页面，红框标 Windows 安装包入口 | 官方页面，红框是 Windows 版下载入口 | 本人实机截图 |
| 02-安装完成.png | 桌面图标 / 首次打开的空界面 | 装完后第一次打开，还没有工作区 | 本人实机截图 |
| 03-选择工作区.png | 点「选择工作区」后的目录选择框 | 没选工作区前输入框不可用，这一步是必须的 | 本人实机截图 |
| 04-模型设置页.png | Settings → Models，DeepSeek 卡片 | 模型设置页，DeepSeek 只有一栏 API Key | 本人实机截图 |
| 05-平台新建Key.png | platform.deepseek.com 的 API Keys 页（把 Key 打码） | 开放平台新建 Key，Key 只显示一次 | 本人实机截图（Key 已打码） |
| 06-第一个会话.png | 让它读目录后的总结输出 | 第一次会话：先读项目，不改文件 | 本人实机截图 |
| 07-写文件审批.png | 改 README 时的权限弹窗 + diff | 写文件前会弹审批，能看到 diff | 本人实机截图 |
| 08-改完的README.png | 编辑器里 README 末尾新增的那一行 | 任务跑通的证据：README 多了一行 | 本人实机截图 |
| 09-自定义模型表单.png | Custom model API 表单（Key 打码） | 自定义模型要填 Provider ID、Base URL、协议、Key、模型 | 官方文档截图：providers.md（或本人实机截图） |
| 10-命令行启动.png | 终端里 `npx @deepseek-ai/dsh web` 的输出 | 命令行版启动后监听 3080 | 本人实机截图 |

## 拍之前的检查

- 浏览器/客户端里出现账号头像、昵称的，裁掉或打码。
- 终端窗口别露本机用户名（`C:\Users\你的名字`），把路径滚到看不见，或裁掉标题栏。
- Key 一栏一定要打码，不要图省事只遮一半。
- 图片宽度 1600px 以内、单张 500KB 以内，PNG 优先。

## 拍完怎么接上

1. 把图放进 `public/guides/deepseek-harness-guide/`。
2. 在正文对应小节插入：

   `![官方页面，红框是 Windows 版下载入口（来源：本人实机截图）](/guides/deepseek-harness-guide/01-官网下载页.png)`

3. 在 frontmatter 的 `screenshots` 里列同样的路径：

   ```yaml
   screenshots:
     - /guides/deepseek-harness-guide/01-官网下载页.png
     - /guides/deepseek-harness-guide/02-安装完成.png
   ```

4. `pnpm import:guides`。路径写错或文件不存在，脚本会直接报错并拒绝写入。
