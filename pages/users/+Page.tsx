import { useState, useMemo } from 'react'
import { users } from '../../src/data/users'
import { whiskies } from '../../src/data/whiskies'
import { UserCard } from '../../src/components/user/UserCard'
import type { Whisky } from '../../src/types'

const whiskyList = Object.values(whiskies) as Whisky[]

function getRatingCount(userId: string): number {
  return whiskyList.filter((w) => userId in w.ratings).length
}

const ALL_USERS = Object.entries(users).map(([id, name]) => ({
  id,
  name,
  ratingCount: getRatingCount(id),
}))

export default function UsersPage() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_USERS
    const q = search.toLowerCase()
    return ALL_USERS.filter((u) => u.name.toLowerCase().includes(q))
  }, [search])

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-foreground">Users</h1>
        <input
          type="search"
          placeholder="Search users…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1.5 text-sm bg-muted border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-48"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {filtered.map((u) => (
          <UserCard key={u.id} userId={u.id} name={u.name} ratingCount={u.ratingCount} />
        ))}
      </div>
    </div>
  )
}
