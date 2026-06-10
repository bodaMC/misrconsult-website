export function getHomeSectionId(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) return null;

  const sectionId = href.slice(hashIndex + 1);
  return sectionId || null;
}

export function scrollToHomeSection(
  sectionId: string,
  options?: { updateHash?: boolean },
): boolean {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  element.scrollIntoView({ behavior: "smooth", block: "start" });

  if (options?.updateHash !== false) {
    window.history.replaceState(null, "", `/#${sectionId}`);
  }

  return true;
}

export function scrollToHomeSectionWhenReady(sectionId: string, attempts = 0): void {
  if (scrollToHomeSection(sectionId, { updateHash: false })) {
    return;
  }

  if (attempts < 20) {
    requestAnimationFrame(() => scrollToHomeSectionWhenReady(sectionId, attempts + 1));
  }
}
