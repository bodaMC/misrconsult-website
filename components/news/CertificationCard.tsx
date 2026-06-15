import Image from "next/image";
import type { Certification } from "@/lib/news";

interface Props {
  cert: Certification;
  variant?: "portrait" | "landscape";
}

export default function CertificationCard({
  cert,
  variant = "portrait",
}: Props) {
  const isLandscape = variant === "landscape";

  return (
    <article className="group relative overflow-hidden">
      <div
        className={`relative overflow-hidden bg-misr-950 ${
          isLandscape
            ? "aspect-[21/9] min-h-[160px] sm:min-h-[195px] lg:min-h-[220px]"
            : "aspect-[3/4] min-h-[360px] lg:min-h-[420px]"
        }`}
      >
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          className="object-contain p-12 transition-transform duration-700 group-hover:scale-105 sm:p-5 lg:p-16"
          sizes={
            isLandscape
              ? "(max-width: 1024px) 100vw, 1280px"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          }
        />
        <div className="absolute inset-0 bg-misr-950/20 transition-colors duration-500 group-hover:bg-misr-950/35" />
        <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="border border-t-0 border-white/10 bg-misr-900/40 px-5 py-4 transition-colors duration-500 group-hover:border-misr-gold/30 group-hover:bg-misr-800/50 lg:px-6 lg:py-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
          {cert.year}
        </span>
        <h3 className="mt-1.5 font-[family-name:var(--font-cormorant)] text-lg font-semibold leading-snug text-white transition-transform duration-300 group-hover:-translate-y-0.5 lg:text-xl">
          {cert.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/50">
          {cert.description}
        </p>
      </div>
    </article>
  );
}
