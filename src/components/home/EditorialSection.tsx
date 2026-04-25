export function EditorialSection() {
  return (
    <section className="border-b border-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Left — large image feature */}
          <div className="border-b border-foreground lg:border-b-0 lg:border-r">
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[500px]">
              <img
                src="/images/editorial/distillery.jpg"
                alt="Scottish distillery interior"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 md:p-12">
                <span className="mb-4 font-sans text-xs uppercase tracking-widest text-white/70">
                  Craft & Heritage
                </span>
                <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  The Copper <br />
                  <span className="italic">Revolution</span>
                </h2>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/80">
                  How Scotland's independent distilleries are reshaping the future of single malt production.
                </p>
                <span className="mt-6 font-sans text-xs uppercase tracking-widest text-white">
                  Continue Reading →
                </span>
              </div>
            </div>
          </div>

          {/* Right — stacked articles */}
          <div className="flex flex-col">
            <article className="flex flex-1 flex-col border-b border-foreground p-8 md:p-12">
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Opinion
              </span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl">
                Age Statements: <span className="italic">Do They Still Matter?</span>
              </h3>
              <p className="mt-4 flex-1 font-sans text-base leading-relaxed text-muted-foreground">
                The industry's shift toward NAS releases has sparked debate among purists and modernists alike. We explore both sides of this evolving conversation.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-10 w-10 border-2 border-foreground bg-muted" />
                <div>
                  <p className="font-sans text-sm font-medium">James Morrison</p>
                  <p className="font-sans text-xs text-muted-foreground">March 2024</p>
                </div>
              </div>
            </article>

            <article className="flex flex-1 flex-col p-8 md:p-12">
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Travel
              </span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-4xl">
                48 Hours in <span className="italic">Speyside</span>
              </h3>
              <p className="mt-4 flex-1 font-sans text-base leading-relaxed text-muted-foreground">
                A curated itinerary through Scotland's most famous whisky region, from legendary distilleries to hidden local favorites.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-10 w-10 border-2 border-foreground bg-muted" />
                <div>
                  <p className="font-sans text-sm font-medium">Eleanor Banks</p>
                  <p className="font-sans text-xs text-muted-foreground">February 2024</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
