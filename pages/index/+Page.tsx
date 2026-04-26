import { useMemo } from 'react'
import { allWhiskies, categories } from '../../src/utils/data'
import type { EnrichedWhisky } from '../../src/utils/data'
import { Masthead } from '../../src/components/Masthead'
import { WhiskyCard } from '../../src/components/WhiskyCard'
import { Footer } from '../../src/components/Footer'
import { Icon } from '../../src/components/Icon'
import { getWhiskyImage } from '../../src/utils/images'

function CategorySection({ cat, idx }: { cat: string; idx: number }) {
  const top: EnrichedWhisky[] = useMemo(() => (
    allWhiskies.filter(w => w.category === cat).sort((a, b) => b.avgScore - a.avgScore).slice(0, 5)
  ), [cat])
  const totalInCat = allWhiskies.filter(w => w.category === cat).length
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="num-label">№ {String(idx + 1).padStart(2, '0')} / {String(categories.length).padStart(2, '0')}</span>
          <h2 className="title"><em>{cat}</em></h2>
          <span className="count">{totalInCat} entries · ranked by score</span>
        </div>
        <div className="whisky-grid">
          {top.map((w, i) => <WhiskyCard key={w.id} whisky={w} rank={i + 1} />)}
        </div>
        <div className="see-all-row">
          <a className="btn ghost" href={`/whiskies?type=${cat}`}>
            See all {cat.toLowerCase()} <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  const editorsPick = useMemo(() => [...allWhiskies].sort((a, b) => b.avgScore - a.avgScore)[0], [])
  const [epWhole, epDec] = editorsPick.avgScore.toFixed(1).split('.')

  return (
    <>
      <Masthead
        eyebrow="Vol. XII  ·  Spring MMXXVI  ·  Est. 2014"
        title="The <em>Whisky</em><br/>Pick Journal."
        dek="A standing record of notable whiskies and the tasters who keep score. Updated weekly, judged honestly, ranked without apology."
        right={
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--mute)', textAlign: 'right', lineHeight: 1.8 }}>
            <div>{allWhiskies.length} BOTTLES ON RECORD</div>
            <div>LAST UPDATED · 25.APR.26</div>
          </div>
        }
      />

      <div className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 40, alignItems: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', border: '1px solid var(--rule)', backgroundColor: 'var(--paper-2)', backgroundImage: `url(${getWhiskyImage(editorsPick.id)})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
          <div>
            <div className="smallcaps muted" style={{ marginBottom: 8 }}>Editor's Selection · this month</div>
            <div className="serif" style={{ fontSize: 38, lineHeight: 1, letterSpacing: '-0.02em' }}>
              {editorsPick.brand} — <em>{editorsPick.name}</em>
            </div>
            <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--mute)' }}>
              {editorsPick.origin.toUpperCase()} · {editorsPick.age ? editorsPick.age + ' YR' : 'NAS'} · ${editorsPick.msrp}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="num serif" style={{ fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em' }}>
              {epWhole}<span style={{ fontSize: 32, color: 'var(--mute)' }}>.{epDec}</span>
            </div>
            <a className="btn" href={`/whiskies/${editorsPick.id}`} style={{ marginTop: 10, display: 'inline-flex' }}>
              Read notes <Icon name="arrow" size={12} />
            </a>
          </div>
        </div>
      </div>

      {categories.map((c, i) => <CategorySection key={c} cat={c} idx={i} />)}

      <div className="container"><Footer /></div>
    </>
  )
}
