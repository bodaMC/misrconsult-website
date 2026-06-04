"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function ProjectNav({ title }: { title: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-misr-950/90 py-3 shadow-lg shadow-misr-950/30 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold group-hover:bg-misr-gold/10">
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              ←
            </span>
          </span>
          <span className="hidden uppercase tracking-[0.2em] sm:inline">
            All Projects
          </span>
        </Link>

        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border border-misr-gold/40 bg-misr-900/80">
            <span className="font-[family-name:var(--font-cormorant)] text-base font-semibold text-misr-gold">
              M
            </span>
          </span>
          <span className="hidden font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white sm:inline">
            MisrConsult
          </span>
        </Link>

        <span className="max-w-[140px] truncate text-right text-xs uppercase tracking-[0.15em] text-white/50 sm:max-w-xs">
          {title}
        </span>
      </nav>
    </header>
  );
}
