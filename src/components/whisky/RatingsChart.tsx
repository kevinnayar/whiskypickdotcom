import { users } from '../../../src/data/users'

type Props = {
  ratings: Record<string, number>
  avgRating: number
}

export function RatingsChart({ ratings, avgRating }: Props) {
  const entries = Object.entries(ratings)
    .sort(([, a], [, b]) => b - a)
    .map(([userId, score]) => ({
      userId,
      name: users[userId as keyof typeof users] ?? userId,
      score,
      percent: (score / 5) * 100,
    }))

  const avgPercent = (avgRating / 5) * 100

  return (
    <div className="space-y-2">
      {entries.map(({ userId, name, score, percent }) => (
        <div key={userId} className="flex items-center gap-3">
          <a
            href={`/users/${userId}`}
            className="w-32 text-sm text-muted-foreground hover:text-primary transition-colors truncate flex-shrink-0"
          >
            {name}
          </a>
          <div className="flex-1 relative h-6 bg-muted rounded-sm overflow-hidden">
            <div
              className="h-full bg-primary/80 rounded-sm transition-all"
              style={{ width: `${percent}%` }}
            />
            {/* avg line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-foreground/50"
              style={{ left: `${avgPercent}%` }}
            />
          </div>
          <span className="text-sm font-medium text-foreground w-8 text-right flex-shrink-0">
            {score}
          </span>
        </div>
      ))}
      <p className="text-xs text-muted-foreground mt-2">
        Vertical line = group average ({avgRating.toFixed(2)})
      </p>
    </div>
  )
}
