---
title: DeepSeek Harness 上手：装好、接上模型、跑通第一个任务
tool: deepseek-harness
summary: DeepSeek 开源智能体框架的完整上手：桌面版与命令行两种装法，接上模型，让它读完项目再改第一个文件。
updatedAt: 2026-10-18
screenshots: []
sourceUrls:
  - https://www.deepseek.com/harness
  - https://github.com/deepseek-ai/deepseek-harness
  - https://deepseek-harness.github.io/deepseek-harness/
  - https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md
  - https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md
---

> **这篇覆盖什么**：装好（桌面版 / 命令行）→ 接上 DeepSeek 模型 → 选工作区 → 跑通第一个任务 → 接第三方或自定义模型 → 付费与排错。
>
> **你需要准备**：一个 DeepSeek 账号（手机号注册）、一个放代码的文件夹、约 25 分钟。

## 它能做什么

DeepSeek Harness（命令行叫 dsh）是深度求索开源的智能体框架。它不是只会在编辑器里补全几行代码的插件，而是一个能读项目、改文件、跑命令、开子任务的工作台：你给一个目录和一句话，它自己拆步骤、调工具，遇到写文件或执行命令时先问你。

三种形态，能力是同一套：桌面应用（Electron 外壳）、浏览器里的网页版（本地起服务）、命令行。适合：想让 AI 直接动项目文件的人；要把「读代码 — 改代码 — 跑测试」串成流水线的人；想用插件拼自己工作流的人。

不适合：只想在 IDE 里补全几行代码的人（有更轻的工具）；对「AI 能执行命令」有顾虑、又不愿意看权限弹窗的人——它的默认策略就是每一步都让你确认。

它和聊天式工具最大的差别在插件化：模型、工具、会话、界面都是插件，装什么插件就有什么能力。所以第一次用会觉得入口多，熟悉之后才知道哪些是自己加的。

## 国内怎么用

官方明确国内可用，`data/products/deepseek-harness.yaml` 里 `accessCN` 是 `true`。注册用手机号，主站和开放平台都在国内，不需要境外手机号和境外支付。

账号分两层：一层是 DeepSeek 账号（手机号注册，按官方隐私说明需要实名），用来登录和计费；另一层是模型服务，也就是在开放平台申请的 API Key。装好工具不等于能用模型，两步都要走。

只用本地模型可以跳过 API Key：Harness 支持自定义 OpenAI 兼容端点，把地址指向本机的模型服务即可，这种用法不需要注册。

## 安装

两条路选一条。桌面版省心，命令行版适合服务器和远程机器。

### 桌面版

1. 打开 <https://www.deepseek.com/harness>。
2. 页面上有对应系统的安装包，下载 Windows 或 macOS 版本。
3. Windows 双击安装，macOS 打开 dmg 把应用拖进「应用程序」。
4. 装完打开，得到的是一个原生窗口，里面跑的就是完整的网页版。

### 命令行版

先装 Node.js 20 以上，然后运行官方 README 里的命令：

    npx @deepseek-ai/dsh web

它会在 `http://127.0.0.1:3080` 起一个本地服务，并自动打开浏览器。不想自动开就加 `--no-open`。

想跑一次性任务、不打开界面，用无头模式：

    dsh --profile headless "跑一遍测试"

### 从源码跑（可跳过）

要改它自己才需要这条：克隆仓库后 `pnpm install`、`pnpm run build`，再用 `pnpm dsh web` 启动。`pnpm run build` 先把产物准备好，`pnpm dsh web` 直接用产物，不会重新构建。

核对版本：官方 README 在 2026-10 标注的是开发者预览（developer preview），并明确说会有破坏性变更。你装到的版本可能更新，以下步骤以你本机为准。

## 登录与开通

Harness 不单独注册账号，它用的是 DeepSeek 的模型服务。分两步：先去开放平台拿 Key，再填进 Harness。

### 第一步：拿 API Key

1. 打开 <https://platform.deepseek.com/>，用手机号登录，完成实名。
2. 进「API Keys」，点新建，复制生成的 Key。它只完整显示一次，关掉就看不到了。

### 第二步：填进 Harness

1. 打开 Harness，进设置里的「模型」（Settings → Models）。
2. 页面上 DeepSeek 那张卡只有一个 API Key 输入框，粘贴进去，保存。
3. 按官方文档，保存后模型立刻可用，下一次请求就生效，不用重启服务。

这个 Key 是只写的：保存后页面拿到的是脱敏描述，不是原文；它存在 `$DSH_HOME/.credentials.yaml` 里，设置里只留一个凭据引用。所以别指望回设置页把 Key 再复制出来，丢了就重新生成一个。

## 跑通第一个任务

目标：让它先读懂项目，再改一个文件，全程看到它在做什么。

### 1. 选工作区

打开 Harness，第一次进来是空的。点「选择工作区」（Choose workspace），选一个放代码的文件夹。官方文档特别说明：没选工作区之前，输入框是不可用的——新手最容易卡在这一步。

### 2. 先让它读，不让它写

新建会话，输入：`先读一遍这个目录，用三句话说明它是做什么的，不要改任何文件。`

它会调用读文件的工具，把目录结构和关键文件列出来，再给一段总结。先做这步是为了确认它理解的是你的项目，而不是照文件名猜。

### 3. 让它改一个文件

接着输入：`在 README 末尾加一行「本地运行：先看 package.json 的 scripts」，只改这一处。`

它会请求写文件权限。弹窗里能看到要改的文件和 diff，确认后文件才真的被改。

### 4. 验收

打开那个 README，看到新增的一行，任务就跑通了。这一步同时验证三件事：模型连上了、工具能读能写、审批策略在生效。

之后可以试一句更长的：`找出这个项目里没有测试的模块，列出来，先不要动手。` 这能看出它的规划能力，也不会改动任何文件。

## 接入自己的模型 / API Key

除了官方 DeepSeek 模型，还有两条路。

### 用目录里的第三方厂商

设置页点「Add model provider」，卡片默认停在「Third-party model provider」。选 Harness 自带的厂商即可，列表里能看到 `anthropic`、`openai`、`moonshotai`（Kimi）、`zai`（GLM）这些 provider id。填 Key、保存，端点、协议和模型列表由内置目录提供。

认证那一栏的「?」写清了优先级：空着就用已保存的凭据，或者试列出来的环境变量。绿色提示表示检测到了环境变量，黄色表示没检测到。注意：这个检测只说明变量存在，不校验 Key 能不能用。

### 接自定义网关 / 本地模型

把卡片切到「Custom model API」，填五样：

- Provider ID：小写、永久，写错只能新建一个再删旧的。
- Base URL：网关或本地服务的地址。
- API protocol：三选一，OpenAI Chat Completions、OpenAI Responses、Anthropic Messages，必须和网关说的一致。
- 凭据。
- 至少一个模型 ID。

模型 ID 可以手填，也可以点「Fetch available models」让端点自己报。官方提醒这只是便利功能：有的端点不按常见格式返回，抓不到就手填，效果一样。

接本地模型（Ollama、vLLM 之类）时，先确认本机服务已经起来，再把地址指过去。改完开一个新会话验证，老会话可能带着旧模型的上下文，报错会让人误判成配置没生效。

## 怎么付费

工具免费，钱花在模型上。Harness 是 MIT 许可的开源项目；云端模型调用按你接的服务计费，官方 API 按 token 计费，输入和输出单价不同，缓存命中的输入更便宜，具体单价见 <https://api-docs.deepseek.com/quick_start/pricing>。

智能体比聊天更费 token：一次任务要读多个文件、跑多轮工具调用，账单涨得比预期快。建议先小额充值，跑几天看日均消耗，再决定要不要开自动充值。

## 常见问题

**输入框是灰的，打不了字。** 现象是打开就有输入框但点不进去。原因是还没选工作区。怎么办：点「选择工作区」选一个目录；空目录也可以，先选上再说。

**模型列表里没有可选项。** 现象是填了 Key 但会话里用不了。原因是 Key 没保存成功，或账号没完成实名。怎么办：回设置页看 Key 是否还在，再去开放平台确认账号状态。

**它一直弹权限确认。** 现象是每读一个文件都问一次。原因是当前权限策略偏保守。怎么办：这是默认行为，先按提示确认；确实要放权，再在设置里调整，别一上来就给完全访问。

**3080 端口被占用。** 现象是命令行启动报端口冲突。原因是上一次的进程没退干净。怎么办：关掉旧进程，或换端口启动。

**中文在终端里是方块。** 现象是命令行输出乱码。原因是 Windows 终端编码不是 UTF-8。怎么办：在 Windows Terminal 里执行 `chcp 65001`，或换 PowerShell 7。

## 延伸阅读

- 官网：<https://www.deepseek.com/harness>
- 源码仓库：<https://github.com/deepseek-ai/deepseek-harness>
- 官方文档站：<https://deepseek-harness.github.io/deepseek-harness/>
- 网页版使用指南：<https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md>
- 模型接入说明：<https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md>

版本说明：写于 2026-10-18。项目处于开发者预览阶段，官方明确说会有破坏性变更，菜单名称和启动参数以你本机与最新文档为准。
