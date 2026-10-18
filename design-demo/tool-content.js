window.KAIWU_TOOL_DETAIL_DATA = {
  "asOf": "2026-10-11",
  "tools": {
    "claude-code": {
      "id": "claude-code",
      "sourceId": "reczz28M3WEAVN6l",
      "name": "Claude Code",
      "intro": "Anthropic 的编程智能体，可读取代码库、修改文件、运行命令，帮助实现功能和修复问题。",
      "category": "编程工具",
      "vendor": "Anthropic",
      "forms": "CLI · VS Code 插件 · JetBrains 插件 · 桌面应用 · 网页 · 移动 App",
      "platforms": "Windows / macOS / Linux；网页与移动端按客户端开放。",
      "models": "CLI、VS Code、JetBrains 可通过 Claude 订阅、Anthropic Console / API，以及官方列出的云服务商接入。模型由账号和提供商决定，可用 /model 选择。\n标准桌面版默认连接 Anthropic；组织版另支持管理员配置的云服务及兼容网关。\nClaude 官方自定义网关不支持路由到非 Claude 模型。其他厂商提供的兼容接入需按各自文档使用。",
      "signup": "CLI 和扩展通过浏览器登录 Claude 订阅或 Console 账号，也可配置 API 认证；标准桌面版登录 Claude。",
      "free": "包含在付费 Claude 套餐中；标准桌面 Code 需要付费订阅。",
      "home": "https://claude.com/product/claude-code",
      "guide": "https://code.claude.com/docs/en/quickstart.md",
      "guideUrls": [
        "https://code.claude.com/docs/en/quickstart.md",
        "https://code.claude.com/docs/en/desktop.md",
        "https://code.claude.com/docs/en/model-config.md",
        "https://claude.com/docs/third-party/claude-desktop/overview"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "C",
      "modelMode": "订阅 / API / 云服务",
      "ownGroup": "claude-code",
      "guideLinks": [
        {
          "url": "https://code.claude.com/docs/en/quickstart.md",
          "label": "CLI 快速入门"
        },
        {
          "url": "https://code.claude.com/docs/en/desktop.md",
          "label": "桌面版指南"
        },
        {
          "url": "https://code.claude.com/docs/en/model-config.md",
          "label": "模型配置"
        },
        {
          "url": "https://claude.com/docs/third-party/claude-desktop/overview",
          "label": "桌面组织推理接入"
        }
      ]
    },
    "codex": {
      "id": "codex",
      "sourceId": "reczz28M3WEAWOWg",
      "name": "Codex",
      "intro": "OpenAI 的编程智能体，可在代码库中检查和修改文件、运行命令，并协助审查和完成开发任务。",
      "category": "编程工具",
      "vendor": "OpenAI",
      "forms": "桌面应用 · CLI · VS Code 插件 · JetBrains 插件 · 网页 · 移动 App",
      "platforms": "Windows / macOS / Linux / 浏览器 / iOS",
      "models": "桌面、CLI、IDE 扩展支持 ChatGPT 登录和 OpenAI API Key；模型权限随账号、客户端与工作区而定，API Key 用其 API 项目可用模型。\n当前官方推荐 GPT-6.1 Sol 或 GPT-6 Luna，复杂任务也有 GPT-6 Astra；是否出现由账号与客户端决定。\n本地桌面、CLI、IDE 扩展可在配置中指定自定义 provider、base URL 与凭证；官方另列 Amazon Bedrock 直接接入受支持 OpenAI 模型的路径。\nCLI 的 --oss 模式支持 Ollama 或 LM Studio 本地模型；自定义提供商须满足相应协议和功能要求。",
      "signup": "使用 ChatGPT 账号登录，或选择 OpenAI Platform API Key；各客户端权限按对应方案开放。",
      "free": "Free 账号可按开放进度体验桌面版的部分功能；各客户端与云端功能的权限分别以官方方案为准。",
      "home": "https://learn.chatgpt.com/docs/quickstart.md",
      "guide": "https://learn.chatgpt.com/docs/cli.md",
      "guideUrls": [
        "https://learn.chatgpt.com/docs/cli.md",
        "https://learn.chatgpt.com/docs/codex/ide.md",
        "https://learn.chatgpt.com/docs/auth.md",
        "https://learn.chatgpt.com/docs/config-file/config-advanced.md"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "O",
      "modelMode": "ChatGPT / API / 自定义服务",
      "ownGroup": "codex",
      "guideLinks": [
        {
          "url": "https://learn.chatgpt.com/docs/cli.md",
          "label": "CLI 入门"
        },
        {
          "url": "https://learn.chatgpt.com/docs/codex/ide.md",
          "label": "IDE 使用指南"
        },
        {
          "url": "https://learn.chatgpt.com/docs/auth.md",
          "label": "登录与 API 认证"
        },
        {
          "url": "https://learn.chatgpt.com/docs/config-file/config-advanced.md",
          "label": "自定义提供商与本地模型"
        }
      ]
    },
    "cursor": {
      "id": "cursor",
      "sourceId": "reczz28M3WEAXkaa",
      "name": "Cursor",
      "intro": "面向代码开发的 AI 编辑器与智能体，可理解代码库、规划功能、修改代码、修复问题和审查变更。",
      "category": "编程工具",
      "vendor": "Anysphere",
      "forms": "独立 IDE · 桌面应用 · CLI · JetBrains 插件 · 网页 · 移动 App",
      "platforms": "Windows / macOS / Linux / 浏览器 / iOS",
      "models": "编辑器内置 Cursor 与第三方模型，包括 Composer 2.5；模型使用按对应使用池计入。\n模型文档还列有 Claude Sonnet 5.5、Gemini 3.8 Flash 等。\n编辑器 Settings > Models 可自备 OpenAI、Anthropic、Google、Azure OpenAI、AWS Bedrock 凭证；自备 Key 只用于聊天模型，Tab 补全仍用内置模型。\nCLI 用 Cursor 账号或 Cursor Dashboard 生成的用户 API Key 认证；用 /model 或 --model 选模型，--list-models 查看可用列表。\nJetBrains ACP 可选择 OpenAI、Anthropic、Google、Cursor 的可用前沿模型；iOS App 选择云端 agent 可用模型。",
      "signup": "使用 Cursor 账号登录；CLI 的 agent login 打开浏览器完成认证，自动化可在 Cursor Dashboard 生成用户 API Key。",
      "free": "Hobby 免费档提供有限 Agent 请求，可使用 Composer，无需信用卡。",
      "home": "https://cursor.com/download",
      "guide": "https://cursor.com/docs/get-started/quickstart",
      "guideUrls": [
        "https://cursor.com/docs/get-started/quickstart",
        "https://cursor.com/docs/cli/reference/authentication",
        "https://cursor.com/help/models-and-usage/api-keys",
        "https://cursor.com/docs/integrations/jetbrains",
        "https://cursor.com/docs/cloud-agent/mobile"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "C",
      "ownGroup": "cursor",
      "guideLinks": [
        {
          "url": "https://cursor.com/docs/get-started/quickstart",
          "label": "使用入门"
        },
        {
          "url": "https://cursor.com/docs/cli/reference/authentication",
          "label": "CLI 登录"
        },
        {
          "url": "https://cursor.com/help/models-and-usage/api-keys",
          "label": "编辑器自备 API Key"
        },
        {
          "url": "https://cursor.com/docs/integrations/jetbrains",
          "label": "JetBrains ACP"
        },
        {
          "url": "https://cursor.com/docs/cloud-agent/mobile",
          "label": "iOS App"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "deepseek-harness": {
      "id": "deepseek-harness",
      "sourceId": "reczz28M3WEAXt3d",
      "name": "DeepSeek Harness",
      "intro": "DeepSeek 开源智能体框架，通过插件扩展能力，可处理项目编码、文档、数据和后台任务。",
      "category": "编程工具",
      "vendor": "DeepSeek",
      "forms": "桌面应用 · 网页 · CLI",
      "platforms": "macOS / Windows / 浏览器",
      "models": "桌面使用共享 Web 界面并有 DeepSeek 账号/API Key 路径；开源 Web 设置页可填 DeepSeek Key、第三方供应商 Key，或自定义 OpenAI Chat Completions、OpenAI Responses、Anthropic Messages 兼容端点；该设置页暂不支持 Codex 等供应商 OAuth。",
      "signup": "桌面支持 DeepSeek 账号登录及官方 API Key 路径；开源 Web 可在 Settings → Models 保存模型供应商 API Key。",
      "free": "工具开源，采用 MIT 许可；云端模型调用按接入服务计费。",
      "home": "https://www.deepseek.com/en/harness/",
      "guide": "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md",
      "guideUrls": [
        "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md",
        "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "D",
      "guideLinks": [
        {
          "url": "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md",
          "label": "Web 入门"
        },
        {
          "url": "https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md",
          "label": "模型接入"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "doubao-work": {
      "id": "doubao-work",
      "sourceId": "reczz28M3WEAWU4M",
      "name": "豆包工作",
      "intro": "围绕工作目标自动规划、搜索和调用工具，交付文档、表格、PPT、网页或应用，并接入飞书协作。",
      "category": "办公工具",
      "vendor": "字节跳动",
      "forms": "桌面应用 · 网页",
      "platforms": "PC 客户端与网页；客户端系统要求见官方下载页。",
      "models": "桌面工作台及豆包、飞书入口由产品按任务组织调用字节自研模型，包括 Seed 2.1、Seedance 2.0/2.5、Seedream 5.0；具体模型和额度受账号、入口、套餐及企业配置影响。\n\n会员核心权益：截图会员权益：工作任务2.1 Pro、图片Seedream 5.0 Pro、视频Seedance 2.5。",
      "signup": "独立 PC 客户端可用豆包账号或飞书账号登录，分别对应个人与企业身份；飞书内沿用当前账号，两种身份的数据、权益和权限不会自动互通。",
      "free": "官方介绍页提供下载 PC 客户端、登录领取 30 天免费会员的试用入口。",
      "home": "https://www.doubao.com/work",
      "guide": "https://www.feishu.cn/content/article/7677519271848610746",
      "guideUrls": [
        "https://www.feishu.cn/content/article/7677519271848610746"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "豆",
      "ownGroup": "doubao-work",
      "guideLinks": [
        {
          "url": "https://www.feishu.cn/content/article/7677519271848610746",
          "label": "官方产品与使用说明"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "github-copilot": {
      "id": "github-copilot",
      "sourceId": "reczz28M3WEAWTkF",
      "name": "GitHub Copilot",
      "intro": "GitHub 的 AI 编程助手，可补全代码、解答代码库问题、审查变更，并让智能体处理开发任务。",
      "category": "编程工具",
      "vendor": "GitHub",
      "forms": "桌面应用 · CLI · VS Code 插件 · JetBrains 插件 · 网页 · 移动 App",
      "platforms": "Windows / macOS / Linux / 浏览器 / iOS / Android",
      "models": "GitHub 托管模型按套餐与客户端开放；官方目录列有 GPT-6.1 Sol、Claude Sonnet 5.5、Gemini 3.8 Flash 等，不能把目录理解为所有入口都可选。\nCLI BYOK 支持 OpenAI 兼容端点、Azure OpenAI、Anthropic，并支持 Ollama 等本地模型；模型必须支持工具调用及流式输出。\n桌面 App 的 BYOK 为公开预览，支持 OpenAI、Azure OpenAI、Microsoft Foundry、Anthropic、Ollama、Foundry Local、LM Studio，以及 OpenAI 兼容 HTTP 端点；通过设置添加 provider。\n本地 BYOK 可用于 VS Code、JetBrains、Xcode、CLI、桌面 App 和 SDK；企业集中 BYOK 由管理员配置，需 Copilot 许可证和网络访问。",
      "signup": "使用 GitHub 账号；CLI 首次通过 /login 完成认证，桌面 App 点击 Sign in to GitHub。桌面自备模型仍需 GitHub 账号，但不要求购买 Copilot 计划。",
      "free": "Copilot Free 提供 AI credits 额度及每月 2,000 次代码补全，免费档通过 Auto 选择模型。",
      "home": "https://github.com/features/copilot",
      "guide": "https://docs.github.com/en/copilot/get-started/where-to-use-github-copilot",
      "guideUrls": [
        "https://docs.github.com/en/copilot/get-started/where-to-use-github-copilot",
        "https://docs.github.com/en/copilot/get-started/cli-quickstart",
        "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models",
        "https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models",
        "https://docs.github.com/en/copilot/concepts/models/bring-your-own-key"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "G",
      "ownGroup": "github-copilot",
      "guideLinks": [
        {
          "url": "https://docs.github.com/en/copilot/get-started/where-to-use-github-copilot",
          "label": "各客户端入口"
        },
        {
          "url": "https://docs.github.com/en/copilot/get-started/cli-quickstart",
          "label": "CLI 入门"
        },
        {
          "url": "https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models",
          "label": "CLI 自备模型"
        },
        {
          "url": "https://docs.github.com/en/copilot/how-tos/github-copilot-app/use-byok-models",
          "label": "桌面 App 自备模型"
        },
        {
          "url": "https://docs.github.com/en/copilot/concepts/models/bring-your-own-key",
          "label": "本地与企业 BYOK 区别"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "google-antigravity": {
      "id": "google-antigravity",
      "sourceId": "reczz28M3WEAYoCh",
      "name": "Google Antigravity",
      "intro": "Google 的智能体开发平台，可让 AI 在项目中读写文件、运行命令、操作浏览器，并通过计划和差异审查完成开发任务。",
      "category": "编程工具",
      "vendor": "Google",
      "forms": "桌面应用 · 独立 IDE · CLI · VS Code 插件 · JetBrains 插件",
      "platforms": "Windows / macOS / Linux",
      "models": "Google 账号路径的桌面、CLI、IDE 扩展按同一账号方案获得模型权限和额度；可在模型选择器中选可用模型。\n当前官方模型表列有 Gemini 3.8 Flash、Gemini 3.1 Pro、Claude Sonnet／Opus 5.5 Thinking、GPT-OSS-120b 等，依套餐开放；Pro 的 Claude 5.5 仅限非试用订阅。\nCLI 可设置 modelProvider=gemini 并使用 GEMINI_API_KEY，模型请求直接发往 Gemini API，无需建立 Google 账号会话；可用 GOOGLE_GEMINI_BASE_URL 指向 Gemini 兼容端点。\nPlans 页关于额外 rate limits 明确不支持 BYOK／自备端点；不将该方案说明扩大为 CLI 没有 Gemini API Key 路径。\nSDK 另有 LiteRT 本地推理与 OpenAI 兼容本地服务配置，支持接 Ollama、LM Studio、vLLM；这属于 SDK 路径。",
      "signup": "桌面和 IDE 扩展使用个人 Google 账号，企业可选 Gemini Enterprise；CLI 首次打开浏览器登录，或使用官方文档列出的 Gemini API Key 路径。",
      "free": "提供每周刷新的基础额度，包含 Gemini 模型、Tab 补全与 CLI 等基础功能。",
      "home": "https://www.antigravity.google/",
      "guide": "https://www.antigravity.google/docs/getting-started/",
      "guideUrls": [
        "https://www.antigravity.google/docs/getting-started/",
        "https://www.antigravity.google/docs/cli/install/",
        "https://www.antigravity.google/docs/ide/extensions/",
        "https://www.antigravity.google/docs/models",
        "https://www.antigravity.google/docs/sdk/local-models/"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "A",
      "ownGroup": "google-antigravity",
      "guideLinks": [
        {
          "url": "https://www.antigravity.google/docs/getting-started/",
          "label": "各形态安装与入门"
        },
        {
          "url": "https://www.antigravity.google/docs/cli/install/",
          "label": "CLI 安装认证与 API Key"
        },
        {
          "url": "https://www.antigravity.google/docs/ide/extensions/",
          "label": "IDE 扩展"
        },
        {
          "url": "https://www.antigravity.google/docs/models",
          "label": "模型与方案权限"
        },
        {
          "url": "https://www.antigravity.google/docs/sdk/local-models/",
          "label": "SDK 本地模型"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "jimeng": {
      "id": "jimeng",
      "sourceId": "reczz28M3WEAYDjT",
      "name": "即梦 AI",
      "intro": "用文字或图片生成视频、绘画，并在智能画布中局部重绘、扩图和组合素材。",
      "category": "AIGC 创作",
      "vendor": "深圳市脸萌科技有限公司",
      "forms": "网页 · 移动 App",
      "platforms": "网页版；Android、iOS App。",
      "models": "支持文字或图片生成视频，以及图片生成、局部重绘、扩图和画布创作。\n已收录会员包含 Seedance 2.0 VIP、图片 4.0、图片 5.0 Lite、图片 4.6；不同档位的分辨率与生成通道权益见套餐。",
      "signup": "使用剪映账号，通过第三方账号授权登录；进入 AI 生成功能需要登录。",
      "free": "",
      "home": "https://jimeng.jianying.com/",
      "guide": "",
      "guideUrls": [],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "即",
      "links": [
        {
          "label": "即梦 AI 官网",
          "url": "https://jimeng.jianying.com/ai-tool/home/"
        }
      ],
      "ownGroup": "jimeng",
      "guideLinks": [
        {
          "label": "即梦 AI 官网",
          "url": "https://jimeng.jianying.com/ai-tool/home/"
        }
      ],
      "modelMode": "内置图像 / 视频模型"
    },
    "kling": {
      "id": "kling",
      "sourceId": "reczz28M3WEAYjtX",
      "name": "可灵 AI",
      "intro": "通过文字、图片及参考素材生成和编辑视频、图像，用画布与 Agent 组织创作流程。",
      "category": "AIGC 创作",
      "vendor": "快手",
      "forms": "网页 · 桌面应用 · 移动 App · CLI",
      "platforms": "浏览器 / Windows / macOS / Android / iOS",
      "models": "全球官网当前展示 Kling 4.0 视频模型和 Kling Image 3.0 图像模型；网页创作室支持生成、编辑、画布与 Agent。另提供 MCP/CLI 和 API 开发者入口；其模型可用范围和费用不据网页会员推定。\n\n会员核心权益：中文会员截图列视频2.6音色控制；黑金年卡标Kling 4.0 Flash抢先体验。",
      "signup": "国内入口使用统一快手账号，可用手机号动态验证注册登录；全球条款说明首次邮箱验证可建立平台账号，并使用账号及密码登录。",
      "free": "",
      "home": "https://klingai.kuaishou.com/（本轮跳转",
      "guide": "https://kling.ai/quickstart",
      "guideUrls": [
        "https://kling.ai/quickstart"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "可",
      "guideLinks": [
        {
          "url": "https://kling.ai/quickstart",
          "label": "官方入门与模型教程"
        }
      ],
      "modelMode": "内置图像 / 视频模型"
    },
    "midjourney": {
      "id": "midjourney",
      "sourceId": "reczz28M3WEAVQux",
      "name": "Midjourney",
      "intro": "通过文字或参考图生成、编辑图片，并将图片制作成视频。",
      "category": "AIGC 创作",
      "vendor": "Midjourney, Inc.",
      "forms": "网页",
      "platforms": "浏览器",
      "models": "官网或 Discord 使用 Midjourney 自研图像模型，当前默认版本为 V8.2；可在官网 Imagine 输入栏设置或 Discord 提示词中用 --v 参数选择可用版本。",
      "signup": "官网使用 Google 或 Discord 账号登录；可在账号设置中关联另一种登录方式，已有 Discord 创作记录的用户应沿用 Discord 登录。",
      "free": "官网与 Discord 暂无免费试用；niji · journey 移动 App 另有有限试用。",
      "home": "https://www.midjourney.com/",
      "guide": "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide",
      "guideUrls": [
        "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "M",
      "ownGroup": "midjourney",
      "guideLinks": [
        {
          "url": "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide",
          "label": "官方入门指南"
        }
      ],
      "modelMode": "内置创作模型"
    },
    "opencode": {
      "id": "opencode",
      "sourceId": "reczz28M3WEAWf9F",
      "name": "OpenCode",
      "intro": "开源编程智能体，可在终端、桌面、Web 和编辑器集成中帮助修改项目代码。",
      "category": "编程工具",
      "vendor": "Anomaly 与开源贡献者",
      "forms": "CLI · 桌面应用 · 网页 · VS Code 插件",
      "platforms": "macOS / Windows / Linux / 浏览器",
      "models": "CLI/TUI 用 /connect 连接模型供应商，可用供应商 Key、GitHub Copilot 设备 OAuth，以及官网列出的 ChatGPT Plus/Pro 登录；当前版本 可配置兼容接口，并发现 Ollama、LM Studio、vLLM 等本地模型。插件通过编辑器终端使用 CLI；可用模型受供应商授权和协议能力限制。",
      "signup": "CLI 用 /connect 连接所选供应商；使用 Go/Go Plus 时先登录 OpenCode Console 订阅并复制 Key，Copilot 则完成 GitHub 设备授权。",
      "free": "工具开源，官网提供部分免费模型；也可连接自有供应商服务或本地模型。Go 为可选订阅。",
      "home": "https://opencode.ai/",
      "guide": "https://opencode.ai/v2/docs/",
      "guideUrls": [
        "https://opencode.ai/v2/docs/",
        "https://opencode.ai/v2/docs/providers",
        "https://opencode.ai/docs/ide/"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "O",
      "ownGroup": "opencode",
      "guideLinks": [
        {
          "url": "https://opencode.ai/v2/docs/",
          "label": "当前版本"
        },
        {
          "url": "https://opencode.ai/v2/docs/providers",
          "label": "模型供应商"
        },
        {
          "url": "https://opencode.ai/docs/ide/",
          "label": "IDE 扩展"
        }
      ],
      "modelMode": "多供应商 / 本地模型"
    },
    "pi": {
      "id": "pi",
      "sourceId": "reczz28M3WEAYrfn",
      "name": "Pi",
      "intro": "可通过扩展定制的终端智能体，能够读写项目文件、执行命令并处理多步任务。",
      "category": "编程工具",
      "vendor": "Earendil Inc. 与开源贡献者",
      "forms": "CLI",
      "platforms": "macOS / Linux / Windows / Android",
      "models": "CLI 通过 /login 使用所支持供应商的订阅登录或 API Key，再用 /model 选择模型；可接本地 llama.cpp、Ollama、LM Studio 等，也可在 models.json 配置 OpenAI、Anthropic、Google 兼容接口或安装供应商扩展。",
      "signup": "安装后运行 /login 选择模型供应商，按提示使用供应商订阅或保存 API Key；具体登录由所选供应商提供。",
      "free": "程序采用 MIT 开源许可。使用云端模型仍需对应订阅或 API Key，也可接入本地模型。",
      "home": "https://pi.dev/",
      "guide": "https://pi.dev/docs/latest",
      "guideUrls": [
        "https://pi.dev/docs/latest",
        "https://pi.dev/docs/latest/models",
        "https://pi.dev/docs/latest/providers"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "π",
      "guideLinks": [
        {
          "url": "https://pi.dev/docs/latest",
          "label": "文档"
        },
        {
          "url": "https://pi.dev/docs/latest/models",
          "label": "模型接入"
        },
        {
          "url": "https://pi.dev/docs/latest/providers",
          "label": "供应商"
        }
      ],
      "modelMode": "订阅 / API / 本地模型"
    },
    "qianwen-work": {
      "id": "qianwen-work",
      "sourceId": "reczz28M3WEAYik8",
      "name": "千问办公",
      "intro": "通过任务对话完成资料分析、文档、表格、PPT 和网页制作，并直接交付可继续使用的成果。",
      "category": "办公工具",
      "vendor": "阿里巴巴",
      "forms": "网页 · 桌面应用",
      "platforms": "Windows / macOS / Linux / 浏览器",
      "models": "网页端在输入框旁选择“基础/高级”；桌面端模型选择器提供“高级/标准/Qwen3.8-Max”，模型列表会更新。产品以千问系列模型为基座。",
      "signup": "网页版使用手机号验证码或钉钉扫码登录；首次钉钉扫码需要绑定手机号。钉钉内可沿用钉钉账号进入。",
      "free": "有免费版。当前限时权益为新注册赠送 2,000 积分（90 天有效），每日登录赠送 100 积分（当日有效）。",
      "home": "https://qwenwork.cn/",
      "guide": "https://help.aliyun.com/zh/qwenwork/qwenwork-intro",
      "guideUrls": [
        "https://help.aliyun.com/zh/qwenwork/qwenwork-intro",
        "https://qwenwork.cn/docs/getting-started/basic-workflow"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "千",
      "ownGroup": "qianwen-work",
      "guideLinks": [
        {
          "url": "https://help.aliyun.com/zh/qwenwork/qwenwork-intro",
          "label": "官方简介"
        },
        {
          "url": "https://qwenwork.cn/docs/getting-started/basic-workflow",
          "label": "官方简介：https://help.aliyun.com/zh/qwenwork/qwenwork-intro；Web 操作指南"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "trae": {
      "id": "trae",
      "sourceId": "reczz28M3WEAUx3I",
      "name": "TRAE",
      "intro": "融合 Agent 工作台与 IDE 的 AI 开发工具，可理解项目、修改代码、运行命令并验证结果。",
      "category": "编程工具",
      "vendor": "字节跳动；中国版运营主体为北京引力弹弓科技有限公司",
      "forms": "独立 IDE · 桌面应用 · 网页 · 移动 App · VS Code 插件 · JetBrains 插件 · CLI",
      "platforms": "macOS / Windows / Linux / 浏览器",
      "models": "国内版：内置Seed、GLM、DeepSeek、Kimi、MiniMax等模型。桌面 IDE/Agent 窗口可用内置模型，或填供应商 Key/Coding Plan/Agent Plan，配置 OpenAI Chat Completions、Anthropic Messages 兼容接口。Web/移动与企业插件/CLI 使用各自获授权的内置或企业配置模型；企业管理员可统一配置全端模型，成员自定义模型权限需管理员开启。\n国际版：按国际版内置模型与套餐权限使用，模型名单见 https://docs.trae.ai/ide/models 。国内版模型、自定义接入规则不直接套用到国际版。",
      "signup": "中国版桌面引导支持手机号、抖音及苹果账号登录；企业 CLI 首次启动引导账号或自定义域登录，自动化可用 PAT。",
      "free": "国内版：免费用户可领取新注册、每月登录、签到和邀请奖励积分；调用自定义模型不消耗 TRAE 积分。官网新用户福利与计费页注册/月度赠送采用不同展示口径，详见说明。",
      "home": "https://www.trae.cn/",
      "guide": "https://docs.trae.cn/ide_get-started-with-trae",
      "guideUrls": [
        "https://docs.trae.cn/ide_get-started-with-trae",
        "https://docs.trae.cn/ide_models",
        "https://docs.trae.cn/ide_plans-and-billing",
        "https://docs.trae.cn/plugin_what-is-trae-plugin",
        "https://docs.trae.cn/cli_get-started-with-trae-code-cli-2",
        "https://docs.trae.ai/ide/models"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "T",
      "versions": {
        "cn": {
          "label": "国内版",
          "forms": "桌面工作台 / IDE · 网页 · 移动端；企业插件与 CLI 按授权使用",
          "platforms": "桌面、网页与移动端能力分别以对应客户端为准；企业 CLI 与插件按企业配置开放。",
          "models": "内置 Seed、GLM、DeepSeek、Kimi、MiniMax 等模型，具体型号与权限以国内版模型页为准。\n桌面版支持自带模型服务，兼容 OpenAI Chat Completions 与 Anthropic Messages 接口，可配置 API Key 或 Coding / Agent Plan。",
          "signup": "桌面端支持手机号、抖音与苹果账号登录。企业 CLI 使用账号或自定义域登录。",
          "free": "可领取新注册、每月登录、签到及邀请奖励积分。调用自定义模型不消耗 TRAE 积分。",
          "home": "https://www.trae.cn/",
          "guide": "https://docs.trae.cn/ide_get-started-with-trae",
          "links": [
            {
              "label": "国内版模型与接入",
              "url": "https://docs.trae.cn/ide_models"
            },
            {
              "label": "国内版套餐说明",
              "url": "https://docs.trae.cn/ide_plans-and-billing"
            },
            {
              "label": "企业插件指南",
              "url": "https://docs.trae.cn/plugin_what-is-trae-plugin"
            },
            {
              "label": "企业 CLI 指南",
              "url": "https://docs.trae.cn/cli_get-started-with-trae-code-cli-2"
            }
          ],
          "group": "trae-cn"
        },
        "global": {
          "label": "国际版",
          "forms": "Trae Work 网页 / 桌面工作台 · Trae Code / SOLO",
          "platforms": "按 Trae Work 与 Trae Code 各客户端的官方说明选择安装或网页入口。",
          "models": "国际版使用自己的模型目录与套餐额度。可用模型及权限查看国际版官方模型页。",
          "signup": "从国际版官网进入，按对应客户端的账号登录引导使用。",
          "free": "",
          "home": "https://www.trae.ai/",
          "guide": "https://docs.trae.ai/ide/models",
          "links": [
            {
              "label": "国际版模型说明",
              "url": "https://docs.trae.ai/ide/models"
            },
            {
              "label": "国际版套餐价格",
              "url": "https://www.trae.ai/pricing/"
            }
          ],
          "group": "trae-global"
        }
      },
      "guideLinks": [
        {
          "url": "https://docs.trae.cn/ide_get-started-with-trae",
          "label": "入门"
        },
        {
          "url": "https://docs.trae.cn/ide_models",
          "label": "模型"
        },
        {
          "url": "https://docs.trae.cn/ide_plans-and-billing",
          "label": "套餐"
        },
        {
          "url": "https://docs.trae.cn/plugin_what-is-trae-plugin",
          "label": "插件"
        },
        {
          "url": "https://docs.trae.cn/cli_get-started-with-trae-code-cli-2",
          "label": "CLI"
        },
        {
          "url": "https://docs.trae.ai/ide/models",
          "label": "国际版模型说明"
        }
      ],
      "modelMode": "内置模型 / 自定义接入"
    },
    "workbuddy": {
      "id": "workbuddy",
      "sourceId": "reczz28M3WEAVpux",
      "name": "WorkBuddy",
      "intro": "用自然语言安排多步骤任务，自动处理本地文件并交付文档、表格、PPT 等成果。",
      "category": "办公工具",
      "vendor": "腾讯",
      "forms": "桌面应用 · 移动 App",
      "platforms": "Windows / macOS / Linux",
      "models": "桌面端内置混元、GLM、MiniMax、Kimi、DeepSeek 等模型；可在设置中添加第三方 API、自定义兼容接口、腾讯云 Token Plan、腾讯云/智谱/Kimi Coding Plan 或本地 Ollama。自定义模型费用向第三方支付，API Key 仅保存在本地。",
      "signup": "客户端点击登录后在官网弹窗完成微信扫码，也支持手机号、邮箱或 SSO；网页显示成功后返回客户端。",
      "free": "免费体验版每月提供 500 基础积分；付费会员不再额外领取体验版积分。",
      "home": "https://www.workbuddy.cn/",
      "guide": "https://www.workbuddy.cn/docs/workbuddy/Overview",
      "guideUrls": [
        "https://www.workbuddy.cn/docs/workbuddy/Overview",
        "https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "W",
      "ownGroup": "workbuddy",
      "guideLinks": [
        {
          "url": "https://www.workbuddy.cn/docs/workbuddy/Overview",
          "label": "官方简介"
        },
        {
          "url": "https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Model",
          "label": "官方简介：https://www.workbuddy.cn/docs/workbuddy/Overview；模型配置"
        }
      ],
      "modelMode": "按客户端选择接入"
    },
    "minimax-code": {
      "id": "minimax-code",
      "sourceId": "reczz28M3WEAWCg0",
      "name": "MiniMax Code",
      "intro": "MiniMax 编程智能体，可理解项目、修改代码、运行命令和测试。",
      "category": "编程工具",
      "vendor": "MiniMax",
      "forms": "CLI · 桌面应用",
      "platforms": "Windows / macOS / Linux",
      "models": "支持 MiniMax 账号登录，也可自带兼容 OpenAI Completions、OpenAI Responses 或 Anthropic Messages 的 API。第三方与自托管服务可配置 custom_provider。",
      "signup": "CLI 运行 mcode login，在浏览器登录 MiniMax 账号；Global 账号选择 region global。自带 API Key 时无需 MiniMax 登录。",
      "free": "CLI 源码采用 MIT 许可；调用模型需要有额度的账号或兼容 API，模型调用可能收费。",
      "home": "https://agent.minimax.io/tools",
      "guide": "https://agent.minimax.io/docs/cli/quick-start",
      "guideUrls": [
        "https://agent.minimax.io/docs/cli/quick-start"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "M",
      "guideLinks": [
        {
          "url": "https://agent.minimax.io/docs/cli/quick-start",
          "label": "CLI 快速开始"
        }
      ],
      "modelMode": "账号 / 兼容 API"
    },
    "mimo-code": {
      "id": "mimo-code",
      "sourceId": "reczz28M3WEAYHPw",
      "name": "MiMo Code",
      "intro": "小米终端 AI 编程助手，可读写代码、运行命令、管理 Git，并持续保存项目记忆。",
      "category": "编程工具",
      "vendor": "小米",
      "forms": "CLI",
      "platforms": "Windows / macOS / Linux",
      "models": "CLI 支持供应商 API Key、部分供应商 OAuth、自定义 OpenAI 兼容端点及本地模型；MiMo 平台提供 MiMo V2.5 Pro，可用按量 API 或 Token Plan。",
      "signup": "官网提供免登录体验；MiMo 付费服务可跳转开放平台授权或使用授权码，要求余额或有效 Token Plan。",
      "free": "提供免登录模型体验，源码采用 MIT 许可。付费服务通过开放平台授权，需有余额或有效 Token Plan。",
      "home": "https://mimo.xiaomi.com/coder?lang=en",
      "guide": "https://mimo.xiaomi.com/mimocode/start",
      "guideUrls": [
        "https://mimo.xiaomi.com/mimocode/start",
        "https://mimo.xiaomi.com/mimocode/models-provider",
        "https://mimo.mi.com/docs/zh-CN/tokenplan/integration/mimo-code"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "Mi",
      "guideLinks": [
        {
          "url": "https://mimo.xiaomi.com/mimocode/start",
          "label": "使用指南"
        },
        {
          "url": "https://mimo.xiaomi.com/mimocode/models-provider",
          "label": "模型接入"
        },
        {
          "url": "https://mimo.mi.com/docs/zh-CN/tokenplan/integration/mimo-code",
          "label": "计费接入"
        }
      ],
      "modelMode": "体验模型 / 自定义服务"
    },
    "zcode": {
      "id": "zcode",
      "sourceId": "reczz28M3WEAV4DP",
      "name": "ZCode",
      "intro": "智谱编程智能体工作台，可通过多个智能体完成复杂开发任务。",
      "category": "编程工具",
      "vendor": "智谱",
      "forms": "桌面应用",
      "platforms": "Windows / macOS / Linux",
      "models": "连接 BigModel 或 Z.ai，使用对应账号的 GLM 模型及计划。也支持通过 API Key 配置兼容 Anthropic、OpenAI 接口的服务。",
      "signup": "首次启动选择 Continue with BigModel、Continue with Z.ai 完成账号授权，或选择 Use API Key 配置模型。",
      "free": "连接 BigModel 的新用户前 5 天可领取每日试用额度：GLM-5.3 为 300 万 tokens，GLM-5.3-Flash 为 500 万 tokens。具体以设置页实时额度为准。",
      "home": "https://zcode.z.ai/en/install",
      "guide": "https://zcode.z.ai/en/docs/install",
      "guideUrls": [
        "https://zcode.z.ai/en/docs/install",
        "https://zcode.z.ai/en/docs/configuration"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "Z",
      "guideLinks": [
        {
          "url": "https://zcode.z.ai/en/docs/install",
          "label": "安装"
        },
        {
          "url": "https://zcode.z.ai/en/docs/configuration",
          "label": "模型与计划"
        }
      ],
      "modelMode": "账号 / 兼容 API"
    },
    "qoder": {
      "id": "qoder",
      "sourceId": "reczz28M3WEAXAzf",
      "name": "Qoder",
      "intro": "AI 编程平台，提供桌面工作台、IDE、CLI 和 JetBrains 插件，可理解代码库并执行开发任务。",
      "category": "编程工具",
      "vendor": "BRIGHT ZENITH PRIVATE LIMITED（Qoder）；通义云启（杭州）信息技术有限公司（Qoder CN）",
      "forms": "桌面应用 · 独立 IDE · CLI · JetBrains 插件 · 移动 App · 网页",
      "platforms": "Windows / macOS / Linux / Android / iOS / 浏览器",
      "models": "国际版桌面端支持自动路由、模型档位与指定内置模型，也可在模型设置中使用自带 API Key；CLI 提供自定义模型配置。\n中国版使用独立账号与套餐入口，模型及各客户端功能以中国版官方说明为准。",
      "signup": "国际版支持邮箱、Google 或 GitHub 登录；中国版个人账号使用绑定手机号的阿里云主账号。",
      "free": "国际版有 Free 档，新用户首次登录最新版客户端可试用 Pro 14 天并获 300 Credits，虚拟机不适用，每人限一个试用账号。中国版免费权益以中国版方案为准。",
      "home": "https://qoder.com/en",
      "guide": "https://docs.qoder.com/product-series/quick-start",
      "guideUrls": [
        "https://docs.qoder.com/product-series/quick-start",
        "https://docs.qoder.com/cli/custom-models",
        "https://docs.qoder.cn/product-overview/account-and-subscription"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "Q",
      "links": [
        {
          "label": "国际版官网",
          "url": "https://qoder.com/en"
        },
        {
          "label": "中国版官网",
          "url": "https://qoder.cn/"
        },
        {
          "label": "国际版使用指南",
          "url": "https://docs.qoder.com/product-series/quick-start"
        },
        {
          "label": "中国版账号与订阅",
          "url": "https://docs.qoder.cn/product-overview/account-and-subscription"
        }
      ],
      "guideLinks": [
        {
          "label": "国际版官网",
          "url": "https://qoder.com/en"
        },
        {
          "label": "中国版官网",
          "url": "https://qoder.cn/"
        },
        {
          "label": "国际版使用指南",
          "url": "https://docs.qoder.com/product-series/quick-start"
        },
        {
          "label": "中国版账号与订阅",
          "url": "https://docs.qoder.cn/product-overview/account-and-subscription"
        }
      ],
      "modelMode": "内置模型 / 自带 Key"
    },
    "libtv": {
      "id": "libtv",
      "sourceId": "reczz28M3WEAY4vg",
      "name": "LibTV",
      "intro": "提供画布和 Agent 的视频创作工具，可生成剧本、图片、视频与音频，并进行智能剪辑。",
      "category": "AIGC 创作",
      "vendor": "北京演语科技有限公司（LiblibAI）",
      "forms": "网页",
      "platforms": "浏览器",
      "models": "网页创作提供 Wan 3.0、Vidu Q4 Preview、Seedance 2.5 等模型入口，在平台内选择模型生成内容。",
      "signup": "使用统一的哩布哩布AI账号登录；可通过手机号或平台认可的第三方账号注册。",
      "free": "免费用户登录每日赠送 20 积分，并提供 3GB 云端存储。",
      "home": "https://www.liblib.tv/",
      "guide": "https://www.liblib.tv/",
      "guideUrls": [
        "https://www.liblib.tv/"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "L",
      "guideLinks": [
        {
          "url": "https://www.liblib.tv/",
          "label": "官网左侧“学院”入口"
        }
      ],
      "modelMode": "内置视频创作模型"
    },
    "xiaoyunque": {
      "id": "xiaoyunque",
      "sourceId": "reczz28M3WEAVEH2",
      "name": "小云雀",
      "intro": "面向视频、图片与短剧创作的内容创作 Agent，提供短剧、营销和通用创作工作流。",
      "category": "AIGC 创作",
      "vendor": "深圳市脸萌科技有限公司（字节跳动旗下）",
      "forms": "网页 · 移动 App",
      "platforms": "浏览器 / iOS / Android",
      "models": "在网页/App内使用平台模型：视频提供 Seedance 2.5、2.0、2.0 fast、2.0 mini，图片提供 Seedream、悠船等模型，音频提供 Seed Audio 系列。",
      "signup": "官网支持手机号验证码登录，或使用抖音账号快捷登录。",
      "free": "登录可领取每日免费积分，支持视频、图片与短剧创作。",
      "home": "https://xyq.jianying.com/",
      "guide": "https://xyq.jianying.com/tutorials",
      "guideUrls": [
        "https://xyq.jianying.com/tutorials"
      ],
      "verifiedAt": "2026-10-11T00:00:00.000+08:00",
      "glyph": "雀",
      "guideLinks": [
        {
          "url": "https://xyq.jianying.com/tutorials",
          "label": "教程中心与产品手册"
        }
      ],
      "modelMode": "内置创作模型"
    }
  },
  "plans": [
    {
      "id": "trae-cn-lite",
      "sourceId": "reczz28M3WH0kkGD",
      "sourceKey": "trae-cn-lite",
      "group": "trae-cn",
      "name": "Lite",
      "currency": "CNY",
      "quota": "2,000 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 49
        }
      ],
      "note": "",
      "models": "国内版：内置Seed、GLM、DeepSeek、Kimi、MiniMax等模型。具体型号及各档权限以国内版模型和套餐页为准。",
      "home": "https://www.trae.cn/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-cn-pro",
      "sourceId": "reczz28M3WH0kx5p",
      "sourceKey": "trae-cn-pro",
      "group": "trae-cn",
      "name": "Pro",
      "currency": "CNY",
      "quota": "4,000 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 99
        }
      ],
      "note": "",
      "models": "国内版：内置Seed、GLM、DeepSeek、Kimi、MiniMax等模型。具体型号及各档权限以国内版模型和套餐页为准。",
      "home": "https://www.trae.cn/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-cn-pro-plus",
      "sourceId": "reczz28M3WH0jZut",
      "sourceKey": "trae-cn-pro-plus",
      "group": "trae-cn",
      "name": "Pro+",
      "currency": "CNY",
      "quota": "12,000 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 239
        }
      ],
      "note": "",
      "models": "国内版：内置Seed、GLM、DeepSeek、Kimi、MiniMax等模型。具体型号及各档权限以国内版模型和套餐页为准。",
      "home": "https://www.trae.cn/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-cn-ultra",
      "sourceId": "reczz28M3WH0mfvi",
      "sourceKey": "trae-cn-ultra",
      "group": "trae-cn",
      "name": "Ultra",
      "currency": "CNY",
      "quota": "40,000 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 699
        }
      ],
      "note": "",
      "models": "国内版：内置Seed、GLM、DeepSeek、Kimi、MiniMax等模型。具体型号及各档权限以国内版模型和套餐页为准。",
      "home": "https://www.trae.cn/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-international-lite",
      "sourceId": "reczz28M8BRUSJ7F",
      "sourceKey": "proposed-trae-international-lite",
      "group": "trae-global",
      "name": "Lite",
      "currency": "USD",
      "quota": "$5 Basic usage",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 4.5
        }
      ],
      "note": "",
      "models": "",
      "home": "https://www.trae.ai/pricing/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-international-pro",
      "sourceId": "reczz28M3WH0n9At",
      "sourceKey": "trae-international-pro",
      "group": "trae-global",
      "name": "Pro",
      "currency": "USD",
      "quota": "$20 Basic usage",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 15
        }
      ],
      "note": "",
      "models": "",
      "home": "https://www.trae.ai/pricing/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-international-pro-plus",
      "sourceId": "reczz28M3WH0k5kw",
      "sourceKey": "trae-international-pro-plus",
      "group": "trae-global",
      "name": "Pro+",
      "currency": "USD",
      "quota": "Pro 的 3.5 倍用量",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 45
        }
      ],
      "note": "",
      "models": "",
      "home": "https://www.trae.ai/pricing/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "trae-international-ultra",
      "sourceId": "reczz28M3WH0k4ut",
      "sourceKey": "trae-international-ultra",
      "group": "trae-global",
      "name": "Ultra",
      "currency": "USD",
      "quota": "Pro 的 20 倍用量",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 150
        }
      ],
      "note": "",
      "models": "",
      "home": "https://www.trae.ai/pricing/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "jimeng-basic",
      "sourceId": "reczz28M8CPo2Wcm",
      "sourceKey": "proposed-jimeng-basic",
      "group": "jimeng",
      "name": "基础会员",
      "currency": "CNY",
      "quota": "725 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 79
        },
        {
          "key": "renewal",
          "label": "连续包月",
          "value": 69
        },
        {
          "key": "year",
          "label": "年付",
          "value": 659
        }
      ],
      "note": "",
      "models": "Seedance 2.0 VIP；图片4.0、图片5.0 Lite、图片4.6；图像2K限时免费，去品牌水印。",
      "home": "https://jimeng.jianying.com/ai-tool/home/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "jimeng-standard",
      "sourceId": "reczz28M8CSsvQ42",
      "sourceKey": "proposed-jimeng-standard",
      "group": "jimeng",
      "name": "标准会员",
      "currency": "CNY",
      "quota": "2,210 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 239
        },
        {
          "key": "renewal",
          "label": "连续包月",
          "value": 199
        },
        {
          "key": "year",
          "label": "年付",
          "value": 1899
        }
      ],
      "note": "",
      "models": "Seedance 2.0 VIP；图片4.0、图片5.0 Lite、图片4.6；图像2K限时免费，去品牌水印。",
      "home": "https://jimeng.jianying.com/ai-tool/home/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "jimeng-advanced-6160",
      "sourceId": "reczz28M8CVvWTlp",
      "sourceKey": "proposed-jimeng-advanced-6160",
      "group": "jimeng",
      "name": "高级会员 · 6,160 积分",
      "currency": "CNY",
      "quota": "6,160 积分 / 月",
      "options": [
        {
          "key": "month",
          "label": "单月购买",
          "value": 649
        }
      ],
      "note": "",
      "models": "Seedance 2.0 VIP；图片4.0、图片5.0 Lite、图片4.6；图像2K限时免费，去品牌水印。图片4.0另有4K限时免费，快速生成通道。",
      "home": "https://jimeng.jianying.com/ai-tool/home/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "jimeng-advanced-12320",
      "sourceId": "reczz28M8CZDMYXH",
      "sourceKey": "proposed-jimeng-advanced-12320",
      "group": "jimeng",
      "name": "高级会员 · 12,320 积分",
      "currency": "CNY",
      "quota": "12,320 积分 / 月",
      "options": [
        {
          "key": "renewal",
          "label": "连续包月",
          "value": 998
        },
        {
          "key": "year",
          "label": "首年",
          "value": 5199
        }
      ],
      "note": "首年价限对应优惠；后续价格以官网为准。",
      "models": "Seedance 2.0 VIP；图片4.0、图片5.0 Lite、图片4.6；图像2K限时免费，去品牌水印。图片4.0另有4K限时免费，快速生成通道；年付专享区出现Seedance 2.5带参考视频和Seedance 2.0 VIP的720P说明。",
      "home": "https://jimeng.jianying.com/ai-tool/home/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "jimeng-super",
      "sourceId": "reczz28M8CcStiRV",
      "sourceKey": "proposed-jimeng-super",
      "group": "jimeng",
      "name": "超级会员",
      "currency": "CNY",
      "quota": "54,600 积分 / 月",
      "options": [
        {
          "key": "renewal",
          "label": "连续包月",
          "value": 4299
        },
        {
          "key": "year",
          "label": "首年",
          "value": 19656
        }
      ],
      "note": "首年价限对应优惠；后续价格以官网为准。",
      "models": "Seedance 2.0 VIP；图片4.0、图片5.0 Lite、图片4.6；图像2K限时免费，去品牌水印。图片4.0另有4K限时免费，快速生成通道；年付专享区出现Seedance 2.5带参考视频和Seedance 2.0 VIP的720P说明。",
      "home": "https://jimeng.jianying.com/ai-tool/home/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "claude-pro",
      "sourceId": "reczz28M3WH0mEWE",
      "group": "claude-code",
      "name": "Claude Pro",
      "currency": "USD",
      "quota": "含 Claude Code",
      "benefit": "Claude 与 Claude Code 共用套餐额度；Pro 的会话额度至少为 Free 的 5 倍。",
      "models": "Claude Opus 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Sonnet 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Haiku 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Fable 5.1 不包含在 Pro 常规额度中，需使用 pay-as-you-go usage credits。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 20
        },
        {
          "key": "year",
          "label": "年付",
          "value": 200
        }
      ],
      "home": "https://claude.com/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "claude-max-5x",
      "sourceId": "reczz28M3WH0k37R",
      "group": "claude-code",
      "name": "Claude Max 5x",
      "currency": "USD",
      "quota": "Pro 的 5 倍会话额度",
      "benefit": "包含 Claude Code，与 Claude 共用额度。",
      "models": "Claude Opus 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Sonnet 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Haiku 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Fable 5 与 Fable 5.1 是 Max 标准权益，共享至多 50% 周额度，会更快消耗常规周额度；用完可用 usage credits 或切换模型。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 100
        }
      ],
      "home": "https://claude.com/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "claude-max-20x",
      "sourceId": "reczz28M3WH0jdUq",
      "group": "claude-code",
      "name": "Claude Max 20x",
      "currency": "USD",
      "quota": "Pro 的 20 倍会话额度",
      "benefit": "包含 Claude Code，与 Claude 共用额度。",
      "models": "Claude Opus 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Sonnet 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Haiku 5.5：付费套餐的聊天与 Claude Code 文档列出该型号；具体上下文随客户端而异。\nClaude Fable 5 与 Fable 5.1 是 Max 标准权益，共享至多 50% 周额度，会更快消耗常规周额度；用完可用 usage credits 或切换模型。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 200
        }
      ],
      "home": "https://claude.com/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "chatgpt-go",
      "sourceId": "reczz28M3WH0n6VK",
      "group": "codex",
      "name": "ChatGPT Go",
      "currency": "USD",
      "quota": "Codex 桌面端有限开放",
      "benefit": "Codex 权益限桌面 App 的 GPT-6 Luna Standard，按开放进度生效。",
      "models": "Codex：GPT-6 Luna Standard，仅桌面 App，按开放进度生效。\nChatGPT Think 使用 GPT-5.6 Luna，Go 不含 GPT-5.6 Sol；不要把 Chat 与 Codex 的型号合并。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 8
        }
      ],
      "home": "https://learn.chatgpt.com/docs/pricing.md",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "chatgpt-plus",
      "sourceId": "reczz28M3WH0l8Wa",
      "group": "codex",
      "name": "ChatGPT Plus",
      "currency": "USD",
      "quota": "网页 / CLI / IDE / iOS",
      "benefit": "本地与云端任务共享额度，具体用量见账号。",
      "models": "Codex 的 GPT-6.1 Sol 对 Plus、Pro 开放但仍受账号、客户端和开放进度影响。\nCodex 官方 Plus 卡列 GPT-6.1 Sol 和 GPT-6 Luna；Pro 卡明确包含 Plus 的权益。\nGPT-6 Sol 和 GPT-6 Luna 在官方能力表中对 Plus、Pro 都标为可用；GPT-6 Astra 在 Plus 估计表中有额度，Pro 列明包含 Plus 权益，具体档位额度仍以账号为准。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 20
        }
      ],
      "home": "https://learn.chatgpt.com/docs/pricing.md",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "chatgpt-pro-100",
      "sourceId": "reczz28M3WH0mhtq",
      "group": "codex",
      "name": "ChatGPT Pro 100",
      "currency": "USD",
      "quota": "更高模型用量",
      "benefit": "包含 Plus 权益，各模型额度以账号为准。",
      "models": "Codex 的 GPT-6.1 Sol 对 Plus、Pro 开放但仍受账号、客户端和开放进度影响。\nCodex 官方 Plus 卡列 GPT-6.1 Sol 和 GPT-6 Luna；Pro 卡明确包含 Plus 的权益。\nGPT-6 Sol 和 GPT-6 Luna 在官方能力表中对 Plus、Pro 都标为可用；GPT-6 Astra 在 Plus 估计表中有额度，Pro 列明包含 Plus 权益，具体档位额度仍以账号为准。\n此档不含 Ultrafast；购买 credits 也不能在发布时解锁。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 100
        }
      ],
      "home": "https://learn.chatgpt.com/docs/pricing.md",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "chatgpt-pro-200",
      "sourceId": "reczz28M3WH0jiVl",
      "group": "codex",
      "name": "ChatGPT Pro 200",
      "currency": "USD",
      "quota": "高于 Pro 100 的用量",
      "benefit": "包含 Plus 权益，各模型额度以账号为准。",
      "models": "Codex 的 GPT-6.1 Sol 对 Plus、Pro 开放但仍受账号、客户端和开放进度影响。\nCodex 官方 Plus 卡列 GPT-6.1 Sol 和 GPT-6 Luna；Pro 卡明确包含 Plus 的权益。\nGPT-6 Sol 和 GPT-6 Luna 在官方能力表中对 Plus、Pro 都标为可用；GPT-6 Astra 在 Plus 估计表中有额度，Pro 列明包含 Plus 权益，具体档位额度仍以账号为准。\n此档不含 Ultrafast；购买 credits 也不能在发布时解锁。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 200
        }
      ],
      "home": "https://learn.chatgpt.com/docs/pricing.md",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "chatgpt-pro-500",
      "sourceId": "reczz28M3WH0m8Bi",
      "group": "codex",
      "name": "ChatGPT Pro 500",
      "currency": "USD",
      "quota": "Pro 系列最高用量",
      "benefit": "包含 GPT-6 Astra 与 GPT-6.1 Sol 的 Ultrafast。",
      "models": "Codex 的 GPT-6.1 Sol 对 Plus、Pro 开放但仍受账号、客户端和开放进度影响。\nCodex 官方 Plus 卡列 GPT-6.1 Sol 和 GPT-6 Luna；Pro 卡明确包含 Plus 的权益。\nGPT-6 Sol 和 GPT-6 Luna 在官方能力表中对 Plus、Pro 都标为可用；GPT-6 Astra 在 Plus 估计表中有额度，Pro 列明包含 Plus 权益，具体档位额度仍以账号为准。\nPro 500 包含 GPT-6 Astra 与 GPT-6.1 Sol 的 Ultrafast。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 500
        }
      ],
      "home": "https://learn.chatgpt.com/docs/pricing.md",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "cursor-pro",
      "sourceId": "reczz28M3WH0mbvU",
      "group": "cursor",
      "name": "Cursor Pro",
      "currency": "USD",
      "quota": "Cursor Models + Other Models",
      "benefit": "包含 Tab 补全、扩展 Agent 使用、Bugbot 与 Cloud Agents；实际用量取决于模型。",
      "models": "三个个人付费档均含 Cursor Models 与 Other Models 两个池；Cursor Models 包括 Grok 4.7、Grok 4.6、Grok 4.5、Composer 2.5。\n第三方池按对应模型 API 价扣除；当前文档列 Claude Fable 5.1、Haiku 5.5、Opus 5.5、Sonnet 5.5、Gemini 3.1 Pro、3.8 Flash、GPT-5.6 Luna／Sol／Terra、Muse Spark 1.3。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 20
        }
      ],
      "home": "https://cursor.com/help/account-and-billing/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "cursor-pro-plus",
      "sourceId": "reczz28M3WH0kmjN",
      "group": "cursor",
      "name": "Cursor Pro+",
      "currency": "USD",
      "quota": "Cursor Models + Other Models",
      "benefit": "包含 Tab 补全、扩展 Agent 使用、Bugbot 与 Cloud Agents；实际用量取决于模型。",
      "models": "三个个人付费档均含 Cursor Models 与 Other Models 两个池；Cursor Models 包括 Grok 4.7、Grok 4.6、Grok 4.5、Composer 2.5。\n第三方池按对应模型 API 价扣除；当前文档列 Claude Fable 5.1、Haiku 5.5、Opus 5.5、Sonnet 5.5、Gemini 3.1 Pro、3.8 Flash、GPT-5.6 Luna／Sol／Terra、Muse Spark 1.3。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 60
        }
      ],
      "home": "https://cursor.com/help/account-and-billing/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "cursor-ultra",
      "sourceId": "reczz28M3WH0mOE7",
      "group": "cursor",
      "name": "Cursor Ultra",
      "currency": "USD",
      "quota": "Cursor Models + Other Models",
      "benefit": "包含 Tab 补全、扩展 Agent 使用、Bugbot 与 Cloud Agents；实际用量取决于模型。",
      "models": "三个个人付费档均含 Cursor Models 与 Other Models 两个池；Cursor Models 包括 Grok 4.7、Grok 4.6、Grok 4.5、Composer 2.5。\n第三方池按对应模型 API 价扣除；当前文档列 Claude Fable 5.1、Haiku 5.5、Opus 5.5、Sonnet 5.5、Gemini 3.1 Pro、3.8 Flash、GPT-5.6 Luna／Sol／Terra、Muse Spark 1.3。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 200
        }
      ],
      "home": "https://cursor.com/help/account-and-billing/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "github-copilot-pro",
      "sourceId": "reczz28M3WH0lpXy",
      "group": "github-copilot",
      "name": "Copilot Pro",
      "currency": "USD",
      "quota": "1,500 AI credits / 月",
      "benefit": "额度含 base 与 flex；flex 会随模型与效率调整。支持 IDE、CLI、网页与移动端。",
      "models": "Claude Sonnet 5.5：包含于本档可用模型。\nClaude Sonnet 5：包含于本档可用模型。\nClaude Haiku 4.5：包含于本档可用模型。\nClaude Haiku 5.5：包含于本档可用模型。\nGemini 3.8 Flash：包含于本档可用模型。\nGemini 3.7 Flash：包含于本档可用模型。\nGPT-6 Luna：包含于本档可用模型。\nGPT-5.6 Luna：包含于本档可用模型。\nGPT-5.6 Terra：包含于本档可用模型。\nGPT-5.4：包含于本档可用模型。\nGPT-5.4 mini：包含于本档可用模型。\nGPT-5.3-Codex：包含于本档可用模型。\nGPT-5 mini：包含于本档可用模型。\nGrok 4.7：包含于本档可用模型。\nGrok 4.6：包含于本档可用模型。\nGrok 4.5：包含于本档可用模型。\nKimi K3：包含于本档可用模型。\nMAI-Code-1.1-Flash：包含于本档可用模型。\nClaude Opus 5.5：本档不包含，Pro+ 与 Max 包含。\nClaude Opus 5：本档不包含，Pro+ 与 Max 包含。\nClaude Opus 4.8：本档不包含，Pro+ 与 Max 包含。\nClaude Fable 5.1：本档不包含，Pro+ 与 Max 包含。\nClaude Fable 5：本档不包含，Pro+ 与 Max 包含。\nGPT-6 Astra：本档不包含，Pro+ 与 Max 包含。\nGPT-6 Sol：本档不包含，Pro+ 与 Max 包含。\nGPT-6.1 Sol：本档不包含，Pro+ 与 Max 包含。\nGPT-5.6 Sol：本档不包含，Pro+ 与 Max 包含。\nGPT-5.5：本档不包含，Pro+ 与 Max 包含。\nClaude Sonnet 4.6 已于 September 1, 2026 退役，仅仍对个人年付 Copilot Pro／Pro+ 保留；月付档不可用，因此旧清单不能直接用于本次月付档。\n模型权限还受客户端支持情况影响；模型与套餐表中的名称不代表另有同名 Pro 推理变体权限。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 10
        }
      ],
      "home": "https://docs.github.com/api/article/body?pathname=/en/copilot/get-started/plans",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "github-copilot-pro-plus",
      "sourceId": "reczz28M3WH0jR7y",
      "group": "github-copilot",
      "name": "Copilot Pro+",
      "currency": "USD",
      "quota": "7,000 AI credits / 月",
      "benefit": "额度含 base 与 flex；flex 会随模型与效率调整。支持 IDE、CLI、网页与移动端。",
      "models": "Claude Sonnet 5.5：包含于本档可用模型。\nClaude Sonnet 5：包含于本档可用模型。\nClaude Haiku 4.5：包含于本档可用模型。\nClaude Haiku 5.5：包含于本档可用模型。\nGemini 3.8 Flash：包含于本档可用模型。\nGemini 3.7 Flash：包含于本档可用模型。\nGPT-6 Luna：包含于本档可用模型。\nGPT-5.6 Luna：包含于本档可用模型。\nGPT-5.6 Terra：包含于本档可用模型。\nGPT-5.4：包含于本档可用模型。\nGPT-5.4 mini：包含于本档可用模型。\nGPT-5.3-Codex：包含于本档可用模型。\nGPT-5 mini：包含于本档可用模型。\nGrok 4.7：包含于本档可用模型。\nGrok 4.6：包含于本档可用模型。\nGrok 4.5：包含于本档可用模型。\nKimi K3：包含于本档可用模型。\nMAI-Code-1.1-Flash：包含于本档可用模型。\nClaude Opus 5.5：包含于本档可用模型。\nClaude Opus 5：包含于本档可用模型。\nClaude Opus 4.8：包含于本档可用模型。\nClaude Fable 5.1：包含于本档可用模型。\nClaude Fable 5：包含于本档可用模型。\nGPT-6 Astra：包含于本档可用模型。\nGPT-6 Sol：包含于本档可用模型。\nGPT-6.1 Sol：包含于本档可用模型。\nGPT-5.6 Sol：包含于本档可用模型。\nGPT-5.5：包含于本档可用模型。\nClaude Sonnet 4.6 已于 September 1, 2026 退役，仅仍对个人年付 Copilot Pro／Pro+ 保留；月付档不可用，因此旧清单不能直接用于本次月付档。\n模型权限还受客户端支持情况影响；模型与套餐表中的名称不代表另有同名 Pro 推理变体权限。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 39
        }
      ],
      "home": "https://docs.github.com/api/article/body?pathname=/en/copilot/get-started/plans",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "github-copilot-max",
      "sourceId": "reczz28M3WH0l3sP",
      "group": "github-copilot",
      "name": "Copilot Max",
      "currency": "USD",
      "quota": "20,000 AI credits / 月",
      "benefit": "额度含 base 与 flex；flex 会随模型与效率调整。支持 IDE、CLI、网页与移动端。",
      "models": "Claude Sonnet 5.5：包含于本档可用模型。\nClaude Sonnet 5：包含于本档可用模型。\nClaude Haiku 4.5：包含于本档可用模型。\nClaude Haiku 5.5：包含于本档可用模型。\nGemini 3.8 Flash：包含于本档可用模型。\nGemini 3.7 Flash：包含于本档可用模型。\nGPT-6 Luna：包含于本档可用模型。\nGPT-5.6 Luna：包含于本档可用模型。\nGPT-5.6 Terra：包含于本档可用模型。\nGPT-5.4：包含于本档可用模型。\nGPT-5.4 mini：包含于本档可用模型。\nGPT-5.3-Codex：包含于本档可用模型。\nGPT-5 mini：包含于本档可用模型。\nGrok 4.7：包含于本档可用模型。\nGrok 4.6：包含于本档可用模型。\nGrok 4.5：包含于本档可用模型。\nKimi K3：包含于本档可用模型。\nMAI-Code-1.1-Flash：包含于本档可用模型。\nClaude Opus 5.5：包含于本档可用模型。\nClaude Opus 5：包含于本档可用模型。\nClaude Opus 4.8：包含于本档可用模型。\nClaude Fable 5.1：包含于本档可用模型。\nClaude Fable 5：包含于本档可用模型。\nGPT-6 Astra：包含于本档可用模型。\nGPT-6 Sol：包含于本档可用模型。\nGPT-6.1 Sol：包含于本档可用模型。\nGPT-5.6 Sol：包含于本档可用模型。\nGPT-5.5：包含于本档可用模型。\nClaude Sonnet 4.6 已于 September 1, 2026 退役，仅仍对个人年付 Copilot Pro／Pro+ 保留；月付档不可用，因此旧清单不能直接用于本次月付档。\n模型权限还受客户端支持情况影响；模型与套餐表中的名称不代表另有同名 Pro 推理变体权限。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 100
        }
      ],
      "home": "https://docs.github.com/api/article/body?pathname=/en/copilot/get-started/plans",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "workbuddy-standard",
      "sourceId": "reczz28M3WH0m7bk",
      "group": "workbuddy",
      "name": "标准版",
      "currency": "CNY",
      "quota": "2,000 基础 + 2,000 加赠积分 / 月",
      "benefit": "当前包含限时加赠积分；与 CodeBuddy 同账号共享积分。",
      "models": "全内置模型可选。当前核对型号：Hy4 preview、Hy3、GLM-5.3、GLM-5.3-Flash、GLM-5.2、GLM-5.1、GLM-5v-Turbo、MiniMax-M3、MiniMax-m2.7、Kimi-K3、Kimi-K2.7-Code、Kimi-K2.6、Deepseek-V4-Flash、Deepseek-V4-Pro。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 99
        },
        {
          "key": "year",
          "label": "年付",
          "value": 672
        }
      ],
      "home": "https://www.workbuddy.cn/docs/workbuddy/Overview",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "workbuddy-advanced",
      "sourceId": "reczz28M3WH0ltOm",
      "group": "workbuddy",
      "name": "高级版",
      "currency": "CNY",
      "quota": "4,000 基础 + 5,000 加赠积分 / 月",
      "benefit": "当前包含限时加赠积分；与 CodeBuddy 同账号共享积分。",
      "models": "全内置模型可选。当前核对型号：Hy4 preview、Hy3、GLM-5.3、GLM-5.3-Flash、GLM-5.2、GLM-5.1、GLM-5v-Turbo、MiniMax-M3、MiniMax-m2.7、Kimi-K3、Kimi-K2.7-Code、Kimi-K2.6、Deepseek-V4-Flash、Deepseek-V4-Pro。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 199
        },
        {
          "key": "year",
          "label": "年付",
          "value": 1344
        }
      ],
      "home": "https://www.workbuddy.cn/docs/workbuddy/Overview",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "workbuddy-flagship",
      "sourceId": "reczz28M3WH0joz9",
      "group": "workbuddy",
      "name": "旗舰版",
      "currency": "CNY",
      "quota": "20,000 基础 + 30,000 加赠积分 / 月",
      "benefit": "当前包含限时加赠积分；与 CodeBuddy 同账号共享积分。",
      "models": "全内置模型可选。当前核对型号：Hy4 preview、Hy3、GLM-5.3、GLM-5.3-Flash、GLM-5.2、GLM-5.1、GLM-5v-Turbo、MiniMax-M3、MiniMax-m2.7、Kimi-K3、Kimi-K2.7-Code、Kimi-K2.6、Deepseek-V4-Flash、Deepseek-V4-Pro。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 999
        },
        {
          "key": "year",
          "label": "年付",
          "value": 6720
        }
      ],
      "home": "https://www.workbuddy.cn/docs/workbuddy/Overview",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "doubao-standard",
      "sourceId": "reczz28M3WH0malz",
      "group": "doubao-work",
      "name": "标准",
      "currency": "CNY",
      "quota": "2,100 额度 / 7 天",
      "benefit": "当前额度含 50% 加赠；工作任务 2.1 Pro、Seedream 5.0 Pro、Seedance 2.5。",
      "models": "工作任务升级到2.1 Pro；图片生成升级到Seedream 5.0 Pro；视频生成升级到Seedance 2.5。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 80
        },
        {
          "key": "year",
          "label": "年付",
          "value": 828
        }
      ],
      "home": "https://www.doubao.com/work/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "doubao-plus",
      "sourceId": "reczz28M3WH0mPZv",
      "group": "doubao-work",
      "name": "加强",
      "currency": "CNY",
      "quota": "5,600 额度 / 7 天",
      "benefit": "当前额度含 50% 加赠；工作任务 2.1 Pro、Seedream 5.0 Pro、Seedance 2.5。",
      "models": "工作任务升级到2.1 Pro；图片生成升级到Seedream 5.0 Pro；视频生成升级到Seedance 2.5。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 240
        },
        {
          "key": "year",
          "label": "年付",
          "value": 2488
        }
      ],
      "home": "https://www.doubao.com/work/pricing",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "opencode-go",
      "sourceId": "reczz28M3WH0mf2n",
      "group": "opencode",
      "name": "OpenCode Go",
      "currency": "USD",
      "quota": "按模型分别提供用量",
      "benefit": "连接多家模型；各模型的额度分别计算，Go Plus 不使用统一提升倍数。",
      "models": "当前模型：\n  * Grok 4.7\n  * Grok 4.6\n  * GLM-5.3-Flash\n  * GLM-5.3\n  * GLM-5.2\n  * GPT 6 Luna\n  * GPT 5.6 Luna\n  * Claude Haiku 5.5\n  * Kimi K3\n  * Kimi K2.7 Code\n  * Kimi K2.6\n  * LongCat-2.0\n  * LongCat 2.5 Preview Free (limited time)\n  * Step 5 Preview Free (limited time)\n  * MiMo-V2.6-Flash\n  * MiMo-V2.6-Pro\n  * MiMo-V2.5\n  * MiMo-V2.5-Pro\n  * MiniMax M3\n  * MiniMax M2.7\n  * Muse Spark 1.3 Contributor (limited regions )\n  * Muse Spark 1.2 Contributor (limited regions )\n  * Qwen3.8 Max\n  * Qwen3.8 Flash\n  * Qwen3.7 Plus\n  * DeepSeek V4.1 Flash\n  * DeepSeek V4 Pro\n  * DeepSeek V4 Flash\n  * DeepSeek V4 Flash Vision Exp\n  * Hy4 preview\n  * Hy3\n  * Space Bunny",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 10
        }
      ],
      "home": "https://opencode.ai/docs/go",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "opencode-go-plus",
      "sourceId": "reczz28M3WH0llym",
      "group": "opencode",
      "name": "OpenCode Go Plus",
      "currency": "USD",
      "quota": "按模型分别提供用量",
      "benefit": "连接多家模型；各模型的额度分别计算，Go Plus 不使用统一提升倍数。",
      "models": "当前模型：\n  * Grok 4.7\n  * Grok 4.6\n  * GLM-5.3-Flash\n  * GLM-5.3\n  * GLM-5.2\n  * GPT 6 Luna\n  * GPT 5.6 Luna\n  * Claude Haiku 5.5\n  * Kimi K3\n  * Kimi K2.7 Code\n  * Kimi K2.6\n  * LongCat-2.0\n  * LongCat 2.5 Preview Free (limited time)\n  * Step 5 Preview Free (limited time)\n  * MiMo-V2.6-Flash\n  * MiMo-V2.6-Pro\n  * MiMo-V2.5\n  * MiMo-V2.5-Pro\n  * MiniMax M3\n  * MiniMax M2.7\n  * Muse Spark 1.3 Contributor (limited regions )\n  * Muse Spark 1.2 Contributor (limited regions )\n  * Qwen3.8 Max\n  * Qwen3.8 Flash\n  * Qwen3.7 Plus\n  * DeepSeek V4.1 Flash\n  * DeepSeek V4 Pro\n  * DeepSeek V4 Flash\n  * DeepSeek V4 Flash Vision Exp\n  * Hy4 preview\n  * Hy3\n  * Space Bunny",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 40
        }
      ],
      "home": "https://opencode.ai/docs/go",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "google-ai-pro",
      "sourceId": "reczz28M3WH0jW80",
      "group": "google-antigravity",
      "name": "Google AI Pro",
      "currency": "USD",
      "quota": "更高 Antigravity 基线额度",
      "benefit": "Antigravity 桌面、CLI 与 IDE 扩展统一认证；具体模型权限随账号与方案变化。",
      "models": "Antigravity Gemini 3.8 Flash：Plus 与 Pro 都可用。\nAntigravity Gemini 3.1 Pro：Plus 与 Pro 都可用。\nAntigravity Claude Sonnet 5.5 (thinking)：Pro 仅非试用订阅可用。\nAntigravity Claude Opus 5.5 (thinking)：Pro 仅非试用订阅可用。\nAntigravity 的 GPT-OSS-120b 以及旧 Claude Sonnet／Opus 4.6 thinking 目前仍列给 Plus 和 Pro，带星号项目将于 2026年11月2日（官方未列具体时刻） 移除。\nGemini App 官方卡写 Gemini 3.1 Pro；Google Search AI Mode 另写 Gemini 3 Pro，不用相近版本替代。",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 19.99
        },
        {
          "key": "year",
          "label": "年付",
          "value": 199.99
        }
      ],
      "home": "https://one.google.com/intl/en_us/about/google-ai-plans/",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "midjourney-basic",
      "sourceId": "reczz28M3WH0kCJe",
      "group": "midjourney",
      "name": "Basic",
      "currency": "USD",
      "quota": "3.3 小时 Fast GPU / 月",
      "benefit": "用于 Midjourney 网站与 Discord；Relax、视频与隐私权益依档位不同。",
      "models": "",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 10
        },
        {
          "key": "year",
          "label": "年付",
          "value": 96
        }
      ],
      "home": "https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "midjourney-standard",
      "sourceId": "reczz28M3WH0mTkb",
      "group": "midjourney",
      "name": "Standard",
      "currency": "USD",
      "quota": "15 小时 Fast GPU / 月",
      "benefit": "用于 Midjourney 网站与 Discord；Relax、视频与隐私权益依档位不同。",
      "models": "",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 30
        },
        {
          "key": "year",
          "label": "年付",
          "value": 288
        }
      ],
      "home": "https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "midjourney-pro",
      "sourceId": "reczz28M3WH0l1GF",
      "group": "midjourney",
      "name": "Pro",
      "currency": "USD",
      "quota": "30 小时 Fast GPU / 月",
      "benefit": "用于 Midjourney 网站与 Discord；Relax、视频与隐私权益依档位不同。",
      "models": "",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 60
        },
        {
          "key": "year",
          "label": "年付",
          "value": 576
        }
      ],
      "home": "https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    },
    {
      "id": "midjourney-mega",
      "sourceId": "reczz28M3WH0ksgv",
      "group": "midjourney",
      "name": "Mega",
      "currency": "USD",
      "quota": "60 小时 Fast GPU / 月",
      "benefit": "用于 Midjourney 网站与 Discord；Relax、视频与隐私权益依档位不同。",
      "models": "",
      "options": [
        {
          "key": "month",
          "label": "月付",
          "value": 120
        },
        {
          "key": "year",
          "label": "年付",
          "value": 1152
        }
      ],
      "home": "https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service",
      "verifiedAt": "2026-10-11T00:00:00.000+08:00"
    }
  ],
  "channels": [
    {
      "name": "GLM Coding Plan",
      "price": 118,
      "currency": "CNY",
      "url": "https://docs.bigmodel.cn/cn/coding-plan/quick-start.md",
      "tools": [
        "claude-code",
        "zcode"
      ],
      "note": "按官方快速入门配置套餐专属接口。"
    },
    {
      "name": "百炼 Coding Plan Pro",
      "price": 200,
      "currency": "CNY",
      "url": "https://help.aliyun.com/zh/model-studio/coding-plan",
      "tools": [
        "claude-code",
        "opencode",
        "cursor",
        "codex",
        "qoder",
        "workbuddy"
      ],
      "note": "仅用于支持的编程工具，套餐凭证与按量 API 凭证分别配置。"
    }
  ],
  "aliases": {
    "antigravity": "google-antigravity",
    "qianwen-office": "qianwen-work"
  }
};
