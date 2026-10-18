import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '工具指南 · 天工开物 Kaiwu AI',
    template: '%s · 工具指南 · 天工开物',
  },
  description:
    '面向国内 AI 新手的工具上手教程：每个工具怎么装、怎么登录、怎么跑通第一个任务，以及国内能不能用。',
}

/** 顶栏里除「工具」以外的板块不在这个案例范围内，只做展示，不可点。 */
const NAV_ITEMS = [
  { label: '共创', href: null },
  { label: '模型', href: null },
  { label: '工具', href: '/guides' },
  { label: '比赛', href: null },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" data-skin="paper">
      <body>
        <header className="siteHeader">
          <Link href="/guides" className="siteBrand">
            <span className="siteSeal" aria-hidden="true">
              <span>天工</span>
              <span>开物</span>
            </span>
            <span className="siteBrandName">天工开物</span>
            <span className="siteBrandEn">KAIWU AI</span>
          </Link>
          <nav className="siteNav" aria-label="站点导航">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="siteNavItem isActive"
                  aria-current="page"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="siteNavItem isDisabled"
                  aria-disabled="true"
                  title="本案例只做工具指南"
                >
                  {item.label}
                </span>
              ),
            )}
          </nav>
          <span className="siteSearch" aria-hidden="true">
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.3" />
              <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
        </header>

        <main className="siteMain">{children}</main>

        <footer className="siteFooter">
          <div className="siteFooterInner">
            <div className="siteFooterBrand" aria-hidden="true">
              Kaiwu
            </div>
            <div className="siteFooterCols">
              <div>
                <h2>板块</h2>
                <p>共创 · 模型 · 工具 · 比赛</p>
              </div>
              <div>
                <h2>关于</h2>
                <p>无广告、无赞助、无返佣</p>
              </div>
              <div>
                <h2>数据来源</h2>
                <p>以官方文档为准，每条事实带来源链接</p>
              </div>
            </div>
          </div>
          <p className="siteFooterNote">
            本站是实习生考察案例：只保留工具指南页所需的页面与数据，没有接入正式内容库。
          </p>
        </footer>
      </body>
    </html>
  )
}
