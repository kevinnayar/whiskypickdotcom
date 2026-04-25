import { whiskies } from '../../src/data/whiskies'
import { sortWhiskies } from '../../src/utils/ratings'
import { Hero } from '../../src/components/home/Hero'
import { TopThree } from '../../src/components/home/TopThree'
import { EditorialSection } from '../../src/components/home/EditorialSection'
import { TastingNotes } from '../../src/components/home/TastingNotes'
import { Newsletter } from '../../src/components/home/Newsletter'
import { HomeFooter } from '../../src/components/home/HomeFooter'
import type { Whisky } from '../../src/types'

const topWhiskies = sortWhiskies(Object.values(whiskies) as Whisky[], 'score').slice(0, 3)

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TopThree whiskies={topWhiskies} />
      <EditorialSection />
      <TastingNotes />
      <Newsletter />
      <HomeFooter />
    </div>
  )
}
