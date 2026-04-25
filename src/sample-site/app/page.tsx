import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedWhiskies } from "@/components/featured-whiskies"
import { EditorialSection } from "@/components/editorial-section"
import { TastingNotes } from "@/components/tasting-notes"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedWhiskies />
      <EditorialSection />
      <TastingNotes />
      <Newsletter />
      <Footer />
    </main>
  )
}
