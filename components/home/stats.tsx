import { StatCounter } from "./stat-counter";

const stats = [
  { value: 240, label: "Projects Completed", suffix: "+" },
  { value: 35, label: "Years of Excellence", suffix: "+" },
  { value: 180, label: "Expert Engineers", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
];

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-misr-800 py-24 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-misr-950/80 via-misr-800/90 to-misr-950/80" />
      <div className="absolute inset-0 grid-architecture opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Our Impact
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
            Built on <span className="font-semibold text-misr-400">Proven Results</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-misr-gold/40 hover:bg-white/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-misr-gold/0 to-transparent transition-all duration-500 group-hover:via-misr-gold/60" />
              <StatCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
