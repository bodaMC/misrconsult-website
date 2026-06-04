"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Impact", href: "/#stats" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-misr-950/90 py-6 shadow-lg shadow-misr-950/30 backdrop-blur-xl"
          : "bg-transparent py-9"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
<img
 src="/clients/misrconsult.png"
  alt="Misr Consult Logo"
  className="h-16 w-auto object-contain"
/>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-wide text-white">
              MisrConsult
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
              House of expertise
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-white/75 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-misr-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden border border-misr-gold/60 bg-misr-gold/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold transition-all duration-300 hover:border-misr-gold hover:bg-misr-gold hover:text-misr-950 lg:inline-block"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[72px] bg-misr-950/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-4 font-[family-name:var(--font-cormorant)] text-2xl text-white/90 transition-colors hover:text-misr-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full border border-misr-gold bg-misr-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-misr-950"
            >
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
