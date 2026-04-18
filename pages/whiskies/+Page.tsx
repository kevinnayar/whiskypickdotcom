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
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-foreground">All Whiskies</h1>
        <div className="flex flex-wrap gap-2">
          {/* Type filter */}
          <div className="flex items-center gap-1 bg-muted rounded-md p-1">
            <FilterButton active={type === 'All'} onClick={() => setType('All')}>All</FilterButton>
            {CATEGORY_ORDER.map(({ type: t, label }) => (
              <FilterButton
                key={t}
                active={type === t}
                onClick={() => setType(t as WhiskyType)}
              >
                {label.replace('Top ', '')}
              </FilterButton>
            ))}
          </div>
          {/* Sort */}
          <div className="flex items-center gap-1 bg-muted rounded-md p-1">
            {SORT_OPTIONS.map((opt) => (
              <FilterButton key={opt.value} active={sort === opt.value} onClick={() => setSort(opt.value)}>
                {opt.label}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} whiskies</p>
      <WhiskyGrid whiskies={filtered} />
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
      className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
        active
          ? 'bg-background text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {children}
    </button>
  )
}
