---
title: Cursor 上手教程：装好、登录、跑通第一个任务
tool: cursor
summary: 给第一次用 Cursor 的人：从官网下载到让它改好第一个文件，每一步写清点哪里、输入什么、看到什么。
updatedAt: 2026-10-18
screenshots: []
sourceUrls:
  - https://cursor.com/docs
  - https://cursor.com/downloads
  - https://cursor.com/pricing
---

## 它能做什么

Cursor 是一个基于 VS Code 改出来的代码编辑器，重点在「用自然语言改代码」。你把一个文件夹打开，选中几行，按快捷键描述想改什么，它给你一份 diff，你点接受就改完了。

适合：已经有代码、想快速改一处逻辑；刚学编程、需要有人解释报错；写小工具、脚本、静态页面。

不适合：完全不想装桌面软件的人；公司规定代码不能离开内网的人——它的补全和对话默认走云端。

## 国内怎么用

官方支持地区不包含中国大陆，`data/products/cursor.yaml` 里的 `accessCN` 也是 `false`。注册要邮箱或 Google / GitHub 账号，付费要境外银行卡。

国内能走通的路子有两条，都不算「官方支持」，写在这里是为了让你知道大概会发生什么：

- 用自己的模型 Key：Cursor 支持在设置里填 OpenAI 兼容的 API 地址和 Key，可以接国内厂商的 Coding Plan。具体入口以官方文档为准，不同版本位置会变。
- 用官方账号 + 境外支付方式：需要自己解决账号和支付，本站不提供。

事实层面只到这里。哪一步卡住，按「常见问题」里的排查顺序试。

## 安装

桌面版是唯一形态，没有网页版。

1. 打开 https://cursor.com/downloads ，页面会自动识别你的系统，给对应的安装包。
2. Windows 下载的是 .exe，双击后一路下一步，装完桌面会出现 Cursor 图标。
3. macOS 下载的是 .dmg，打开后把 Cursor 拖进「应用程序」。
4. Linux 提供 AppImage 和 deb 两种，按发行版选。

核对版本：官方下载页在 2026-10 给的是 1.x 系列；装完在 Help → About 能看到具体版本号。你装到的版本可能比这里新，以下步骤以你本机为准。

## 登录与开通

第一次打开会要求登录，三个入口：邮箱验证码、Google、GitHub。

- 免费档（Hobby）能用基础补全和有限次数的对话，超出后提示升级。
- Pro 是订阅制，价格和额度看 https://cursor.com/pricing ，本站不写死。
- 登录成功后右上角头像里可以看到当前套餐和本月用量。

## 跑通第一个任务

目标：让它把一张白纸变成一个能打开的页面。

1. 在桌面新建一个空文件夹，命名 hello-cursor。
2. 打开 Cursor，点左上角 File → Open Folder，选中这个文件夹。左边栏会出现文件树，现在是空的。
3. 在文件树空白处右键 New File，命名 index.html，回车。
4. 把下面这段粘进去，按 Ctrl + S 保存：

        <!doctype html>
        <html lang="zh-CN">
          <body>
            <h1>Hello Cursor</h1>
          </body>
        </html>

5. 选中 <h1> 那一行，按 Ctrl + K，输入「在这行下面加一个按钮，写着『点我』，点击后弹出 alert」，回车。
6. 编辑器里会出现红色和绿色的 diff，点 Accept（或按 Ctrl + Enter）。
7. 在文件树里右键 index.html，选 Reveal in File Explorer，双击用浏览器打开，点一下按钮，应该会弹出提示框。

到这一步，安装、登录、对话、改文件四件事都验证过了。

## 接入自己的模型 / API Key

入口在 Settings → Models（不同版本可能叫 Cursor Settings）。可以填：

- OpenAI 兼容接口：填 Base URL 和 API Key，模型名按厂商文档填。
- Anthropic 兼容接口：同样在 Models 页里配置。
- 官方托管模型：不填 Key 时用 Cursor 自己的额度。

填完点 Verify，能列出模型就说明连通了。注意：接了第三方模型后，补全质量和你选的模型直接相关，官方托管的那几个仍然是配合最好的。

## 怎么付费

免费档先用，确认每天都会打开它再考虑订阅。价格见本站套餐页或官方 Pricing 页；本站不写死数字，因为随时会调。

## 常见问题

**登录页一直转圈，按钮点不动。** 现象是页面卡在加载。原因多半是网络到不了认证服务。怎么办：换网络，或在系统代理里放行 cursor.com 和 api2.cursor.sh。

**按 Ctrl + K 没反应。** 现象是光标在闪但没弹输入框。原因通常是没登录，或者当前文件类型没有语言支持。怎么办：先看右下角状态栏有没有登录状态，再看文件是不是被识别成了纯文本。

**对话里说改了，但文件没变。** 现象是 diff 出现后一闪而过。原因是没点 Accept，或者按了 Esc。怎么办：重新选中代码再按一次快捷键，这次点绿色的 Accept。

**中文注释变乱码。** 现象是打开旧文件，中文全是问号。原因是文件不是 UTF-8。怎么办：右下角编码处点一下，选 Reopen with Encoding → UTF-8，再另存为 UTF-8。

## 延伸阅读

- 官方文档：https://cursor.com/docs
- 官方下载页：https://cursor.com/downloads
- 官方价格页：https://cursor.com/pricing

版本说明：本文写于 2026-10-18，核对的是官方文档与下载页当时的内容；快捷键在 Windows 上是 Ctrl，macOS 上对应 Cmd。界面和你本机不一致时，以你本机为准。
