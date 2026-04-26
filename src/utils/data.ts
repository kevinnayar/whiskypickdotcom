import { whiskies as WHISKIES_RAW } from '../data/whiskies'
import { users as USERS_RAW } from '../data/users'
import type { Whisky } from '../types'

export type Score = { userId: string; whiskyId: string; score: number }

export type EnrichedWhisky = Whisky & {
  scores: Score[]
  avgScore: number
  raterCount: number
  category: string
  msrp: number
}

export type EnrichedUser = {
  id: string
  name: string
  handle: string
  bio: string
  joined: string
  ratings: Score[]
  ratedCount: number
  avgGiven: number
}

export function enrichWhisky(w: Whisky): EnrichedWhisky {
  const scores = Object.entries(w.ratings).map(([userId, score]) => ({
    userId,
    whiskyId: w.id,
    score,
  }))
  return {
    ...w,
    scores,
    avgScore: Math.round(w.rating * 100) / 100,
    raterCount: scores.length,
    category: w.type,
    msrp: w.price,
  }
}

export const allWhiskies: EnrichedWhisky[] = Object.values(
  WHISKIES_RAW as Record<string, Whisky>
).map(enrichWhisky)

export const allUsers: EnrichedUser[] = Object.entries(
  USERS_RAW as Record<string, string>
).map(([id, name]) => {
  const ratings: Score[] = []
  allWhiskies.forEach(w =>
    w.scores.forEach(s => {
      if (s.userId === id) ratings.push(s)
    })
  )
  const avg = ratings.length ? ratings.reduce((s, r) => s + r.score, 0) / ratings.length : 0
  const parts = name.split(' ')
  const handle = (parts[0][0] + '.' + parts[parts.length - 1][0] + '.').toUpperCase()
  return {
    id,
    name,
    handle,
    bio: '',
    joined: '—',
    ratings,
    ratedCount: ratings.length,
    avgGiven: Math.round(avg * 100) / 100,
  }
})

export const categories = ['Scotch', 'Bourbon', 'Rye', 'Irish', 'Whisky'] as const

export function displayName(fullName: string): string {
  const parts = fullName.trim().split(' ')
  if (parts.length < 2) return fullName
  return parts[0] + ' ' + parts[parts.length - 1][0] + '.'
}
