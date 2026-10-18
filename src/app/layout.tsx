import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '工具指南 · 起源AI',
    template: '%s · 工具指南 · 起源AI',
  },
  description:
    '面向国内 AI 新手的工具上手教程：每个工具怎么装、怎么登录、怎么跑通第一个任务，以及国内能不能用。',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="siteHeader">
          <Link href="/guides" className="siteBrand">
            <span className="siteBrandMark">起源</span>AI 工具指南
          </Link>
          <nav className="siteNav" aria-label="站点导航">
            <Link href="/guides">全部工具</Link>
            <Link href="/guides#how-to-read">怎么看这份指南</Link>
          </nav>
        </header>
        <main className="siteMain">{children}</main>
      </body>
    </html>
  )
}
