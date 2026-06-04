import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/home/footer";
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
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0 grid-architecture opacity-25" />
        <div className="gradient-radial-green absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-misr-950/40 to-misr-950" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/#clients"
            className="group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Trusted Partnerships
          </span>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our <span className="font-semibold text-misr-400">Clients</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            A selection of developers, contractors, and institutions who partner
            with MisrConsult on landmark engineering and infrastructure work.
          </p>
        </div>
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
