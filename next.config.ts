import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Next 16 默认只允许 dev server 自己的源访问 /_next 下的资源。
  // 本地用 127.0.0.1 或 localhost 打开都应该正常，不然控制台会报 403。
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  // 关掉开发模式左下角那个浮标，它会盖住页面内容，截图时很碍事。
  devIndicators: false,
}

export default nextConfig
