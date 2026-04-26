import type { EnrichedWhisky } from '../utils/data'
import { getWhiskyImage } from '../utils/images'

interface WhiskyCardProps {
  whisky: EnrichedWhisky
  rank?: number
  personalScore?: number
}

export function WhiskyCard({ whisky, rank, personalScore }: WhiskyCardProps) {
  const score = personalScore != null ? personalScore : whisky.avgScore
  const [whole, dec] = score.toFixed(1).split('.')
  return (
    <a className="wcard" href={`/whiskies/${whisky.id}`}>
      {rank != null && <span className="rank">№ {String(rank).padStart(2, '0')}</span>}
      <div className="bottle" style={{ backgroundImage: `url(${getWhiskyImage(whisky.id)})` }} />
      <div className="score-row">
        <span className="score num">{whole}<span className="dec">.{dec}</span></span>
        <span className="raters">{personalScore != null ? 'personal' : `${whisky.raterCount} raters`}</span>
      </div>
      <hr className="rule-thin" />
      <div className="brand">{whisky.brand}</div>
      <div className="name">{whisky.name}</div>
      <div className="meta">
        <span>{whisky.category}</span>
        <span>{whisky.age ? whisky.age + ' yr' : 'NAS'}</span>
        <span>${whisky.msrp}</span>
      </div>
    </a>
  )
}
