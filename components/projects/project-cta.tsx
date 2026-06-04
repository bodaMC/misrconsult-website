import Link from "next/link";
import { FadeIn } from "./fade-in";

export function ProjectCta() {
  return (
    <section className="relative bg-misr-cream py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-misr-950 md:text-4xl">
            Ready to start your next landmark project?
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-misr-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-misr-600"
            >
              Get in Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border border-misr-700 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-700 transition-all duration-300 hover:bg-misr-700 hover:text-white"
            >
              View All Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
