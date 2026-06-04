export function HeroScrollIndicator() {
  return (
    <a
      href="#about"
      className="hero-scroll-indicator group mx-auto mt-10 flex flex-col items-center gap-4 pb-2 lg:mt-8"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-misr-gold/55 transition-colors duration-300 group-hover:text-misr-gold/80">
        Explore Our Legacy
      </span>
      <span className="relative flex h-14 w-px items-start justify-center" aria-hidden>
        <span className="absolute inset-0 bg-gradient-to-b from-misr-gold/50 via-misr-gold/20 to-transparent" />
        <span className="hero-scroll-dot absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-misr-gold shadow-[0_0_8px_rgba(196,163,90,0.6)]" />
      </span>
    </a>
  );
}
