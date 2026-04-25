const links = {
  explore: [
    { label: 'All Whiskies', href: '/whiskies' },
    { label: 'Bourbon', href: '/whiskies?type=Bourbon' },
    { label: 'Scotch', href: '/whiskies?type=Scotch' },
    { label: 'Irish', href: '/whiskies?type=Irish' },
  ],
  community: [
    { label: 'Users', href: '/users' },
    { label: 'Top Rated', href: '/whiskies?sort=score' },
  ],
}

export function HomeFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="/">
              <h2 className="font-serif text-3xl font-bold">
                Whisky<span className="italic">Pick</span>
              </h2>
            </a>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
              Curating the finest single malts and spirits since 2016. Independent community reviews for the discerning collector.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Explore</h3>
            <ul className="mt-6 space-y-4">
              {links.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm transition-opacity hover:opacity-60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Community</h3>
            <ul className="mt-6 space-y-4">
              {links.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm transition-opacity hover:opacity-60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-foreground pt-8 md:flex-row">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            © 2024 WhiskyPick. All rights reserved.
          </p>
          <p className="font-sans text-xs italic text-muted-foreground">
            Please drink responsibly. Must be of legal drinking age.
          </p>
        </div>
      </div>
    </footer>
  )
}
