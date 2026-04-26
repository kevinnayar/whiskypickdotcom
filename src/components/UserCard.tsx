import type { EnrichedUser } from '../utils/data'
import { getUserImage } from '../utils/images'

export function UserCard({ user }: { user: EnrichedUser }) {
  return (
    <a className="ucard" href={`/users/${user.id}`}>
      <div className="avatar" style={{ backgroundImage: `url(${getUserImage(user.id)})` }} />
      <div>
        <div className="name">{user.name}</div>
        <div className="handle">{user.handle}{user.joined && user.joined !== '—' ? ` · joined ${user.joined}` : ''}</div>
      </div>
      {user.bio ? <div className="bio">{user.bio}</div> : null}
      <div className="stats">
        <div><b className="num">{user.ratedCount}</b>Tastings</div>
        <div><b className="num">{user.avgGiven.toFixed(1)}</b>Avg given</div>
      </div>
    </a>
  )
}
