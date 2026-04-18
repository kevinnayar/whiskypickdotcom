import type { Whisky, SortKey } from '../types'

export function toScorePercent(rating: number): number {
  return Math.round((rating / 5) * 100)
}

export function sortWhiskies(whiskies: Whisky[], key: SortKey): Whisky[] {
  return [...whiskies].sort((a, b) => {
    switch (key) {
      case 'score':
        return b.rating - a.rating
      case 'age':
        if (a.age === 0 && b.age !== 0) return 1
        if (b.age === 0 && a.age !== 0) return -1
        return b.age - a.age
      case 'name':
        return `${a.brand} ${a.name}`.localeCompare(`${b.brand} ${b.name}`)
      case 'price':
        return a.price - b.price
    }
  })
}

export function groupByType(whiskies: Whisky[]): Record<string, Whisky[]> {
  return whiskies.reduce<Record<string, Whisky[]>>((acc, w) => {
    if (!acc[w.type]) acc[w.type] = []
    acc[w.type].push(w)
    return acc
  }, {})
}

export const CATEGORY_ORDER: { type: string; label: string }[] = [
  { type: 'Bourbon', label: 'Top Bourbons' },
  { type: 'Irish', label: 'Top Irish Whiskies' },
  { type: 'Rye', label: 'Top Rye Whiskies' },
  { type: 'Scotch', label: 'Top Scotches' },
  { type: 'Whisky', label: 'Top Single Malts' },
]
