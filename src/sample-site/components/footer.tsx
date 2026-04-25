import Link from "next/link"

const footerLinks = {
  explore: [
    { label: "Reviews", href: "#" },
    { label: "Distilleries", href: "#" },
    { label: "Regions", href: "#" },
    { label: "Guides", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Advertise", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <h2 className="font-serif text-3xl font-bold">
                Whisky<span className="italic">Pick</span>
              </h2>
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
              Curating the finest single malts and spirits since 2016. Independent reviews for the discerning collector.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Legal
            </h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t-2 border-foreground pt-8 md:flex-row">
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
