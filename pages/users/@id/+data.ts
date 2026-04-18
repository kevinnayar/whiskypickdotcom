import { users } from '../../../src/data/users'
import { whiskies } from '../../../src/data/whiskies'
import { sortWhiskies } from '../../../src/utils/ratings'
import type { Whisky } from '../../../src/types'

export type Data = {
  userId: string
  name: string
  ratedWhiskies: Whisky[]
  avgGiven: number
} | null

export async function data(pageContext: { routeParams: { id: string } }): Promise<Data> {
  const { id } = pageContext.routeParams
  const name = (users as Record<string, string>)[id]
  if (!name) return null

  const ratedWhiskies = sortWhiskies(
    (Object.values(whiskies) as Whisky[]).filter((w) => id in w.ratings),
    'score',
  ).sort((a, b) => b.ratings[id] - a.ratings[id])

  const totalScore = ratedWhiskies.reduce((sum, w) => sum + w.ratings[id], 0)
  const avgGiven = ratedWhiskies.length > 0 ? totalScore / ratedWhiskies.length : 0

  return { userId: id, name, ratedWhiskies, avgGiven }
}
