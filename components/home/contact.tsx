"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContactDetails } from "./contact-details";

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6757843857513!2d31.25502755000268!3d29.96000301061573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847f42da4a78f%3A0x80e6fd17b7bdfbdf!2sMisrConsult%20(Egypt.%20Co.%20For%20Eng.%20Consulting%20Services)!5e0!3m2!1sen!2seg!4v1784201488949!5m2!1sen!2seg%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22strict-origin-when-cross-origin%22%3E%3C/iframe%3E";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.6"],
  });

  const enterOpacity = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const enterY = useTransform(scrollYProgress, [0, 1], [36, 0], { clamp: true });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-misr-cream py-24 lg:py-32"
    >
      <div className="gradient-radial-green absolute inset-0" />

      <motion.div
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
        style={reducedMotion ? undefined : { opacity: enterOpacity, y: enterY }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Get in Touch
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl lg:text-6xl">
              Let&apos;s Build
              <br />
              <span className="font-semibold text-misr-700">Something Great Together</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
            <p className="mt-8 max-w-md text-base leading-relaxed text-misr-800/75">
              Whether you&apos;re planning a landmark tower, infrastructure masterplan, or
              specialized engineering challenge — our team is ready to partner with you
              from day one.
            </p>

            <div className="mt-12 max-w-md">
              <ContactDetails locationLabel="Headquarters" />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600 mb-4">
              Our Location
            </span>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Misrconsult Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
