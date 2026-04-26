import type { ReactNode } from 'react'

interface MastheadProps {
  eyebrow?: string
  title: string
  dek?: string
  right?: ReactNode
}

export function Masthead({ eyebrow, title, dek, right }: MastheadProps) {
  return (
    <header className="masthead">
      <div className="container">
        {eyebrow && <div className="smallcaps eyebrow">{eyebrow}</div>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        {(dek || right) && (
          <div className="sub">
            {dek && <p className="dek">{dek}</p>}
            {right}
          </div>
        )}
      </div>
    </header>
  )
}
