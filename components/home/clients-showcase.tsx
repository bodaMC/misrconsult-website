"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { clients } from "@/lib/clients";
import { ClientCard } from "@/components/home/client-card";

const TRACK_COPIES = 3;

export function ClientsShowcase() {
  const trackRef = useRef<HTMLUListElement>(null);
  const setWidthRef = useRef(0);
  const [setWidth, setSetWidth] = useState(0);
  const x = useMotionValue(0);
  const isDragging = useRef(false);

  const trackItems = Array.from({ length: TRACK_COPIES }, () => clients).flat();

  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || clients.length === 0) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const cardsPerSet = clients.length;
    if (cards.length < cardsPerSet * 2) return;

    let width = 0;
    for (let i = 0; i < cardsPerSet; i++) {
      width += cards[i].offsetWidth;
    }

    const style = getComputedStyle(track);
    const gap = Number.parseFloat(style.columnGap || style.gap || "0") || 0;
    width += gap * (cardsPerSet - 1);

    if (width > 0 && width !== setWidthRef.current) {
      setWidthRef.current = width;
      setSetWidth(width);
      if (!isDragging.current) {
        x.set(-width);
      }
    }
  }, [x]);

  useEffect(() => {
    measureSetWidth();
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(() => measureSetWidth());
    observer.observe(track);
    window.addEventListener("resize", measureSetWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureSetWidth);
    };
  }, [measureSetWidth]);

  const wrapOffset = useCallback((value: number) => {
    const width = setWidthRef.current;
    if (width <= 0) return value;

    let wrapped = value;
    while (wrapped <= -width * 2) wrapped += width;
    while (wrapped > 0) wrapped -= width;
    return wrapped;
  }, []);

  useMotionValueEvent(x, "change", (latest) => {
    const width = setWidthRef.current;
    if (width <= 0) return;

    if (latest <= -width * 2 || latest > 0) {
      x.set(wrapOffset(latest));
    }
  });

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      className={`relative mt-16 w-full select-none transition-opacity duration-500 ${setWidth > 0 ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-misr-950 via-misr-950/90 to-transparent sm:w-24 lg:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-misr-950 via-misr-950/90 to-transparent sm:w-24 lg:w-32"
        aria-hidden
      />

      <div className="overflow-hidden">
        <motion.ul
          ref={trackRef}
          role="list"
          aria-label="Client logos — drag horizontally to explore"
          drag="x"
          dragElastic={0.06}
          dragMomentum
          dragTransition={{
            power: 0.35,
            timeConstant: 280,
            bounceStiffness: 120,
            bounceDamping: 18,
          }}
          style={{ x }}
          onDragStart={() => {
            isDragging.current = true;
          }}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
          className="flex cursor-grab touch-none gap-6 px-6 active:cursor-grabbing lg:gap-8 lg:px-8"
        >
          {trackItems.map((client, index) => (
            <ClientCard key={`${client.name}-${index}`} client={client} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
