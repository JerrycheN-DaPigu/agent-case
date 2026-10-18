import { CATEGORY_LABELS, type Product } from '@/lib/products'
import styles from './guides.module.css'

export function ProductBar({ product }: { product: Product }) {
  return (
    <section className={styles.productBar} aria-label="工具信息">
      {product.logoUrl ? (
        <img
          className={styles.productLogo}
          src={product.logoUrl}
          alt={product.name + ' 图标'}
          width={40}
          height={40}
        />
      ) : (
        <span className={styles.productLogoFallback} aria-hidden="true">
          {product.name.slice(0, 1)}
        </span>
      )}

      <div className={styles.productInfo}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productTagline}>{product.tagline}</p>
        <p className={styles.productFacts}>
          <span>{CATEGORY_LABELS[product.category]}</span>
          <span className={product.accessCN ? styles.badgeOk : styles.badgeNo}>
            {product.accessCN ? '国内可用' : '官方国内不可用'}
          </span>
          {product.freeTier ? <span>免费档：{product.freeTier}</span> : null}
        </p>
      </div>

      {product.website ? (
        <a
          className={styles.website}
          href={product.website}
          target="_blank"
          rel="noreferrer"
        >
          官网 ↗
        </a>
      ) : null}
    </section>
  )
}
