"use client";

import Image from "next/image";
import { FadeIn } from "@/components/projects/fade-in";
import { ProjectBackButton } from "@/components/projects/project-back-button";
import {
  categoryBadgeClasses,
  categoryLabels,
  formatDate,
  getRelatedNews,
  type NewsItem,
} from "@/lib/news";
import NewsGridCard from "./NewsGridCard";
import { NewsNav } from "./news-nav";

interface Props {
  item: NewsItem;
}

function renderContent(raw: string) {
  const paragraphs = raw.trim().split("\n\n").filter(Boolean);

  return paragraphs.map((block, i) => {
    if (block.startsWith("## ")) {
      const heading = block.replace("## ", "").trim();
      return (
        <h2
          key={i}
          className="mt-10 mb-4 font-[family-name:var(--font-cormorant)] text-2xl font-light text-misr-950 md:text-3xl"
        >
          {heading}
        </h2>
      );
    }

    if (block.startsWith("- ")) {
      const items = block
        .split("\n")
        .filter((l) => l.startsWith("- "))
        .map((l) => l.replace("- ", "").trim());

      return (
        <ul key={i} className="my-4 flex flex-col gap-2">
          {items.map((li, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-misr-gold" />
              <span className="text-sm leading-relaxed text-misr-800/75 md:text-base">
                {li}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={i}
        className="text-sm leading-relaxed text-misr-800/75 md:text-base"
      >
        {block.trim()}
      </p>
    );
  });
}

export default function NewsDetailPage({ item }: Props) {
  const related = getRelatedNews(item);

  return (
    <>
      <NewsNav title={item.title} />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-slow-zoom">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <ProjectBackButton href="/news" label="All News" />

          <div className="animate-fade-up animation-delay-200 flex flex-wrap items-center gap-4">
            <span
              className={`border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${categoryBadgeClasses[item.category]}`}
            >
              {categoryLabels[item.category]}
            </span>
            {item.badge && (
              <>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-misr-gold">
                  {item.badge}
                </span>
              </>
            )}
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              {formatDate(item.date)}
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-400 mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {item.title}
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            {item.excerpt}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      {/* Article body */}
      <section className="relative overflow-hidden bg-misr-cream py-24 lg:py-32">
        <div className="gradient-radial-green absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
              Full Article
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
              Article <span className="font-semibold text-misr-700">Details</span>
            </h2>
            <div className="mt-6 h-px w-16 bg-misr-gold" />
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-20">
            <FadeIn delay={100} className="lg:col-span-2">
              <p className="font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-misr-950/80 md:text-2xl">
                {item.excerpt}
              </p>
            </FadeIn>
            <FadeIn delay={200} className="space-y-5 lg:col-span-3">
              {renderContent(item.content)}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {item.galleryImages && item.galleryImages.length > 0 && (
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="absolute inset-0 grid-architecture opacity-40" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                  Visual Documentation
                </span>
                <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 md:text-5xl">
                  Article{" "}
                  <span className="font-semibold text-misr-700">Gallery</span>
                </h2>
              </div>
            </FadeIn>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {item.galleryImages.map((src, i) => (
                <FadeIn key={src} delay={i * 80}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={src}
                      alt={`${item.title} — gallery image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-misr-950/0 transition-colors duration-500 group-hover:bg-misr-950/25" />
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-misr-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <section className="relative overflow-hidden bg-misr-950 py-24 lg:py-32">
          <div className="absolute inset-0 grid-architecture opacity-25" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                Continue Reading
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white md:text-5xl">
                Related <span className="font-semibold text-misr-400">Articles</span>
              </h2>
              <div className="mt-6 h-px w-16 bg-misr-gold" />
            </FadeIn>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <FadeIn key={r.id} delay={i * 100}>
                  <NewsGridCard item={r} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
