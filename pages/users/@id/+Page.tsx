import { useData } from 'vike-react/useData'
import { WhiskyCard } from '../../../src/components/whisky/WhiskyCard'
import { getUserImage, NO_AVATAR } from '../../../src/utils/images'

import type { Data } from './+data'

export default function UserProfilePage() {
  const data = useData<Data>()

  if (!data) {
    return <p className="text-muted-foreground">User not found.</p>
  }

  const { userId, name, ratedWhiskies } = data

  return (
    <div>
      <a href="/users" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
        ← All Users
      </a>

      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
          <img
            src={getUserImage(userId)}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = NO_AVATAR }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{ratedWhiskies.length} ratings</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-foreground mb-4">Ratings</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {ratedWhiskies.map((w) => (
          <div key={w.id} className="relative">
            <WhiskyCard whisky={w} />
            <div className="absolute top-2 right-2 bg-background/80 text-foreground text-xs font-bold px-1.5 py-0.5 rounded backdrop-blur-sm border border-border">
              {w.ratings[userId]}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
