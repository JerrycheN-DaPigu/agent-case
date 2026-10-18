---
title: OpenCode 命令行上手：装好、接上国内模型、跑通第一个任务
tool: opencode
summary: 开源的终端 AI 编程工具，从安装到接自己的 API Key，再到让它在一个空目录里写出第一个文件，全程命令可复制。
updatedAt: 2026-10-18
screenshots: []
sourceUrls:
  - https://opencode.ai/docs/
  - https://opencode.ai/docs/providers/
  - https://github.com/sst/opencode
---

## 它能做什么

OpenCode 是一个跑在终端里的 AI 编程工具，开源。你在项目目录里启动它，用自然语言让它读代码、改文件、跑命令；它默认不绑定某一家模型，可以接自己的 API Key。

适合：习惯命令行的人；想用自己的模型额度、不想被订阅绑住的人；在服务器或远程机器上写代码的人。

不适合：完全没用过终端的人——它的所有交互都在命令行里；需要图形化 diff 预览的人。

它的工作方式是「一个会话一个目录」：启动时把当前目录当成工作区，读文件、改文件、跑命令都在这个目录里，不会跑到别处去。这一点比很多聊天式工具更接近真实开发——你不用担心它把另一个项目改了。

另一个差别是它不绑定厂商：今天用 A 家的模型，明天换成 B 家，只改配置，不动代码。对预算敏感的人，这个自由度比模型本身更值钱。

## 国内怎么用

工具本身是开源的，国内可以直接装。`data/products/opencode.yaml` 里 `accessCN` 是 `true`。

它自己不提供模型，要接一个能访问的模型服务：国内厂商的 OpenAI 兼容接口、或本地跑的模型都行。所以「能不能用」取决于你接的那个模型，不取决于 OpenCode。

要注意的是，模型服务能不能访问，决定了它能不能用。国内厂商的兼容接口一般给的是 OpenAI 格式，把 baseURL 指向国内地址即可；本地模型则要自己起一个兼容服务，通常是 Ollama 或 vLLM 这类，再把它当成一个 OpenAI 兼容端点填进来。

## 安装

先确认 Node 版本：

    node -v

需要 20 以上。然后任选一种装法：

- npm：npm install -g opencode-ai
- macOS / Linux 脚本：curl -fsSL https://opencode.ai/install | bash

装完敲 opencode --version，能打印版本号就成功了。Windows 建议在 PowerShell 里用 npm 那条。

如果 npm 全局目录没有写权限，会报 EACCES。Windows 上一般不会，macOS 和 Linux 用系统 Node 时常见。遇到就换用官方脚本安装，或者把 npm 的 prefix 改到用户目录，再装一次。

## 登录与开通

OpenCode 没有账号体系，不需要注册。它要的是模型服务的 Key：

1. 在项目目录里运行 opencode。第一次进入会有一个简短说明，按提示往下走，不用先建配置文件。
2. 输入 /connect（或按提示进 provider 列表），选你的模型厂商。
3. 粘贴 API Key，回车。
4. 用 /models 切换当前模型，列表里能看到刚接的模型就说明配置成功。

Key 会存在本机的配置文件里，不会上传到别处。

配置文件是明文存的，放在用户目录下的配置文件夹里。多人共用的机器上，建议用完执行一次登出，或者干脆用环境变量传 Key，不落盘。

## 跑通第一个任务

目标：让它在空目录里写一个能跑的脚本。

1. 新建目录并进入：

        mkdir demo-opencode
        cd demo-opencode

2. 启动：opencode
3. 在输入框里写：写一个 hello.js，运行时打印当前时间，并说明怎么运行它。回车。
4. 它会请求写文件权限，确认后目录里出现 hello.js。
5. 退出（Ctrl + C 或输入 /exit），运行 node hello.js，看到时间输出。

这一步验证了：模型连通、能读写本地文件、能给出可运行的结果。

如果它没有直接写文件，而是把代码打印在对话里，说明当前模型不支持工具调用。换一个支持 function calling 的模型再试，这是新手最常卡住的地方。

## 接入自己的模型 / API Key

支持 OpenAI 兼容、Anthropic 兼容和一批常见厂商。配置项在项目根目录的 opencode.json 里，也可以用 /connect 交互式写。

国内模型通常填三项：baseURL、apiKey、model。baseURL 用厂商文档给的 OpenAI 兼容地址，model 写厂商给的模型 ID，不要写展示名。

## 怎么付费

OpenCode 本身免费开源，花钱的是你接的模型。按 token 计费的厂商，写长文件时消耗会明显上升；本站不写死单价。

另外，长上下文模型的单价更高，让它读整个仓库之前，先想清楚是不是真的需要。多数情况下，只把出错的文件和相关依赖给它，既省钱也更准。

## 常见问题

**装完敲 opencode 提示找不到命令。** 现象是 command not found。原因多半是 npm 全局 bin 不在 PATH 里。怎么办：npm bin -g 看路径，把它加进 PATH，重开终端。
**连不上模型，报 401。** 现象是第一次对话就失败。原因是 Key 或 baseURL 填错。怎么办：先用 curl 直接请求一次厂商的 /chat/completions，确认 Key 有效，再回来填。
**它一直要求确认写文件。** 现象是每改一个文件弹一次。原因是默认权限偏保守。怎么办：这是预期行为，确认前看一眼 diff；确实要放权，再在配置里调权限。
**中文输出乱码。** 现象是 Windows 终端里显示方块。原因是终端编码不是 UTF-8。怎么办：PowerShell 里执行 chcp 65001，或改用 Windows Terminal。

**安装很慢或卡住。** 现象是 npm 一直转圈。原因是默认源在境外。怎么办：临时换国内镜像，npm config set registry https://registry.npmmirror.com，装完可以换回去。

**改了代码但项目跑不起来。** 现象是它说改好了，运行报错。原因是模型没看到完整依赖或版本。怎么办：把报错原文贴回去，让它先读 package.json 和锁文件再改，别让它凭印象写。

**它要我确认一条看不懂的命令。** 现象是弹出 rm、git reset 这类操作。原因是模型在清理现场。怎么办：不确定就按拒绝，然后让它先用只读命令（ls、cat、git diff）说明理由，再决定要不要放行。

**换目录后它不认识新项目。** 现象是在新目录里启动，它还在说旧文件。原因是从旧会话恢复过来的上下文。怎么办：退出后在目标目录重新启动，或者在会话里执行一次清空上下文，让它重新读目录结构。

## 延伸阅读

- 官方文档：https://opencode.ai/docs/
- 模型接入说明：https://opencode.ai/docs/providers/
- 源码仓库：https://github.com/sst/opencode

版本说明：写于 2026-10-18。命令和配置项随版本变化，执行前以官方文档为准。
