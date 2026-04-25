import { useState, useMemo } from 'react'
import { whiskies } from '../../src/data/whiskies'
import { WhiskyGrid } from '../../src/components/whisky/WhiskyGrid'
import { sortWhiskies, CATEGORY_ORDER } from '../../src/utils/ratings'
import type { Whisky, SortKey, WhiskyType } from '../../src/types'

const ALL_WHISKIES = Object.values(whiskies) as Whisky[]

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'score', label: 'Score' },
  { value: 'age', label: 'Age' },
  { value: 'name', label: 'Name' },
  { value: 'price', label: 'Price' },
]

export default function WhiskiesPage() {
  const [sort, setSort] = useState<SortKey>('score')
  const [type, setType] = useState<WhiskyType | 'All'>('All')

  const filtered = useMemo(() => {
    const base = type === 'All' ? ALL_WHISKIES : ALL_WHISKIES.filter((w) => w.type === type)
    return sortWhiskies(base, sort)
  }, [sort, type])

  return (
    <div>
      {/* Editorial page header */}
      <div className="border-b border-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Community Collection
              </span>
              <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                All <span className="italic">Whiskies</span>
              </h1>
              <p className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                {filtered.length} bottles
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center border border-foreground/30">
                <FilterButton active={type === 'All'} onClick={() => setType('All')}>All</FilterButton>
                {CATEGORY_ORDER.map(({ type: t, label }) => (
                  <FilterButton key={t} active={type === t} onClick={() => setType(t as WhiskyType)}>
                    {label.replace('Top ', '')}
                  </FilterButton>
                ))}
              </div>
              <div className="flex items-center border border-foreground/30">
                {SORT_OPTIONS.map((opt) => (
                  <FilterButton key={opt.value} active={sort === opt.value} onClick={() => setSort(opt.value)}>
                    {opt.label}
                  </FilterButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <WhiskyGrid whiskies={filtered} />
      </div>
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-sans uppercase tracking-widest transition-colors border-r border-foreground/20 last:border-r-0 ${
        active
          ? 'bg-foreground text-background'
          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </button>
  )
}
