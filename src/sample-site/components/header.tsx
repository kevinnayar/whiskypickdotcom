"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b-2 border-foreground bg-background">
      <div className="border-b border-foreground/20">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Est. 2024 — Curated Spirits for the Discerning Palate
          </p>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-end justify-between">
          <Link href="/" className="group">
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Whisky<span className="italic">Pick</span>
            </h1>
          </Link>
          
          <nav className="hidden items-end gap-8 font-sans text-sm uppercase tracking-widest md:flex">
            <Link href="#" className="border-b-2 border-transparent pb-1 transition-all hover:border-foreground">
              Reviews
            </Link>
            <Link href="#" className="border-b-2 border-transparent pb-1 transition-all hover:border-foreground">
              Distilleries
            </Link>
            <Link href="#" className="border-b-2 border-transparent pb-1 transition-all hover:border-foreground">
              Guides
            </Link>
            <Link href="#" className="border-b-2 border-transparent pb-1 transition-all hover:border-foreground">
              Shop
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-foreground transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-8 flex flex-col gap-4 border-t border-foreground/20 pt-8 font-sans text-sm uppercase tracking-widest md:hidden">
            <Link href="#" className="py-2">Reviews</Link>
            <Link href="#" className="py-2">Distilleries</Link>
            <Link href="#" className="py-2">Guides</Link>
            <Link href="#" className="py-2">Shop</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
