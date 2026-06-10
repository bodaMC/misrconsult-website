import type { Client } from "@/lib/clients";

type ClientCardProps = {
  client: Client;
  variant?: "showcase" | "grid";
};

const showcaseListClass =
  "w-[10.5rem] flex-shrink-0 sm:w-[11.75rem] lg:w-[13.875rem]";

export function ClientCard({ client, variant = "showcase" }: ClientCardProps) {
  return (
    <li className={variant === "grid" ? "min-w-0 w-full" : showcaseListClass}>
      <div className={`group relative flex h-28 items-center justify-center border border-white/10 px-6 py-8 backdrop-blur-sm transition-all duration-500 sm:h-32 lg:h-36 ${
  variant === "grid"
    ? "bg-white hover:shadow-lg"
    : "bg-white/[0.03] hover:bg-white hover:shadow-lg hover:shadow-misr-gold/50"
}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-misr-gold/0 to-transparent transition-all duration-500 group-hover:via-misr-gold/50" />
        <img
          src={client.logo}
          alt={client.name}
          width={160}
          height={48}
          loading="lazy"
          draggable={false}
          className={`h-10 w-auto ${client.size ?? "max-w-[140px]"} object-contain transition-all duration-500 ease-out group-hover:scale-125 sm:h-31 lg:h-30 ${
  variant === "grid"
    ? "opacity-100"
    : "opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0"
}`}
        />
      </div>
    </li>
  );
}
