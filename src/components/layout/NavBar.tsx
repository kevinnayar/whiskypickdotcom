import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function NavBar() {
  return (
    <header className="relative border-b border-foreground bg-background">
      <div className="border-b border-foreground/20">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Est. 2013 — Community Ratings for the Discerning Palate
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-end justify-between">
          <a href="/" className="group">
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Whisky<span className="italic">Pick</span>
            </h1>
          </a>

          <nav className="hidden items-end gap-8 font-sans text-sm uppercase tracking-widest md:flex">
            <a href="/whiskies" className="border-b border-transparent pb-1 transition-all hover:border-foreground">
              Whiskies
            </a>
            <a href="/users" className="border-b border-transparent pb-1 transition-all hover:border-foreground">
              Users
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground transition-colors pb-1"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </div>
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 border-b border-foreground bg-background px-4 pb-6 pt-4 font-sans text-sm uppercase tracking-widest">
          <div className="mx-auto max-w-7xl flex flex-col gap-4">
            <a href="/whiskies" className="py-2 hover:opacity-60 transition-opacity" onClick={() => setOpen(false)}>Whiskies</a>
            <a href="/users" className="py-2 hover:opacity-60 transition-opacity" onClick={() => setOpen(false)}>Users</a>
          </div>
        </nav>
      )}
    </>
  )
}
