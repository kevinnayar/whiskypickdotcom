import { whiskies } from '../../../src/data/whiskies'
import type { Whisky } from '../../../src/types'

export type Data = Whisky | null

export async function data(pageContext: { routeParams: { id: string } }): Promise<Data> {
  const whisky = (whiskies as Record<string, Whisky>)[pageContext.routeParams.id]
  return whisky ?? null
}
