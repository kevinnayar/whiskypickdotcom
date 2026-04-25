import Image from "next/image"

export function Hero() {
  return (
    <section className="border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12">
          {/* Main Feature */}
          <div className="relative border-b border-foreground lg:col-span-8 lg:border-b-0 lg:border-r">
            <div className="aspect-[4/3] lg:aspect-[16/10]">
              <Image
                src="/images/whisky-hero.jpg"
                alt="Featured whisky in crystal glass"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
              <span className="mb-3 inline-block border border-white/60 px-3 py-1 font-sans text-xs uppercase tracking-widest text-white">
                Editor&apos;s Pick
              </span>
              <h2 className="font-serif text-3xl font-bold italic leading-tight text-white md:text-5xl lg:text-6xl">
                The Art of the <br />Perfect Pour
              </h2>
              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/80 md:text-base">
                A deep exploration into the ritual and science behind serving single malt whisky at its finest.
              </p>
            </div>
          </div>

          {/* Side Features */}
          <div className="flex flex-col lg:col-span-4">
            <div className="flex flex-1 flex-col border-b border-foreground p-6 md:p-8">
              <span className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                This Week
              </span>
              <h3 className="font-serif text-2xl font-bold md:text-3xl">
                Islay&apos;s Hidden <span className="italic">Treasures</span>
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                Beyond Laphroaig and Lagavulin lies a world of undiscovered peated expressions waiting to be explored.
              </p>
              <span className="mt-4 font-sans text-xs uppercase tracking-widest">
                Read More →
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <span className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Interview
              </span>
              <h3 className="font-serif text-2xl font-bold md:text-3xl">
                Master Blender <span className="italic">Speaks</span>
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                A candid conversation with one of Scotland&apos;s most respected whisky makers on tradition and innovation.
              </p>
              <span className="mt-4 font-sans text-xs uppercase tracking-widest">
                Read More →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
