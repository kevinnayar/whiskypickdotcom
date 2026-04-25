import { getWhiskyImage } from '../../utils/images'
import { StarRating } from './StarRating'
import type { Whisky } from '../../types'

export function WhiskyCard({ whisky, featured = false }: { whisky: Whisky; featured?: boolean }) {
  return (
    <a href={`/whiskies/${whisky.id}`} className="block group h-full">
      <div className="h-full flex flex-col">
        <div className={`bg-muted overflow-hidden ${featured ? 'aspect-[4/3]' : 'aspect-[2/3]'}`}>
          <img
            src={getWhiskyImage(whisky.id)}
            alt={`${whisky.brand} ${whisky.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div className={`border-t border-foreground/20 flex-1 ${featured ? 'p-5' : 'p-3'}`}>
          <p className={`font-serif font-bold text-foreground leading-tight ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
            {whisky.brand}
          </p>
          <p className={`text-muted-foreground truncate ${featured ? 'text-sm mt-1' : 'text-xs mt-0.5'}`}>
            {whisky.name}
          </p>
          <div className={`flex items-center gap-1.5 ${featured ? 'mt-3' : 'mt-2'}`}>
            <StarRating rating={whisky.rating} size={featured ? 20 : 16} className="text-foreground" />
            <span className={`font-semibold text-foreground ${featured ? 'text-sm' : 'text-xs'}`}>
              {whisky.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}
