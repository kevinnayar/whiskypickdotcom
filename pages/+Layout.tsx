import '../src/styles/globals.css'
import { NavBar } from '../src/components/layout/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        {children}
      </main>
    </div>
  )
}
