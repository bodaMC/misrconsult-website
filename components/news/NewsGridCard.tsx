import Link from "next/link";
import Image from "next/image";
import {
  categoryLabels,
  formatDate,
  type NewsItem,
} from "@/lib/news";

interface Props {
  item: NewsItem;
  className?: string;
}

export default function NewsGridCard({ item, className = "" }: Props) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className={`group relative block overflow-hidden ${className}`}
      aria-label={`Read: ${item.title}`}
    >
      <article className="h-full">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[280px] lg:h-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-misr-950/30 transition-colors duration-500 group-hover:bg-misr-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-misr-950/90 via-misr-950/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-misr-gold">
              {categoryLabels[item.category]} · {formatDate(item.date)}
            </span>
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-snug text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-2xl lg:text-3xl">
              {item.title}
            </h3>
            <div className="mt-4 flex h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-6 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Read Article
              </span>
              <span className="text-misr-gold">→</span>
            </div>
          </div>

          <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
        </div>
      </article>
    </Link>
  );
}
