import { users } from '../../../src/data/users'

export function onBeforePrerenderStart() {
  return Object.keys(users).map((id) => `/users/${id}`)
}
