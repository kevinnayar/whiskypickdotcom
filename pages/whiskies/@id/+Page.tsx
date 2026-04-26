import { useState, useEffect } from 'react'
import { useData } from 'vike-react/useData'
import type { Data } from './+data'
import { enrichWhisky, allWhiskies, allUsers } from '../../../src/utils/data'
import { WhiskyCard } from '../../../src/components/WhiskyCard'
import { Footer } from '../../../src/components/Footer'
import { Crumbs } from '../../../src/components/Crumbs'
import { getWhiskyImage } from '../../../src/utils/images'

export default function Page() {
  const data = useData<Data>()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 120)
    return () => clearTimeout(timer)
  }, [data?.id])

  if (!data) return <div className="container empty">Whisky not found.</div>

  const whisky = enrichWhisky(data)

  const raters = whisky.scores.map(s => {
    const user = allUsers.find(u => u.id === s.userId)
    return {
      userId: s.userId,
      name: user?.name ?? s.userId,
      handle: user?.handle ?? '',
      score: s.score,
      delta: Math.round((s.score - whisky.avgScore) * 10) / 10,
    }
  }).sort((a, b) => b.score - a.score)

  const [whole, dec] = whisky.avgScore.toFixed(1).split('.')
  const minScale = Math.min(...raters.map(r => r.score)) - 2
  const maxScale = Math.max(...raters.map(r => r.score)) + 1
  const scale = (s: number) => ((s - minScale) / (maxScale - minScale)) * 100

  const related = allWhiskies
    .filter(w => w.category === whisky.category && w.id !== whisky.id)
    .sort((a, b) => b.avgScore - a.avgScore)
    .slice(0, 5)

  return (
    <>
      <Crumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Directory', href: '/whiskies' },
        { label: whisky.category, href: `/whiskies?type=${whisky.category}` },
        { label: whisky.brand + ' ' + whisky.name },
      ]} />

      <div className="container">
        <div className="detail">
          <div className="hero-bottle" style={{ backgroundImage: `url(${getWhiskyImage(whisky.id)})` }}>
            <span className="stamp">№ {whisky.id.toUpperCase()}</span>
          </div>

          <div className="detail-meta">
            <div className="smallcaps eyebrow muted">{whisky.category} · {whisky.origin}</div>
            <h1 className="serif">{whisky.name}</h1>
            <div className="brand-line">{whisky.brand}</div>

            <dl>
              <div><dt>Category</dt><dd>{whisky.category}</dd></div>
              <div><dt>Origin</dt><dd>{whisky.origin.split(',')[0]}</dd></div>
              <div><dt>Age</dt><dd>{whisky.age ? whisky.age + ' years' : 'NAS'}</dd></div>
              <div><dt>MSRP</dt><dd>${whisky.msrp}</dd></div>
              <div><dt>Raters</dt><dd>{whisky.raterCount}</dd></div>
              <div><dt>Top mark</dt><dd>{Math.max(...raters.map(r => r.score)).toFixed(1)}</dd></div>
            </dl>

            <div className="agg-score">
              <div className="big num">{whole}<span className="dec">.{dec}</span></div>
              <div className="label">
                <span className="smallcaps">Aggregate score</span>
                <span className="count num">{whisky.raterCount} tasters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container chart">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <span className="num-label">CHART · 01</span>
          <h2 className="title" style={{ fontSize: 'clamp(24px,3vw,36px)' }}><em>Rater variance</em></h2>
          <span className="count">vs. aggregate of {whisky.avgScore.toFixed(1)}</span>
        </div>
        <div className="chart-head">
          <div>Taster</div>
          <div>Score · scaled {minScale.toFixed(0)}–{maxScale.toFixed(0)}</div>
          <div style={{ textAlign: 'right' }}>Mark</div>
        </div>
        {raters.map((r, i) => {
          const barW = animated ? scale(r.score) : 0
          const avgL = scale(whisky.avgScore)
          return (
            <div key={r.userId} className="chart-row">
              <a className="rater-name" href={`/users/${r.userId}`}>
                {r.name}<span className="initials">{r.handle}</span>
              </a>
              <div className="bar-wrap">
                <div className="bar" style={{ width: barW + '%' }} />
                <div className="avg-tick" style={{ left: avgL + '%' }} />
                {i === 0 && <div className="avg-label" style={{ left: avgL + '%' }}>AGG {whisky.avgScore.toFixed(1)}</div>}
              </div>
              <div className="score-num">
                {r.score.toFixed(1)}
                <span className={'delta ' + (r.delta >= 0 ? 'pos' : 'neg')}>
                  {r.delta >= 0 ? '+' : ''}{r.delta.toFixed(1)}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="section">
        <div className="container">
          <div className="section-head">
            <span className="num-label">MORE IN · {whisky.category.toUpperCase()}</span>
            <h2 className="title"><em>Adjacent bottles.</em></h2>
            <a href={`/whiskies?type=${whisky.category}`} className="count">See all →</a>
          </div>
          <div className="whisky-grid">
            {related.map((w, i) => <WhiskyCard key={w.id} whisky={w} rank={i + 1} />)}
          </div>
        </div>
      </div>

      <div className="container"><Footer /></div>
    </>
  )
}
