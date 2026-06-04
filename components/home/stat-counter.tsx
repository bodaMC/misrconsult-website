"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const sampleDerivativeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;

  return (t: number) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;

    let guess = t;
    for (let i = 0; i < 8; i++) {
      const x = sampleX(guess) - t;
      if (Math.abs(x) < 1e-6) break;
      const derivative = sampleDerivativeX(guess);
      if (Math.abs(derivative) < 1e-6) break;
      guess -= x / derivative;
    }

    return sampleY(guess);
  };
}

const easeOut = cubicBezier(0.22, 1, 0.36, 1);

export function StatCounter({ value, suffix, duration = 1800 }: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOut(progress);
      setDisplayValue(progress >= 1 ? value : Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, value, duration]);

  return (
    <p
      ref={ref}
      className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold tabular-nums text-white md:text-6xl"
    >
      {displayValue}
      {suffix && (
        <span className="text-4xl font-light text-misr-gold">{suffix}</span>
      )}
    </p>
  );
}
