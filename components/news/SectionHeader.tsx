import type { ReactNode } from "react";
import { FadeIn } from "@/components/projects/fade-in";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  variant?: "dark" | "light";
  delay?: number;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
  delay = 0,
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span
            className={`text-xs font-semibold uppercase tracking-[0.35em] ${
              isDark ? "text-misr-gold" : "text-misr-600"
            }`}
          >
            {eyebrow}
          </span>
          <h2
            className={`mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light leading-tight md:text-5xl ${
              isDark ? "text-white" : "text-misr-950"
            }`}
          >
            {title}
          </h2>
          <div className="mt-6 h-px w-16 bg-misr-gold" />
        </div>
        {subtitle && (
          <p
            className={`max-w-sm text-sm leading-relaxed md:text-right ${
              isDark ? "text-white/50" : "text-misr-950/50"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
