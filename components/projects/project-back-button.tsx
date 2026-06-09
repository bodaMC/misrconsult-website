import Link from "next/link";

type ProjectBackButtonProps = {
  href?: string;
  label?: string;
};

export function ProjectBackButton({
  href = "/projects",
  label = "All Categories",
}: ProjectBackButtonProps) {
  return (
    <Link
      href={href}
      className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
    >
      <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
        ←
      </span>
      {label}
    </Link>
  );
}
