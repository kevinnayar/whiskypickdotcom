import { getWhiskyImage } from '../../utils/images'
import { StarRating } from './StarRating'
import type { Whisky } from '../../types'

export function WhiskyCard({ whisky }: { whisky: Whisky }) {
  return (
    <a href={`/whiskies/${whisky.id}`} className="block group">
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40">
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
    </a>
  )
}
