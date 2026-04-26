interface CrumbItem {
  label: string
  href?: string
}

export function Crumbs({ items }: { items: CrumbItem[] }) {
  return (
    <div className="container crumbs">
      {items.map((it, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span className="sep">/</span>}
          {it.href ? <a href={it.href}>{it.label}</a> : <span>{it.label}</span>}
        </span>
      ))}
    </div>
  )
}
