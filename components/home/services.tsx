import LazyImage from "@/components/common/LazyImage";
const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Concept-to-completion architectural services blending aesthetic excellence with functional precision for commercial, residential, and civic spaces.",
    image: "/services/05a.webp",
  },
  {
    number: "02",
    title: "Structural Engineering",
    description:
      "Advanced analysis and design for high-rise towers, bridges, industrial facilities, and complex foundations using cutting-edge computational methods.",
    image: "/services/02.webp",
  },
  {
    number: "03",
    title: "Project Management",
    description:
      "End-to-end delivery oversight including scheduling, cost control, risk management, and stakeholder coordination for projects of any scale.",
    image: "/services/03.webp",
  },
  {
    number: "04",
    title: "Infrastructure Planning",
    description:
      "Master planning, transportation networks, utilities coordination, and urban infrastructure for smart cities and regional development.",
    image: "/services/04.webp",
  },
  {
    number: "05",
    title: "MEP Engineering",
    description:
      "Integrated mechanical, electrical, and plumbing systems design optimized for energy efficiency, reliability, and seamless building performance.",
    image: "/services/05.webp",
  },
    {
    number: "06",
    title: "Life Safety",
    description:
      "Fire alarm, firefighting, and emergency systems to protect lives and property.",
    image: "/services/07.webp",
  },
    {
    number: "07",
    title: "Wet Utilites",
    description:
      "Water supply, drainage, and plumbingsystems for efficient building operation and saving Energy solutions",
    image: "/services/08.webp",
  },
  {
    number: "08",
    title: "Consultancy & Advisory",
    description:
      "Technical due diligence, feasibility studies, value engineering, and expert advisory for investors, lenders, and development partners.",
    image: "/services/06.webp",
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
              className="group relative overflow-hidden bg-misr-900/80 transition-all duration-500 hover:bg-misr-800/90"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-misr-500/0 to-misr-500/0 transition-all duration-500 group-hover:from-misr-500/5 group-hover:to-transparent" />

              <div className="relative">
               <div className="relative aspect-[2.2/1] overflow-hidden rounded-t-sm">
                  <LazyImage
                    src={service.image}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-misr-950/70 via-misr-950/20 to-misr-950/30 transition-colors duration-500 group-hover:from-misr-950/80" />
                 <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md bg-black/50 text-lg font-semibold text-misr-gold backdrop-blur-sm">
                    {service.number}
                  </span>
                  <div className="absolute left-0 top-0 h-px w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white transition-colors duration-300 group-hover:text-misr-gold">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-white/70">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
