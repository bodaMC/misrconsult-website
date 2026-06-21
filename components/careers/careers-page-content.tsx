"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactDetails } from "@/components/home/contact-details";
import { ContactForm } from "@/components/home/contact-form";
import { FadeIn } from "@/components/projects/fade-in";
import { PositionsGallery } from "./positions-gallery";

const CAREERS_IMAGE = "/careers/02.png";

export default function CareersPageContent() {
  const [selectedPosition, setSelectedPosition] = useState("");

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{ backgroundImage: `url('${CAREERS_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Join Our Team
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="font-semibold text-misr-400">Careers</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Explore open roles and apply to join MisrConsult&apos;s engineering team.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      <PositionsGallery onSelectPosition={setSelectedPosition} />

      <section
        className="relative bg-misr-cream py-24 lg:py-32"
        id="application-form"
      >
        <div className="gradient-radial-green absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Apply
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
                  Submit Your
                  <br />
                  <span className="font-semibold text-misr-700">Application</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-misr-gold" />
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <ContactForm
                defaultPosition={selectedPosition}
                variant="application"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Contact
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                  Get in{" "}
                  <span className="font-semibold text-misr-700">Touch</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-misr-gold" />
              </div>

              <ContactDetails />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
