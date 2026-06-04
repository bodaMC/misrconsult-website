const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#" },
  ],
  Services: [
    { label: "Structural Engineering", href: "#services" },
    { label: "Architecture", href: "#services" },
    { label: "Project Management", href: "#services" },
    { label: "Infrastructure", href: "#services" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "News & Insights", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-misr-950 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-misr-gold/40 to-transparent" />
      <div className="absolute inset-0 grid-architecture opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <a href="#" className="group flex items-center gap-3">
              <img
  src="/clients/misrconsult.png"
  alt="Misr Consult Logo"
  className="h-16 w-auto object-contain"
/>
              <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white">
                MisrConsult
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              Premier engineering and architectural consultancy delivering landmark
              projects with precision, integrity, and innovation since 1992.
            </p>
            <div className="mt-8 flex gap-4">
              {["LinkedIn", "X", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-xs font-semibold text-white/50 transition-all duration-300 hover:border-misr-gold hover:text-misr-gold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold">
                  {title}
                </h4>
                <ul className="mt-6 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} MisrConsult. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Engineering · Architecture · Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
