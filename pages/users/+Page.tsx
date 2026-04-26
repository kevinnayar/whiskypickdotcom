import { useState, useMemo } from 'react'
import { allUsers } from '../../src/utils/data'
import { Masthead } from '../../src/components/Masthead'
import { UserCard } from '../../src/components/UserCard'
import { Footer } from '../../src/components/Footer'
import { Crumbs } from '../../src/components/Crumbs'
import { Icon } from '../../src/components/Icon'

export default function Page() {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return allUsers
    return allUsers.filter(u =>
      u.name.toLowerCase().includes(s) ||
      u.bio.toLowerCase().includes(s) ||
      u.handle.toLowerCase().includes(s)
    )
  }, [q])

  return (
    <>
      <Crumbs items={[{ label: 'Home', href: '/' }, { label: 'Tasters' }]} />
      <Masthead
        eyebrow="The standing tasters"
        title="The people who<br/><em>keep score.</em>"
        dek="Our panel of tasters — the nose, palate, and opinions behind every number on this site. Nobody here agrees on everything, and that is the point."
        right={
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', color: 'var(--mute)', textAlign: 'right', lineHeight: 1.8 }}>
            <div>{allUsers.length} TASTERS ON RECORD</div>
            <div>MATCHING · {filtered.length}</div>
          </div>
        }
      />

      <div className="container">
        <div className="search-row">
          <Icon name="search" size={22} />
          <input
            className="search-input"
            placeholder="Search by name, handle, or bio…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          {q && <button className="pill" onClick={() => setQ('')}>Clear</button>}
        </div>
      </div>

      <div className="container" style={{ padding: '32px 0' }}>
        {filtered.length === 0 ? (
          <div className="empty">No tasters match "{q}".</div>
        ) : (
          <div className="user-grid">
            {filtered.map(u => <UserCard key={u.id} user={u} />)}
          </div>
        )}
      </div>

      <div className="container"><Footer /></div>
    </>
  )
}
