import { Home, Library, Users } from 'lucide-react'

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="/" className="font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors">
            WhiskyPick
          </a>
          <div className="flex items-center gap-1">
            <NavLink href="/" icon={<Home size={18} />} label="Home" />
            <NavLink href="/whiskies" icon={<Library size={18} />} label="Whiskies" />
            <NavLink href="/users" icon={<Users size={18} />} label="Users" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  )
}
