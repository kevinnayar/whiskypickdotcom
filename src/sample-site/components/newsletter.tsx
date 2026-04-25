"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="border-b-2 border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-background/60">
              Stay Informed
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              The Weekly <span className="italic">Dram</span>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-background/80">
              Join our community of whisky enthusiasts. Receive curated reviews, tasting notes, and exclusive insights delivered to your inbox every Thursday.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                // Handle newsletter signup
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 border-2 border-background/30 bg-transparent px-6 py-4 font-sans text-sm placeholder:text-background/50 focus:border-background focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="border-2 border-background bg-background px-8 py-4 font-sans text-xs uppercase tracking-widest text-foreground transition-all hover:bg-transparent hover:text-background"
                >
                  Subscribe
                </button>
              </div>
              <p className="font-sans text-xs text-background/50">
                By subscribing, you agree to our privacy policy. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-background/20 pt-12">
              <div>
                <p className="font-serif text-4xl font-bold">12K+</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-background/60">
                  Subscribers
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold">500+</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-background/60">
                  Reviews
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold">8</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-background/60">
                  Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
