import { useState, useMemo } from 'react'
import { useData } from 'vike-react/useData'
import type { Data } from './+data'
import { enrichWhisky, allUsers, categories } from '../../../src/utils/data'
import { WhiskyCard } from '../../../src/components/WhiskyCard'
import { Footer } from '../../../src/components/Footer'
import { Crumbs } from '../../../src/components/Crumbs'
import { getUserImage } from '../../../src/utils/images'

export default function Page() {
  const data = useData<Data>()
  const [sortBy, setSortBy] = useState<'score' | 'delta'>('score')

  if (!data) return <div className="container empty">Taster not found.</div>

  const { userId, name, ratedWhiskies, avgGiven } = data
  const enrichedUser = allUsers.find(u => u.id === userId)
  const handle = enrichedUser?.handle ?? ''

  const rated = ratedWhiskies.map(w => {
    const ew = enrichWhisky(w)
    const personalScore = w.ratings[userId]
    const delta = Math.round((personalScore - ew.avgScore) * 10) / 10
    return { ...ew, personalScore, delta }
  })

  const sorted = useMemo(() => {
    const arr = [...rated]
    if (sortBy === 'score') arr.sort((a, b) => b.personalScore - a.personalScore)
    if (sortBy === 'delta') arr.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    return arr
  }, [sortBy, rated.length])

  const catBreakdown = categories.map(c => {
    const rs = rated.filter(r => r.category === c)
    return {
      cat: c,
      count: rs.length,
      avg: rs.length ? rs.reduce((s, r) => s + r.personalScore, 0) / rs.length : 0,
    }
  })
  const favCat = [...catBreakdown].sort((a, b) => b.avg - a.avg)[0]
  const topMark = rated.length ? Math.max(...rated.map(r => r.personalScore)) : 0

  return (
    <>
      <Crumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Tasters', href: '/users' },
        { label: name },
      ]} />

      <div className="container profile-head">
        <div className="avatar-lg" style={{ backgroundImage: `url(${getUserImage(userId)})` }} />
        <div>
          <div className="smallcaps muted">Standing taster</div>
          <h1>{name}</h1>
          <div className="profile-stats">
            <div className="stat"><span className="num">{rated.length}</span><span className="lbl">Tastings logged</span></div>
            <div className="stat"><span className="num">{avgGiven.toFixed(1)}</span><span className="lbl">Avg score given</span></div>
            <div className="stat"><span className="num">{favCat.cat}</span><span className="lbl">Category of choice</span></div>
            <div className="stat"><span className="num">{topMark.toFixed(1)}</span><span className="lbl">Top mark awarded</span></div>
          </div>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 20 }}>
            <span className="num-label">CHART · 01</span>
            <h2 className="title" style={{ fontSize: 'clamp(22px,2.8vw,32px)' }}><em>By category.</em></h2>
            <span className="count">average mark given</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${categories.length},1fr)`, borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)' }}>
            {catBreakdown.map(c => (
              <div key={c.cat} style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '22px 18px' }}>
                <div className="smallcaps muted" style={{ marginBottom: 10 }}>{c.cat}</div>
                <div className="num serif" style={{ fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {c.count ? c.avg.toFixed(1) : '—'}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', color: 'var(--mute)', marginTop: 8 }}>
                  {c.count} tasting{c.count === 1 ? '' : 's'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-head">
            <span className="num-label">LOG · {rated.length} ENTRIES</span>
            <h2 className="title"><em>{name.split(' ')[0]}'s log.</em></h2>
            <div className="pill-group">
              <span className="sort-label">SORT</span>
              <button className={'pill' + (sortBy === 'score' ? ' active' : '')} onClick={() => setSortBy('score')}>By score</button>
              <button className={'pill' + (sortBy === 'delta' ? ' active' : '')} onClick={() => setSortBy('delta')}>By divergence</button>
            </div>
          </div>
          <div className="whisky-grid">
            {sorted.map(w => <WhiskyCard key={w.id} whisky={w} personalScore={w.personalScore} />)}
          </div>
        </div>
      </div>

      <div className="container"><Footer /></div>
    </>
  )
}
