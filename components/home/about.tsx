export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-misr-cream py-24 lg:py-32">
      <div className="gradient-radial-green absolute inset-0 opacity-60" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-misr-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-misr-500/20" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                backgroundImage:
"url('/images/hero.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-misr-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden border border-misr-gold/30 bg-white p-8 shadow-xl lg:block">
              <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-misr-800">
                1992
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-misr-600">
                Established in Cairo
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              About MisrConsult
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light leading-tight text-misr-950 md:text-5xl lg:text-6xl">
              Where Engineering
              <br />
              <span className="font-semibold text-misr-700">Meets Vision</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />

            <p className="mt-8 text-base leading-relaxed text-misr-800/80 md:text-lg">
              For over three decades, MisrConsult has been the trusted partner for
              governments, developers, and institutions seeking precision engineering
              and architectural excellence. We transform ambitious concepts into
              enduring structures that define skylines and communities.
            </p>
            <p className="mt-6 text-base leading-relaxed text-misr-800/70">
              Our multidisciplinary teams integrate structural innovation, sustainable
              design principles, and rigorous project controls — delivering on time,
              within budget, and beyond expectation.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "ISO-Certified Quality Systems",
                "LEED & Sustainable Design",
                "BIM-Integrated Workflows",
                "International Standards",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-misr-800 transition-colors hover:text-misr-600"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-misr-600 text-[10px] text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-misr-700 transition-colors hover:text-misr-500"
            >
              Explore Our Expertise
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
