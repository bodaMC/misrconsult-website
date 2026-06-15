import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/projects/fade-in";
import {
  categoryBadgeClasses,
  categoryLabels,
  formatDate,
  type NewsItem,
} from "@/lib/news";

interface Props {
  item: NewsItem;
  index: number;
}

export default function FeaturedNewsCard({ item, index }: Props) {
  return (
    <FadeIn delay={index * 100}>
      <Link
        href={`/news/${item.slug}`}
        className="group block h-full"
        aria-label={`Read: ${item.title}`}
      >
        <article className="flex h-full flex-col overflow-hidden border border-white/10 bg-misr-900/30 transition-all duration-500 hover:border-misr-gold/30 hover:bg-misr-800/40">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute left-0 top-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="flex flex-1 flex-col p-6 lg:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${categoryBadgeClasses[item.category]}`}
              >
                {categoryLabels[item.category]}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {formatDate(item.date)}
              </span>
            </div>

            <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-snug text-white transition-transform duration-300 group-hover:-translate-y-0.5 lg:text-2xl">
              {item.title}
            </h3>

            <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-white/55">
              {item.excerpt}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span>Read Article</span>
              <span className="text-misr-gold transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
