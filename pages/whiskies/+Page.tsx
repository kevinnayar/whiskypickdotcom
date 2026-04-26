import { useState, useMemo, useEffect } from 'react'
import { allWhiskies, categories } from '../../src/utils/data'
import type { EnrichedWhisky } from '../../src/utils/data'
import { Masthead } from '../../src/components/Masthead'
import { WhiskyCard } from '../../src/components/WhiskyCard'
import { Footer } from '../../src/components/Footer'
import { Crumbs } from '../../src/components/Crumbs'

const PAGE_SIZE = 15

export default function Page() {
  const [type, setType] = useState('All')
  const [sort, setSort] = useState('score')
  const [page, setPage] = useState(1)

  useEffect(() => { setPage(1) }, [type, sort])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('type')
    if (t && (['All', ...categories] as string[]).includes(t)) setType(t)
  }, [])

  const filtered = useMemo(() => {
    const arr: EnrichedWhisky[] = type === 'All'
      ? [...allWhiskies]
      : allWhiskies.filter(w => w.category === type)
    const sorters: Record<string, (a: EnrichedWhisky, b: EnrichedWhisky) => number> = {
      score: (a, b) => b.avgScore - a.avgScore,
      age:   (a, b) => (b.age || 0) - (a.age || 0),
      name:  (a, b) => (a.brand + a.name).localeCompare(b.brand + b.name),
      price: (a, b) => b.msrp - a.msrp,
    }
    return arr.sort(sorters[sort])
  }, [type, sort])

  const handleTypeChange = (t: string) => {
    setType(t)
    const url = new URL(window.location.href)
    if (t === 'All') url.searchParams.delete('type')
    else url.searchParams.set('type', t)
    window.history.replaceState(null, '', url.toString())
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <>
      <Crumbs items={[{ label: 'Home', href: '/' }, { label: 'Directory' }]} />
      <Masthead
        eyebrow="The full directory"
        title="Every bottle,<br/><em>on record.</em>"
        dek={`${allWhiskies.length} whiskies across ${categories.length} categories, ranked without apology. Filter by type; sort as you like.`}
        right={
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--mute)', textAlign: 'right', lineHeight: 1.8 }}>
            <div>SHOWING · {filtered.length}</div>
            <div>SORTED BY · {sort.toUpperCase()}</div>
          </div>
        }
      />

      <div className="container controls">
        <div className="pill-group">
          {(['All', ...categories] as string[]).map(c => (
            <button key={c} className={'pill' + (type === c ? ' active' : '')} onClick={() => handleTypeChange(c)}>{c}</button>
          ))}
        </div>
        <div className="pill-group" style={{ alignItems: 'center' }}>
          <span className="sort-label">SORT</span>
          {[{ k: 'score', l: 'Score' }, { k: 'age', l: 'Age' }, { k: 'name', l: 'Name' }, { k: 'price', l: 'Price' }].map(s => (
            <button key={s.k} className={'pill' + (sort === s.k ? ' active' : '')} onClick={() => setSort(s.k)}>{s.l}</button>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '32px 0' }}>
        {pageItems.length === 0 ? (
          <div className="empty">Nothing here yet.</div>
        ) : (
          <div className="whisky-grid">
            {pageItems.map((w, i) => <WhiskyCard key={w.id} whisky={w} rank={(page - 1) * PAGE_SIZE + i + 1} />)}
          </div>
        )}
      </div>

      {pageCount > 1 && (
        <div className="container pagination">
          <button className="step" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>‹ Prev</button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map(n => (
            <button key={n} className={n === page ? 'active' : ''} onClick={() => setPage(n)}>{n}</button>
          ))}
          <button className="step" disabled={page === pageCount} onClick={() => setPage(p => Math.min(pageCount, p + 1))}>Next ›</button>
        </div>
      )}

      <div className="container"><Footer /></div>
    </>
  )
}
