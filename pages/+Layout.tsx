import '../src/styles/globals.css'
import { NavBar } from '../src/components/NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
