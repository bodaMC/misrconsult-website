import Link from "next/link";
import { ClientsShowcase } from "@/components/home/clients-showcase";

export function Clients() {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-misr-950 py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-architecture opacity-20" />
      <div className="gradient-radial-green absolute inset-0 opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Trusted Partnerships
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Our <span className="font-semibold text-misr-400">Clients</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-misr-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55">
            Leading developers, contractors, and institutions who trust MisrConsult
            to deliver engineering excellence at scale.
          </p>
        </div>
      </div>

      <ClientsShowcase />

      <div className="relative mx-auto mt-12 flex justify-center px-6 lg:px-8">
        <Link
          href="/clients"
          className="group inline-flex items-center gap-3 border border-misr-gold/60 bg-misr-950/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold shadow-[0_0_0_rgba(196,163,90,0)] backdrop-blur-sm transition-all duration-500 hover:border-misr-gold hover:bg-misr-gold hover:text-misr-950 hover:shadow-[0_0_40px_rgba(196,163,90,0.35)]"
        >
          View All Clients
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
