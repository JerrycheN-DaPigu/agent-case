import { isValidElement, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import { nextAnchor, slugifyHeading } from '@/lib/headings'
import styles from './guides.module.css'

function textOf(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children)
  if (Array.isArray(children)) return children.map(textOf).join('')
  if (isValidElement<{ children?: ReactNode }>(children)) return textOf(children.props.children)
  return ''
}

export function Markdown({ source }: { source: string }) {
  const seen = new Map<string, number>()

  const heading = (level: 2 | 3) => {
    const Tag = level === 2 ? 'h2' : 'h3'
    return function Heading({ children }: { children?: ReactNode }) {
      const text = textOf(children).trim()
      const id = nextAnchor(slugifyHeading(text), seen)
      return <Tag id={id}>{children}</Tag>
    }
  }

  const components: Components = {
    h2: heading(2),
    h3: heading(3),
    a: ({ href, children }) => (
      <a href={href} target={href && href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    ),
    img: ({ src, alt }) =>
      typeof src === 'string' ? (
        <img src={src} alt={alt ?? ''} loading="lazy" />
      ) : (
        <span className={styles.miniHint}>{alt ?? ''}</span>
      ),
    table: ({ children }) => (
      <div className={styles.tableWrap}>
        <table>{children}</table>
      </div>
    ),
  }

  return (
    <div className={styles.markdown}>
      <ReactMarkdown components={components}>{source}</ReactMarkdown>
    </div>
  )
}
