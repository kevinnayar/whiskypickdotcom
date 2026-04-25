import { getWhiskyImage } from '../../utils/images'
import { StarRating } from '../whisky/StarRating'
import type { Whisky } from '../../types'

export function TopThree({ whiskies }: { whiskies: Whisky[] }) {
  const [first, second, third] = whiskies

  return (
    <section className="border-b border-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="border-b border-foreground px-4 py-6 md:px-8 md:py-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Highest Rated
              </span>
              <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                Top <span className="italic">Three</span>
              </h2>
            </div>
            <a href="/whiskies" className="hidden font-sans text-sm uppercase tracking-widest hover:opacity-60 transition-opacity md:block">
              View All →
            </a>
          </div>
        </div>

        {/* Layout: left full-height, right split top/bottom */}
        <div className="grid grid-cols-2">
          {/* 1 — left, full height */}
          <a href={`/whiskies/${first.id}`} className="block border-r border-foreground">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={getWhiskyImage(first.id)}
                alt={`${first.brand} ${first.name}`}
                className="w-full h-full object-cover grayscale object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                <span>{first.type}</span>
                <span className="h-1 w-1 bg-foreground" />
                <span>{first.age === 0 ? 'NAS' : `${first.age} yr`}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl lg:text-4xl">{first.brand}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">{first.name}</p>
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={first.rating} size={18} className="text-foreground" />
                <span className="font-sans text-sm font-semibold">{first.rating.toFixed(1)}</span>
              </div>
            </div>
          </a>

          {/* Right column: 2 top, 3 bottom */}
          <div className="flex flex-col">
            {/* 2 — right top, horizontal row */}
            <a href={`/whiskies/${second.id}`} className="flex flex-1 border-b border-foreground">
              <div className="w-28 md:w-36 flex-shrink-0 aspect-square overflow-hidden bg-muted">
                <img
                  src={getWhiskyImage(second.id)}
                  alt={`${second.brand} ${second.name}`}
                  className="w-full h-full object-cover grayscale object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="flex flex-col justify-center p-4 md:p-6 border-l border-foreground/20">
                <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{second.type}</span>
                  <span className="h-1 w-1 bg-foreground" />
                  <span>{second.age === 0 ? 'NAS' : `${second.age} yr`}</span>
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold md:text-xl">{second.brand}</h3>
                <p className="mt-0.5 font-sans text-xs text-muted-foreground truncate">{second.name}</p>
                <div className="mt-2 flex items-center gap-2">
                  <StarRating rating={second.rating} size={13} className="text-foreground" />
                  <span className="font-sans text-xs font-semibold">{second.rating.toFixed(1)}</span>
                </div>
              </div>
            </a>

            {/* 3 — right bottom, horizontal row */}
            <a href={`/whiskies/${third.id}`} className="flex flex-1">
              <div className="w-28 md:w-36 flex-shrink-0 aspect-square overflow-hidden bg-muted">
                <img
                  src={getWhiskyImage(third.id)}
                  alt={`${third.brand} ${third.name}`}
                  className="w-full h-full object-cover grayscale object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="flex flex-col justify-center p-4 md:p-6 border-l border-foreground/20">
                <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{third.type}</span>
                  <span className="h-1 w-1 bg-foreground" />
                  <span>{third.age === 0 ? 'NAS' : `${third.age} yr`}</span>
                </div>
                <h3 className="mt-2 font-serif text-lg font-bold md:text-xl">{third.brand}</h3>
                <p className="mt-0.5 font-sans text-xs text-muted-foreground truncate">{third.name}</p>
                <div className="mt-2 flex items-center gap-2">
                  <StarRating rating={third.rating} size={13} className="text-foreground" />
                  <span className="font-sans text-xs font-semibold">{third.rating.toFixed(1)}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
