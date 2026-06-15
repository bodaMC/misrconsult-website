"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/news";

function formatDate(ym: string) {
  const [year, month] = ym.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <div className="group relative overflow-hidden border border-misr-950/10 bg-misr-cream">
      {/* Left accent bar */}
      <div className="absolute inset-y-0 left-0 w-1 bg-misr-600 transition-all duration-500 group-hover:w-1.5" />

      <div className="p-8 lg:p-12">
        {/* Top meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="bg-misr-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Featured
          </span>
          <span className="border border-misr-600/30 bg-misr-600/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-misr-600">
            Company News
          </span>
          <span className="text-xs font-medium text-misr-950/40">
            {formatDate(item.date)}
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          {/* Left: icon + title */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center border border-misr-950/10 bg-white">
              <svg className="h-7 w-7 text-misr-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight text-misr-950 transition-colors duration-300 group-hover:text-misr-700 lg:text-4xl">
              {item.title}
            </h3>
          </div>

          {/* Right: body text */}
          <div className="mt-6 lg:col-span-3 lg:mt-0">
            <p className="text-base leading-relaxed text-misr-950/55">{item.excerpt}</p>
            <p className="mt-4 text-sm leading-relaxed text-misr-950/70">{item.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="group relative border border-misr-950/8 bg-misr-cream p-6 transition-all duration-300 hover:border-misr-600/30 hover:bg-white">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-misr-600/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-misr-600/70">
        {formatDate(item.date)}
      </div>
      <h3 className="mb-2 font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-snug text-misr-950 transition-colors duration-300 group-hover:text-misr-700">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-misr-950/55">{item.excerpt}</p>
    </div>
  );
}

export function NewsGrid({ items }: { items: NewsItem[] }) {
  const [showAll, setShowAll] = useState(false);

  if (items.length === 0) return null;

  const [featured, ...rest] = items;
  const PREVIEW_COUNT = 2;
  const visibleRest = showAll ? rest : rest.slice(0, PREVIEW_COUNT);
  const hasMore = rest.length > PREVIEW_COUNT;

  return (
    <div className="flex flex-col gap-6">
      {/* Featured card */}
      <FeaturedCard item={featured} />

      {/* Rest of news */}
      {visibleRest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRest.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Show More / Show Less */}
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group inline-flex items-center gap-3 border border-misr-950/20 bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-misr-950/60 transition-all duration-300 hover:border-misr-600 hover:text-misr-600"
          >
            {showAll ? "Show Less" : `Show More (${rest.length - PREVIEW_COUNT} more)`}
            <span className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}>
              ↓
            </span>
          </button>
        </div>
      )}
    </div>
  );
}