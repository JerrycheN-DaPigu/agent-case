---
title: DeepSeek Harness 上手：装好、接上模型、跑通第一个任务
tool: deepseek-harness
summary: DeepSeek 开源智能体框架的实际用法：桌面版和命令行两种装法，接上 DeepSeek 模型，让它读完一个项目再改第一个文件。
updatedAt: 2026-10-18
screenshots: []
sourceUrls:
  - https://www.deepseek.com/harness
  - https://github.com/deepseek-ai/deepseek-harness
  - https://deepseek-harness.github.io/deepseek-harness/
  - https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md
  - https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md
---

## 它能做什么

DeepSeek Harness（命令行叫 dsh）是深度求索开源的智能体框架。它不是一个只会在编辑器里补全代码的插件，而是一个能读项目、改文件、跑命令、开子任务的工作台：你给它一个目录和一句话，它自己规划步骤、调工具，遇到要写文件或执行命令时先问你。

三种形态，能力是同一套：桌面应用（Electron 外壳）、浏览器里的网页版（本地起一个服务）、命令行。适合：想让 AI 直接动项目文件的人；要把「读代码 — 改代码 — 跑测试」串成一条流水线的人；想用插件拼自己工作流的人。

不适合：只想在 IDE 里补全几行代码的人（用更轻的工具）；对「AI 能执行命令」有顾虑、又不愿意看权限弹窗的人——它的默认策略就是每一步都让你确认。

它和普通聊天式工具最大的差别在插件化：模型、工具、会话、界面都是插件，装什么插件就有什么能力。所以第一次用会觉得入口多，熟悉之后才知道哪些是自己加的。

## 国内怎么用

官方明确国内可用，`data/products/deepseek-harness.yaml` 里 `accessCN` 是 `true`。注册用手机号，主站和开放平台都在国内，不需要境外手机号和境外支付。

账号分两层：一层是 DeepSeek 账号（手机号注册，按官方隐私说明需要实名），用来登录和计费；另一层是模型服务，也就是你在开放平台申请的 API Key。装好工具不等于能用模型，两步都要走。

如果你只用本地模型，可以跳过 API Key：Harness 支持自定义 OpenAI 兼容端点，把地址指向本机的模型服务即可，这种用法不需要注册。

## 安装

先看两条路，选一条就行。

**桌面版（推荐给第一次用的人）**：打开 <https://www.deepseek.com/harness>，页面上有对应系统的安装包，下载后双击安装。装完打开，得到的是一个原生窗口，里面跑的就是完整的网页版。

**命令行版（推荐给要在服务器上用的人）**：先装 Node.js 20 以上，然后运行官方 README 里的命令：

    npx @deepseek-ai/dsh web

它会在 `http://127.0.0.1:3080` 起一个本地服务，并自动打开浏览器。不想自动开浏览器就加 `--no-open`。

想从源码跑：`git clone` 仓库后 `pnpm install`、`pnpm run build`，再用 `pnpm dsh web` 启动。这条只适合要改它自己的人。

核对版本：官方 README 在 2026-10 标注的是开发者预览（developer preview），并明确说会有破坏性变更。你装到的版本可能更新，以下步骤以你本机为准。

## 登录与开通

桌面版和网页版都不需要单独注册一个「Harness 账号」，它们用的是 DeepSeek 的模型服务：

1. 打开 <https://platform.deepseek.com/>，用手机号登录，完成实名。
2. 在「API Keys」里新建一个 Key，复制出来（只显示一次）。
3. 回到 Harness，打开设置里的「模型」（Settings → Models）。
4. 粘贴 Key，保存。按官方文档，保存后模型路由立刻可用，不用重启服务。

免费档这件事要说清楚：工具本身开源、免费（MIT 许可），但模型调用按你接的服务计费。官方开放平台有新用户赠送额度，具体金额看平台页面，本站不写死。

## 跑通第一个任务

目标：让它先读懂一个项目，再改一个文件。

1. 打开 Harness。第一次进来是空的，先点「选择工作区」（Choose workspace），选一个你放代码的文件夹。官方文档特别说明：没有选工作区之前，输入框是不可用的。
2. 选好后新建一个会话，在输入框里写：`先读一遍这个目录，用三句话说明它是做什么的，不要改任何文件。`
3. 它会调用读文件的工具，把目录结构和关键文件列出来，然后给你一段总结。
4. 接着输入：`在 README 末尾加一行「本地运行：先看 package.json 的 scripts」，只改这一处。`
5. 它会请求写文件权限，弹窗里能看到要改的文件和 diff；确认后文件才真的被改。
6. 打开那个 README，看到新增的一行，任务就算跑通了。

这一步同时验证了三件事：模型连上了、工具能读能写、审批策略在生效。第 2 步之所以先让它「只读」，是为了确认它理解的是你的项目，而不是凭文件名猜。

## 接入自己的模型 / API Key

除了官方的 DeepSeek 模型，Harness 也支持第三方服务和自定义接口，官方文档的单页在 `docs/user/guide/providers.md`。典型配置是三项：接口地址（baseURL）、Key、模型名。

接 OpenAI 兼容的服务时，baseURL 填到 `/v1` 这一级，模型名写服务商给的 ID，不要写展示名。接本地模型（Ollama、vLLM 之类）时，先确认本机服务已经起来，再把地址指向 `127.0.0.1` 的对应端口。

改完模型配置后建议开一个新会话验证：老会话可能还带着旧模型的上下文，报错信息会让人误判成配置没生效。

## 怎么付费

工具免费，钱花在模型上。官方 API 按 token 计费，输入和输出单价不同，缓存命中的输入更便宜，具体单价见 <https://api-docs.deepseek.com/quick_start/pricing>。

智能体比聊天更费 token：一次任务要读多个文件、跑多轮工具调用，账单涨得比预期快。建议先小额充值，跑几天看看日均消耗，再决定要不要开自动充值。

## 常见问题

**输入框是灰的，打不了字。** 现象是打开就有输入框但点不进去。原因是还没选工作区。怎么办：点「选择工作区」，选一个目录；如果目录里没有文件，也先选上，空目录同样可以。
**模型列表里没有可选项。** 现象是设置里填了 Key 但会话里用不了。原因是 Key 没保存成功，或者账号没完成实名。怎么办：回设置页看 Key 是否还在，再去开放平台确认账号状态。
**它一直弹权限确认。** 现象是每读一个文件都问一次。原因是当前权限策略偏保守。怎么办：这是默认行为，先按提示确认；确实要放权，再在设置里调整策略，别一上来就给完全访问。
**3080 端口被占用。** 现象是命令行启动报端口冲突。原因是上一次的进程没退干净，或者别的服务占着。怎么办：关掉旧进程，或用 `--port` 换一个端口启动。
**中文在终端里是方块。** 现象是命令行输出乱码。原因是 Windows 终端编码不是 UTF-8。怎么办：Windows Terminal 里执行 `chcp 65001`，或换用 PowerShell 7。

## 延伸阅读

- 官网：<https://www.deepseek.com/harness>
- 源码仓库：<https://github.com/deepseek-ai/deepseek-harness>
- 官方文档站：<https://deepseek-harness.github.io/deepseek-harness/>
- 网页版使用指南：<https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md>
- 模型接入说明：<https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md>

版本说明：写于 2026-10-18。项目处于开发者预览阶段，官方明确说会有破坏性变更，菜单名称和启动参数以你本机与最新文档为准。
