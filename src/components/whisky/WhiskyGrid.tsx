import { WhiskyCard } from './WhiskyCard'
import type { Whisky } from '../../types'

export function WhiskyGrid({ whiskies }: { whiskies: Whisky[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {whiskies.map((w) => (
        <WhiskyCard key={w.id} whisky={w} />
      ))}
    </div>
  )
}
