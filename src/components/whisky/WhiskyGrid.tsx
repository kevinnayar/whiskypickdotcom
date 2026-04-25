import { WhiskyCard } from './WhiskyCard'
import type { Whisky } from '../../types'

export function WhiskyGrid({ whiskies }: { whiskies: Whisky[] }) {
  return (
    <div className="border border-foreground/20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-px bg-foreground/15">
      {whiskies.map((w) => (
        <div key={w.id} className="bg-background">
          <WhiskyCard whisky={w} />
        </div>
      ))}
    </div>
  )
}
