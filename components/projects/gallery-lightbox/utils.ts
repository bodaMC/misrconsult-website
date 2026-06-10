const BACKGROUND_URL_PATTERN = /url\(['"]?([^'")]+)['"]?\)/;

export function extractBackgroundImageUrl(element: HTMLElement): string | null {
  const inline = element.style.backgroundImage;
  if (inline && inline !== "none") {
    const match = inline.match(BACKGROUND_URL_PATTERN);
    if (match?.[1]) return match[1];
  }

  const computed = getComputedStyle(element).backgroundImage;
  if (computed && computed !== "none") {
    const match = computed.match(BACKGROUND_URL_PATTERN);
    if (match?.[1]) return match[1];
  }

  return null;
}

export function isVisualDocumentationSection(section: HTMLElement): boolean {
  return Array.from(section.querySelectorAll("span")).some(
    (span) => span.textContent?.trim() === "Visual Documentation",
  );
}

export function getGalleryImageElement(group: HTMLElement): HTMLElement | null {
  return group.querySelector('[class*="group-hover:scale-105"]');
}

export function collectGalleryImages(section: HTMLElement): string[] {
  const urls: string[] = [];

  section.querySelectorAll(".group").forEach((group) => {
    if (!(group instanceof HTMLElement)) return;

    const imageElement = getGalleryImageElement(group);
    if (!imageElement) return;

    const url = extractBackgroundImageUrl(imageElement);
    if (url) urls.push(url);
  });

  return urls;
}

export function findGalleryItem(element: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = element;

  while (current) {
    if (current.classList.contains("group") && getGalleryImageElement(current)) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

export function findVisualDocumentationSection(element: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = element;

  while (current) {
    if (current.tagName === "SECTION" && isVisualDocumentationSection(current)) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

export function getGalleryItemIndex(section: HTMLElement, item: HTMLElement): number {
  const items = Array.from(section.querySelectorAll(".group")).filter(
    (group): group is HTMLElement =>
      group instanceof HTMLElement && Boolean(getGalleryImageElement(group)),
  );

  return items.indexOf(item);
}
