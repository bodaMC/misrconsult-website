import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { ClientCard } from "@/components/home/client-card";
import { clients } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Clients | MisrConsult",
  description:
    "Organizations and institutions that trust MisrConsult for engineering excellence across Egypt and the Middle East.",
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2400&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Our Clients
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Trusted By{" "}
            <span className="font-semibold text-misr-400">Industry Leaders</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Over decades of practice, MisrConsult has partnered with leading
            developers, government entities, institutions, and private
            organizations across Egypt and the region.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      <section className="relative overflow-hidden bg-misr-950 py-16 lg:py-24">
        <div className="absolute inset-0 grid-architecture opacity-15" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} variant="grid" />
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
