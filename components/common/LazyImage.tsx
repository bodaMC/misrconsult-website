"use client";

import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  className?: string;
};

export default function LazyImage({
  src,
  className,
}: LazyImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "200px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={visible ? src : undefined}
      loading="lazy"
      decoding="async"
      alt=""
      className={className}
    />
  );
}