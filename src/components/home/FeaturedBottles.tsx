import { getWhiskyImage } from '../../utils/images'
import { StarRating } from '../whisky/StarRating'
import type { Whisky } from '../../types'

const EDITORIAL_IMAGES = [
  '/images/editorial/whisky-bottle.jpg',
  '/images/editorial/whisky-pour.jpg',
  '/images/editorial/tasting.jpg',
]

export function FeaturedBottles({ whiskies }: { whiskies: Whisky[] }) {
  return (
    <section className="border-b border-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="border-b border-foreground px-4 py-6 md:px-8 md:py-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Community Ratings
              </span>
              <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                Top Rated <span className="italic">Bottles</span>
              </h2>
            </div>
            <a href="/whiskies" className="hidden font-sans text-sm uppercase tracking-widest hover:opacity-60 transition-opacity md:block">
              View All →
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3">
          {whiskies.map((whisky, index) => (
            <a
              key={whisky.id}
              href={`/whiskies/${whisky.id}`}
              className={`group border-b border-foreground md:border-b-0 block ${
                index < whiskies.length - 1 ? 'md:border-r' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={getWhiskyImage(whisky.id)}
                  alt={`${whisky.brand} ${whisky.name}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.src = EDITORIAL_IMAGES[index % EDITORIAL_IMAGES.length]
                  }}
                />
                <div className="absolute right-4 top-4 border-2 border-foreground bg-background px-3 py-2">
                  <span className="font-serif text-2xl font-bold">{whisky.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{whisky.type}</span>
                  <span className="h-1 w-1 bg-foreground" />
                  <span>{whisky.age === 0 ? 'NAS' : `${whisky.age} yr`}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl">
                  {whisky.brand}
                </h3>
                <p className="mt-1 font-sans text-sm text-muted-foreground truncate">{whisky.name}</p>

                <div className="mt-3 flex items-center gap-2">
                  <StarRating rating={whisky.rating} size={16} className="text-foreground" />
                </div>

                <div className="mt-6 inline-block border-2 border-foreground bg-foreground px-6 py-3 font-sans text-xs uppercase tracking-widest text-background transition-all group-hover:bg-background group-hover:text-foreground">
                  Read Review
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
