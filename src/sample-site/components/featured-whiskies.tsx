import Image from "next/image"

const whiskies = [
  {
    name: "Ardbeg Uigeadail",
    region: "Islay",
    age: "NAS",
    rating: 94,
    image: "/images/whisky-bottle.jpg",
    notes: "Rich sherry influence meets intense peat smoke",
  },
  {
    name: "GlenDronach 18",
    region: "Highland",
    age: "18 Years",
    rating: 92,
    image: "/images/whisky-pour.jpg",
    notes: "Dark fruits, chocolate, and aged oak complexity",
  },
  {
    name: "Springbank 15",
    region: "Campbeltown",
    age: "15 Years",
    rating: 93,
    image: "/images/tasting.jpg",
    notes: "Maritime character with subtle peat and rich malt",
  },
]

export function FeaturedWhiskies() {
  return (
    <section className="border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="border-b border-foreground px-4 py-6 md:px-8 md:py-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Curated Selection
              </span>
              <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">
                Featured <span className="italic">Bottles</span>
              </h2>
            </div>
            <span className="hidden font-sans text-sm uppercase tracking-widest md:block">
              View All →
            </span>
          </div>
        </div>

        {/* Whiskies Grid */}
        <div className="grid md:grid-cols-3">
          {whiskies.map((whisky, index) => (
            <article
              key={whisky.name}
              className={`group border-b border-foreground md:border-b-0 ${
                index < whiskies.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={whisky.image}
                  alt={whisky.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute right-4 top-4 border-2 border-foreground bg-background px-3 py-2">
                  <span className="font-serif text-2xl font-bold">{whisky.rating}</span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{whisky.region}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground" />
                  <span>{whisky.age}</span>
                </div>
                
                <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl">
                  {whisky.name}
                </h3>
                
                <p className="mt-3 font-sans text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{whisky.notes}&rdquo;
                </p>
                
                <button className="mt-6 border-2 border-foreground bg-foreground px-6 py-3 font-sans text-xs uppercase tracking-widest text-background transition-all hover:bg-background hover:text-foreground">
                  Read Review
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
