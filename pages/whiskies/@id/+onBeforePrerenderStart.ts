import { whiskies } from '../../../src/data/whiskies'

export function onBeforePrerenderStart() {
  return Object.keys(whiskies).map((id) => `/whiskies/${id}`)
}
