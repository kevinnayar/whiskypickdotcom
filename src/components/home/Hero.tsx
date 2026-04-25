export function Hero() {
  return (
    <section className="border-b border-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12">
          {/* Main feature */}
          <div className="relative border-b border-foreground lg:col-span-8 lg:border-b-0 lg:border-r">
            <div className="aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden">
              <img
                src="/images/editorial/whisky-hero.jpg"
                alt="Featured whisky in crystal glass"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
              <span className="mb-3 inline-block border border-white/60 px-3 py-1 font-sans text-xs uppercase tracking-widest text-white">
                Editor's Pick
              </span>
              <h2 className="font-serif text-3xl font-bold italic leading-tight text-white md:text-5xl lg:text-6xl">
                The Art of the <br />Perfect Pour
              </h2>
              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/80 md:text-base">
                A deep exploration into the ritual and science behind serving single malt whisky at its finest.
              </p>
            </div>
          </div>

          {/* Side features */}
          <div className="flex flex-col lg:col-span-4">
            <div className="flex flex-1 flex-col border-b border-foreground p-6 md:p-8">
              <span className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                This Week
              </span>
              <h3 className="font-serif text-2xl font-bold md:text-3xl">
                Islay's Hidden <span className="italic">Treasures</span>
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                Beyond Laphroaig and Lagavulin lies a world of undiscovered peated expressions waiting to be explored.
              </p>
              <a href="/whiskies" className="mt-4 font-sans text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
                Read More →
              </a>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <span className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Community
              </span>
              <h3 className="font-serif text-2xl font-bold md:text-3xl">
                Top Rated <span className="italic">This Month</span>
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                Our community has spoken — see which bottles climbed to the top of the rankings this month.
              </p>
              <a href="/whiskies" className="mt-4 font-sans text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
                See Rankings →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
