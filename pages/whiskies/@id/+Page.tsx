import { useData } from 'vike-react/useData'
import { RatingsChart } from '../../../src/components/whisky/RatingsChart'
import { StarRating } from '../../../src/components/whisky/StarRating'
import { getWhiskyImage } from '../../../src/utils/images'
import type { Data } from './+data'

export default function WhiskyDetailPage() {
  const whisky = useData<Data>()

  if (!whisky) {
    return <p className="text-muted-foreground">Whisky not found.</p>
  }

  const ratingCount = Object.keys(whisky.ratings).length

  return (
    <div>
      <a href="/whiskies" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
        ← All Whiskies
      </a>

      {/* Top row: card + ratings */}
      <div className="flex flex-col sm:flex-row gap-6 items-stretch">
        {/* Card */}
        <div className="w-full sm:w-64 flex-shrink-0 bg-card border border-border rounded-lg overflow-hidden">
          <div className="aspect-square bg-muted overflow-hidden">
            <img
              src={getWhiskyImage(whisky.id)}
              alt={`${whisky.brand} ${whisky.name}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div className="p-3">
            <p className="font-semibold text-foreground text-xl leading-snug">{whisky.brand}</p>
            <p className="text-muted-foreground text-sm mt-0.5 truncate">{whisky.name}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <StarRating rating={whisky.rating} size={22} className="text-primary" />
              <span className="text-sm font-semibold text-primary">{whisky.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Ratings chart */}
        <div className="flex-1 min-w-0 bg-card border border-border rounded-lg p-5">
          <h2 className="text-base font-semibold text-foreground mb-4">User Ratings</h2>
          <RatingsChart ratings={whisky.ratings} avgRating={whisky.rating} />
        </div>
      </div>

      {/* Bottom row: metadata */}
      <div className="mt-4 bg-card border border-border rounded-lg p-5 flex flex-wrap gap-x-10 gap-y-3">
        <Stat label="Type" value={whisky.type} />
        <Stat label="Origin" value={whisky.origin} />
        <Stat label="Age" value={whisky.age === 0 ? 'NAS' : `${whisky.age} years`} />
        <Stat label="MSRP" value={`$${whisky.price}`} />
        <Stat label="Ratings" value={`${ratingCount} users`} />
        {whisky.url && (
          <div className="ml-auto self-end">
            <a
              href={whisky.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Producer website →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground uppercase tracking-wide">{label}</dt>
      <dd className="font-semibold text-foreground mt-0.5">{value}</dd>
    </div>
  )
}
