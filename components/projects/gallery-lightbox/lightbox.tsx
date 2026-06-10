"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

type GalleryLightboxProps = {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasMultiple = images.length > 1;
  const currentImage = images[index];

  const goPrevious = useCallback(() => {
    if (!hasMultiple) return;
    onNavigate(index === 0 ? images.length - 1 : index - 1);
  }, [hasMultiple, images.length, index, onNavigate]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    onNavigate(index === images.length - 1 ? 0 : index + 1);
  }, [hasMultiple, images.length, index, onNavigate]);

  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Global `scroll-behavior: smooth` on <html> would animate this
      // restoration from 0 after releasing fixed positioning.
      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, onClose]);

  if (!currentImage || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <motion.div
      animate={{ opacity: 1 }}
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-misr-950/88 p-4 backdrop-blur-sm sm:p-8"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
        <button
          aria-label="Close gallery"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/15 bg-misr-950/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-misr-gold/50 hover:bg-misr-900/90 hover:text-white sm:right-8 sm:top-8"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {hasMultiple && (
          <>
            <button
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-misr-950/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-misr-gold/50 hover:bg-misr-900/90 hover:text-white sm:left-8"
              onClick={(event) => {
                event.stopPropagation();
                goPrevious();
              }}
              type="button"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-misr-950/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-misr-gold/50 hover:bg-misr-900/90 hover:text-white sm:right-8"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              type="button"
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}

        <motion.div
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          className="relative z-10 flex max-h-[88vh] max-w-[min(92vw,1400px)] flex-col items-center"
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 12 }
          }
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.96, y: 12 }
          }
          key={currentImage}
          onClick={(event) => event.stopPropagation()}
          transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="max-h-[82vh] w-auto max-w-full select-none object-contain shadow-2xl shadow-black/40"
            draggable={false}
            src={currentImage}
          />

          {hasMultiple && (
            <p className="mt-4 font-[family-name:var(--font-cormorant)] text-sm uppercase tracking-[0.35em] text-white/55">
              {String(index + 1).padStart(2, "0")}{" "}
              <span className="text-misr-gold/70">/</span>{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          )}
        </motion.div>
    </motion.div>,
    document.body,
  );
}
