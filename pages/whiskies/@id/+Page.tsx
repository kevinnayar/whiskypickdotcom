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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <a href="/whiskies" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
        ← All Whiskies
      </a>

      <div className="flex flex-col sm:flex-row gap-px bg-foreground/15 border border-foreground/20 mb-px">
        {/* Image panel */}
        <div className="w-full sm:w-2/5 flex-shrink-0 bg-background">
          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <img
              src={getWhiskyImage(whisky.id)}
              alt={`${whisky.brand} ${whisky.name}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
          <div className="p-5 border-t border-foreground/20">
            <p className="font-serif font-bold text-foreground text-3xl leading-tight">{whisky.brand}</p>
            <p className="text-muted-foreground text-sm mt-1">{whisky.name}</p>
            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={whisky.rating} size={22} className="text-foreground" />
              <span className="text-base font-semibold text-foreground">{whisky.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Ratings panel */}
        <div className="flex-1 min-w-0 bg-background p-5 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ratings</h2>
          <RatingsChart ratings={whisky.ratings} avgRating={whisky.rating} />
        </div>
      </div>

      {/* Metadata */}
      <div className="border border-foreground/20 border-t-0 bg-background p-5 sm:p-8 flex flex-wrap gap-x-12 gap-y-4">
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
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
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
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="font-serif font-semibold text-foreground text-lg mt-0.5">{value}</dd>
    </div>
  )
}
