import Link from "next/link";
import { Footer } from "@/components/home/footer";

export default function ProjectNotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-misr-950 px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
          404
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-light text-white">
          Project Not Found
        </h1>
        <p className="mt-4 max-w-md text-white/50">
          The project you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-3 border border-misr-gold/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold transition-all duration-300 hover:bg-misr-gold hover:text-misr-950"
        >
          ← Back to Projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
