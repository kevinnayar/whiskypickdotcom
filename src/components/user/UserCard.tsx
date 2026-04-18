import { getUserImage, NO_AVATAR } from '../../utils/images'

type Props = {
  userId: string
  name: string
  ratingCount: number
}

export function UserCard({ userId, name, ratingCount }: Props) {
  return (
    <a href={`/users/${userId}`} className="block group">
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40">
        <div className="aspect-square bg-muted overflow-hidden">
          <img
            src={getUserImage(userId)}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = NO_AVATAR }}
          />
        </div>
        <div className="p-3">
          <p className="font-semibold text-foreground text-xl leading-snug truncate">{name}</p>
          <p className="text-primary text-xs font-semibold mt-0.5">{ratingCount} ratings</p>
        </div>
      </div>
    </a>
  )
}
