import Image from "next/image"

const tastingNotes = [
  { label: "Nose", notes: ["Honey", "Vanilla", "Oak", "Dried Fruit"] },
  { label: "Palate", notes: ["Caramel", "Spice", "Citrus", "Toffee"] },
  { label: "Finish", notes: ["Long", "Warming", "Subtle Smoke"] },
]

export function TastingNotes() {
  return (
    <section className="border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="border-b border-foreground px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Deep Dive
              </span>
              <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                Anatomy of a <span className="italic">Dram</span>
              </h2>
            </div>
            <p className="max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
              Understanding the complex layers of flavor that define exceptional single malt whisky.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12">
          {/* Image */}
          <div className="relative border-b border-foreground lg:col-span-5 lg:border-b-0 lg:border-r">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[500px]">
              <Image
                src="/images/barrels.jpg"
                alt="Whisky aging barrels"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Tasting Notes Content */}
          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-3">
              {tastingNotes.map((section, index) => (
                <div
                  key={section.label}
                  className={`border-b border-foreground p-8 md:border-b-0 ${
                    index < tastingNotes.length - 1 ? "md:border-r" : ""
                  }`}
                >
                  <h3 className="font-serif text-3xl font-bold italic">{section.label}</h3>
                  <ul className="mt-6 space-y-3">
                    {section.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-center gap-3 font-sans text-sm uppercase tracking-widest"
                      >
                        <span className="h-2 w-2 bg-foreground" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-t border-foreground p-8 md:p-12">
              <blockquote className="font-serif text-2xl italic leading-relaxed md:text-3xl">
                &ldquo;A great whisky reveals itself slowly, like a story told by an old friend.&rdquo;
              </blockquote>
              <cite className="mt-6 block font-sans text-sm uppercase tracking-widest not-italic text-muted-foreground">
                — Charles MacLean, Whisky Expert
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
