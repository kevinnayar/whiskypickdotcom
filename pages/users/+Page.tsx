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
      {/* Editorial page header */}
      <div className="border-b border-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                The Community
              </span>
              <h1 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                Our <span className="italic">Tasters</span>
              </h1>
              <p className="mt-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                {filtered.length} members
              </p>
            </div>

            <input
              type="search"
              placeholder="Search members…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="font-sans text-sm bg-background border-b border-foreground/30 px-0 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors w-56 md:self-end"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="border border-foreground/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-px bg-foreground/15">
          {filtered.map((u) => (
            <div key={u.id} className="bg-background">
              <UserCard userId={u.id} name={u.name} ratingCount={u.ratingCount} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
