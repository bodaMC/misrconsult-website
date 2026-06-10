"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHomeSectionWhenReady } from "@/lib/section-navigation";

export function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    scrollToHomeSectionWhenReady(sectionId);
  }, [pathname]);

  return null;
}
