"use client";

import { AnimatePresence } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { GalleryLightbox } from "./lightbox";
import {
  collectGalleryImages,
  extractBackgroundImageUrl,
  findGalleryItem,
  findVisualDocumentationSection,
  getGalleryImageElement,
  getGalleryItemIndex,
  isVisualDocumentationSection,
} from "./utils";

type LightboxState = {
  images: string[];
  index: number;
};

type ProjectGalleryLightboxProviderProps = {
  children: ReactNode;
};

function markGalleryItems(container: HTMLElement) {
  container.querySelectorAll("section").forEach((section) => {
    if (!(section instanceof HTMLElement) || !isVisualDocumentationSection(section)) {
      return;
    }

    section.querySelectorAll(".group").forEach((group) => {
      if (!(group instanceof HTMLElement) || !getGalleryImageElement(group)) {
        return;
      }

      group.classList.add("cursor-pointer");
      group.setAttribute("role", "button");
      group.setAttribute("tabindex", "0");
      group.setAttribute("aria-label", "Open image in gallery viewer");
    });
  });
}

export function ProjectGalleryLightboxProvider({
  children,
}: ProjectGalleryLightboxProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    markGalleryItems(container);

    const observer = new MutationObserver(() => {
      markGalleryItems(container);
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = useCallback((images: string[], index: number) => {
    if (images.length === 0 || index < 0) return;
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setLightbox((current) => (current ? { ...current, index } : current));
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const galleryItem = findGalleryItem(target);
      if (!galleryItem) return;

      const section = findVisualDocumentationSection(galleryItem);
      if (!section) return;

      const imageElement = getGalleryImageElement(galleryItem);
      if (!imageElement) return;

      const clickedUrl = extractBackgroundImageUrl(imageElement);
      if (!clickedUrl) return;

      const images = collectGalleryImages(section);
      const index = getGalleryItemIndex(section, galleryItem);

      if (images.length === 0 || index < 0) return;

      event.preventDefault();
      openLightbox(images, index);
    },
    [openLightbox],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const galleryItem = findGalleryItem(target);
      if (!galleryItem || target !== galleryItem) return;

      const section = findVisualDocumentationSection(galleryItem);
      if (!section) return;

      const images = collectGalleryImages(section);
      const index = getGalleryItemIndex(section, galleryItem);

      if (images.length === 0 || index < 0) return;

      event.preventDefault();
      openLightbox(images, index);
    },
    [openLightbox],
  );

  return (
    <div ref={containerRef} onClick={handleClick} onKeyDown={handleKeyDown}>
      {children}
      <AnimatePresence>
        {lightbox && (
          <GalleryLightbox
            images={lightbox.images}
            index={lightbox.index}
            key="project-gallery-lightbox"
            onClose={closeLightbox}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
