import { HeroPresentationVideo } from "@/components/home/hero-presentation-video";
import { HeroScrollIndicator } from "@/components/home/hero-scroll-indicator";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-misr-950">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486718448742-ef673fd52f0f?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-misr-950/75 via-misr-950/55 to-misr-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-misr-950/95 via-misr-950/70 to-misr-950/25" />
        <div className="gradient-radial-green absolute inset-0" />
      </div>

      <div className="absolute inset-0 grid-architecture opacity-35" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-4 pt-28 sm:pt-32 lg:px-8 lg:pb-6 lg:pt-36">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up mb-5 flex items-center gap-4 lg:mb-6">
              <span className="h-px w-12 bg-misr-gold animate-line-draw" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                Engineering Excellence Since 1992
              </span>
            </div>

            <h1 className="animate-fade-up animation-delay-200 font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              Shaping the
              <br />
              <span className="font-semibold italic text-misr-400">
                Future of Infrastructure
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg lg:mt-7">
              MisrConsult delivers world-class structural engineering, architectural
              design, and project management for landmark developments across the
              Middle East and internationally.
            </p>

            <div className="animate-fade-up animation-delay-600 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 bg-misr-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-950 transition-all duration-300 hover:bg-white"
              >
                View Our Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-misr-400 hover:bg-white/5"
              >
                Our Story
              </a>
            </div>
          </div>

          <HeroPresentationVideo />
        </div>

        <HeroScrollIndicator />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
    </section>
  );
}
