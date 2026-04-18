import { whiskies } from '../../src/data/whiskies'
import { WhiskyCard } from '../../src/components/whisky/WhiskyCard'
import { groupByType, sortWhiskies, CATEGORY_ORDER } from '../../src/utils/ratings'
import type { Whisky } from '../../src/types'

const whiskyList = Object.values(whiskies) as Whisky[]
const byType = groupByType(whiskyList)

export default function HomePage() {
  return (
    <div className="space-y-12">
      {CATEGORY_ORDER.map(({ type, label }) => {
        const items = byType[type] ?? []
        const top5 = sortWhiskies(items, 'score').slice(0, 4)
        if (top5.length === 0) return null
        return (
          <section key={type}>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">{label}</h2>
              <a
                href={`/whiskies?type=${encodeURIComponent(type)}`}
                className="text-sm text-primary hover:underline"
              >
                See all
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {top5.map((w) => (
                <WhiskyCard key={w.id} whisky={w} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
