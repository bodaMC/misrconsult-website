type ClientLogoBadgeProps = {
  src: string;
  alt: string;
  variant?: "hero" | "card";
  logoSize?: string;
};

const badgeStyles = {
  hero: {
    container:
      "animate-fade-up animation-delay-200 rounded-xl border border-white/15 bg-white/10 p-3 shadow-lg shadow-black/25 backdrop-blur-md sm:p-4",
    defaultLogoSize: "max-w-[120px]",
  },
  card: {
    container:
      "rounded-xl border border-white/15 bg-white/10 p-1.5 shadow-md shadow-black/20 backdrop-blur-md sm:p-2",
    defaultLogoSize: "max-w-[80px] sm:max-w-[96px]",
  },
} as const;

export function ClientLogoBadge({
  src,
  alt,
  variant = "hero",
  logoSize,
}: ClientLogoBadgeProps) {
  const styles = badgeStyles[variant];
  const imageClassName = `h-auto w-full object-contain ${logoSize ?? styles.defaultLogoSize}`;

  return (
    <div aria-label={alt} className={styles.container} role="img">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt}
        className={imageClassName}
        draggable={false}
        src={src}
      />
    </div>
  );
}
