import { groupProducts } from '@/lib/products'

/**
 * 占位页。正式的工具指南页面由你实现，要求见 docs/任务书.md。
 * 现在这页只做一件事：证明 data/products 的 22 个工具已经能读出来。
 */
export default function GuidesPage() {
  const groups = groupProducts()
  const total = groups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <div className="placeholder">
      <p className="placeholderEyebrow">叁 · {total} 个工具 · 教程整理中</p>
      <h1>工具指南</h1>
      <p>国内能不能用、怎么装、第一个任务怎么跑。</p>

      <p className="placeholderNotice">
        这是占位页。请把它换成真正的工具指南页面（左侧工具目录 + 正文 + 右侧本页目录），
        要求见 <code>docs/任务书.md</code>。数据链路已经通了：从 <code>data/products/</code>
        读到 {total} 个工具、{groups.length} 个分类。
      </p>

      <div className="placeholderColumns">
        {groups.map((group) => (
          <section key={group.category}>
            <h2>
              {group.label}（{group.items.length}）
            </h2>
            <ul>
              {group.items.map((product) => (
                <li key={product.slug}>
                  {product.name}
                  {product.accessCN ? '' : '（官方国内不可用）'}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
