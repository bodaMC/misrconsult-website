import { portfolioPdfUrl } from "@/lib/clients";

export function PortfolioDownload() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-misr-900 py-20 lg:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-misr-950 via-misr-900/95 to-misr-950" />
      <div className="absolute inset-0 grid-architecture opacity-15" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
          Company Profile
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light text-white md:text-4xl lg:text-5xl">
          Explore Our <span className="font-semibold text-misr-400">Portfolio</span>
        </h2>
        <div className="mx-auto mt-6 h-px w-16 bg-misr-gold" />
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
          Download our company portfolio for an overview of landmark projects,
          technical capabilities, and the engineering standards behind every
          MisrConsult delivery.
        </p>

        <a
          href={portfolioPdfUrl}
          download="MisrConsult-Company-Portfolio.pdf"
          className="group relative mt-10 inline-flex items-center gap-3 border border-misr-gold/50 bg-misr-gold/10 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold shadow-[0_0_0_rgba(196,163,90,0)] transition-all duration-500 hover:border-misr-gold hover:bg-misr-gold hover:text-misr-950 hover:shadow-[0_0_40px_rgba(196,163,90,0.35)]"
        >
          Download Company Portfolio
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
