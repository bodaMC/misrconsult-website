"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FadeIn } from "@/components/projects/fade-in";
import SectionHeader from "@/components/news/SectionHeader";
import { jobPositions, type JobPosition } from "@/lib/careers";
import { PositionModal } from "./position-modal";

type PositionsGalleryProps = {
  onSelectPosition: (title: string) => void;
};

function PositionCard({
  position,
  index,
  onOpen,
}: {
  position: JobPosition;
  index: number;
  onOpen: (position: JobPosition) => void;
}) {
  return (
    <FadeIn delay={index * 80}>
      <button
        aria-label={`View ${position.title} position details`}
        className="group relative w-full overflow-hidden text-left"
        onClick={() => onOpen(position)}
        type="button"
      >
        <article className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
          <Image
            alt={position.title}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={position.image}
          />
          <div className="absolute inset-0 bg-misr-950/25 transition-colors duration-500 group-hover:bg-misr-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-misr-950/95 via-misr-950/25 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-1 lg:text-3xl">
              {position.title}
            </h3>
            <div className="mt-4 flex h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                View Position
              </span>
              <span className="text-misr-gold">→</span>
            </div>
          </div>

          <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
        </article>
      </button>
    </FadeIn>
  );
}

export function PositionsGallery({ onSelectPosition }: PositionsGalleryProps) {
  const [activePosition, setActivePosition] = useState<JobPosition | null>(null);

  const handleApply = useCallback(() => {
    if (!activePosition) return;
    onSelectPosition(activePosition.title);
    setActivePosition(null);
    requestAnimationFrame(() => {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    });
  }, [activePosition, onSelectPosition]);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Open Roles"
            subtitle="Explore current opportunities across our engineering and design teams."
            title={
              <>
                Current{" "}
                <span className="font-semibold text-misr-600">Opportunities</span>
              </>
            }
            variant="light"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobPositions.map((position, index) => (
              <PositionCard
                key={position.id}
                index={index}
                onOpen={setActivePosition}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activePosition && (
          <PositionModal
            key={activePosition.id}
            onApply={handleApply}
            onClose={() => setActivePosition(null)}
            position={activePosition}
          />
        )}
      </AnimatePresence>
    </>
  );
}
