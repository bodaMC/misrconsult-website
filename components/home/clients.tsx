import { clients } from "@/lib/clients";

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

        <ul className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {clients.map((client) => (
            <li key={client.name}>
              <div className="group relative flex h-28 items-center justify-center border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-misr-gold/50 hover:bg-white hover:shadow-lg sm:h-32 lg:h-36">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-misr-gold/0 to-transparent transition-all duration-500 group-hover:via-misr-gold/50" />
                <img
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={48}
                  loading="lazy"
                  className={`h-10 w-auto ${client.size ?? "max-w-[140px]"} object-contain opacity-50 grayscale transition-all duration-500 ease-out group-hover:scale-125 group-hover:opacity-100 group-hover:grayscale-0 sm:h-31 lg:h-30`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
