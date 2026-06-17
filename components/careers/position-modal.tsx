"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { JobPosition } from "@/lib/careers";

type PositionModalProps = {
  position: JobPosition;
  onClose: () => void;
  onApply: () => void;
};

export function PositionModal({ position, onClose, onApply }: PositionModalProps) {
  const prefersReducedMotion = useReducedMotion();

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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <motion.div
      animate={{ opacity: 1 }}
      aria-labelledby="position-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-end justify-center bg-misr-950/80 p-4 backdrop-blur-sm sm:items-center sm:p-8"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-white/10 bg-white shadow-2xl shadow-black/30"
        exit={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 0.98, y: 16 }
        }
        initial={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 0.98, y: 16 }
        }
        onClick={(event) => event.stopPropagation()}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -right-1 -top-1 h-12 w-12 border-r-2 border-t-2 border-misr-gold/40" />
        <div className="absolute -bottom-1 -left-1 h-12 w-12 border-b-2 border-l-2 border-misr-gold/40" />

        <button
          aria-label="Close position details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-misr-950/10 text-misr-950/50 transition-colors duration-300 hover:border-misr-600 hover:text-misr-600"
          onClick={onClose}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative aspect-[16/9] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${position.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-misr-950/80 via-misr-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white sm:text-4xl"
              id="position-modal-title"
            >
              {position.title}
            </h2>
          </div>
          <div className="absolute left-0 top-0 h-1 w-full bg-misr-gold" />
        </div>

        <div className="p-8 lg:p-10">
          <p className="text-base leading-relaxed text-misr-800/80">
            {position.description}
          </p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-600">
              Key Responsibilities
            </p>
            <ul className="mt-4 space-y-3">
              {position.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-misr-800/75"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-misr-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="group mt-10 w-full bg-misr-800 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-misr-600"
            onClick={onApply}
            type="button"
          >
            <span className="inline-flex items-center justify-center gap-3">
              Apply for This Role
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
