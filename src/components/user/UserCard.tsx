import { getUserImage, NO_AVATAR } from '../../utils/images'

type Props = {
  userId: string
  name: string
  ratingCount: number
}

export function UserCard({ userId, name, ratingCount }: Props) {
  return (
    <a href={`/users/${userId}`} className="block group h-full">
      <div className="h-full flex flex-col">
        <div className="aspect-[2/3] bg-muted overflow-hidden">
          <img
            src={getUserImage(userId)}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => { e.currentTarget.src = NO_AVATAR }}
          />
        </div>
        <div className="p-3 border-t border-foreground/20 flex-1">
          <p className="font-serif font-bold text-foreground text-lg leading-tight truncate">{name}</p>
          <p className="text-muted-foreground text-xs mt-0.5">{ratingCount} ratings</p>
        </div>
      </div>
    </a>
  )
}
