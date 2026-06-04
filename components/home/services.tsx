const services = [
  
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Concept-to-completion architectural services blending aesthetic excellence with functional precision for commercial, residential, and civic spaces.",
     icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M8 40 L24 8 L40 40" />
        <line x1="14" y1="28" x2="34" y2="28" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Structural Engineering",
    description:
      "Advanced analysis and design for high-rise towers, bridges, industrial facilities, and complex foundations using cutting-edge computational methods.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="10" y="16" width="28" height="24" />
        <line x1="10" y1="28" x2="38" y2="28" />
        <line x1="24" y1="16" x2="24" y2="40" />
      </svg>
    ),
     
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "End-to-end delivery oversight including scheduling, cost control, risk management, and stakeholder coordination for projects of any scale.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="8" y="12" width="32" height="28" />
        <line x1="8" y1="20" x2="40" y2="20" />
        <line x1="16" y1="28" x2="32" y2="28" />
        <line x1="16" y1="34" x2="26" y2="34" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Infrastructure Planning",
    description:
      "Master planning, transportation networks, utilities coordination, and urban infrastructure for smart cities and regional development.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 38 Q24 10 42 38" />
        <line x1="6" y1="38" x2="42" y2="38" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "MEP Engineering",
    description:
      "Integrated mechanical, electrical, and plumbing systems design optimized for energy efficiency, reliability, and seamless building performance.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="14" />
        <line x1="24" y1="10" x2="24" y2="38" />
        <line x1="10" y1="24" x2="38" y2="24" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Consultancy & Advisory",
    description:
      "Technical due diligence, feasibility studies, value engineering, and expert advisory for investors, lenders, and development partners.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 8 L40 40 H8 Z" />
        <line x1="24" y1="20" x2="24" y2="30" />
        <circle cx="24" cy="34" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-misr-950 py-24 lg:py-32">
      <div className="absolute inset-0 grid-architecture opacity-30" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-misr-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
              What We Do
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl lg:text-6xl">
              Integrated Engineering
              <br />
              <span className="font-semibold text-misr-400">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            Comprehensive consultancy spanning every phase of the built environment —
            from initial concept through commissioning and beyond.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative bg-misr-900/80 p-8 transition-all duration-500 hover:bg-misr-800/90 lg:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-misr-500/0 to-misr-500/0 transition-all duration-500 group-hover:from-misr-500/5 group-hover:to-transparent" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="text-misr-400 transition-colors duration-300 group-hover:text-misr-gold">
                    {service.icon}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white/15 transition-colors duration-300 group-hover:text-misr-gold/40">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-misr-gold">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  {service.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-misr-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
