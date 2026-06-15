"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/projects/fade-in";
import { certifications, newsItems } from "@/lib/news";
import CertificationCard from "./CertificationCard";
import FeaturedNewsCard from "./FeaturedNewsCard";
import NewsGridCard from "./NewsGridCard";
import SectionHeader from "./SectionHeader";

const FEATURED_COUNT = 3;

const sortedNews = [...newsItems].sort((a, b) =>
  b.date.localeCompare(a.date),
);
const featured = sortedNews.slice(0, FEATURED_COUNT);
const remaining = sortedNews.slice(FEATURED_COUNT);

export default function NewsPageContent() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-misr-950">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-misr-950/60 via-misr-950/50 to-misr-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-misr-950/90 via-misr-950/50 to-transparent" />
          <div className="gradient-radial-green absolute inset-0" />
        </div>
        <div className="absolute inset-0 grid-architecture opacity-30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <Link
            href="/"
            className="animate-fade-up group mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-misr-gold"
          >
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-misr-gold">
              ←
            </span>
            Back to Home
          </Link>

          <span className="animate-fade-up animation-delay-200 text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
            Latest Updates
          </span>
          <h1 className="animate-fade-up animation-delay-400 mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            News &amp;{" "}
            <span className="font-semibold text-misr-400">Insights</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Project milestones, technical advances, certifications, and
            perspectives from Egypt&apos;s house of engineering expertise.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

    

      {/* Featured News */}
      <section className="relative overflow-hidden bg-misr-900 py-24 lg:py-15">
        <div className="absolute inset-0 grid-architecture opacity-20" />
        <div className="relative mx-auto max-w-6xl px-8 lg:px-8">
          <SectionHeader
            eyebrow="Latest"
            title={
              <>
                Featured <span className="font-semibold text-misr-400">News</span>
              </>
            }
            subtitle="Our most recent project awards, updates, and announcements."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((item, index) => (
              <FeaturedNewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Load More Grid */}
      {remaining.length > 0 && (
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className="absolute inset-0 grid-architecture opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {!showAll && (
              <FadeIn>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="group inline-flex items-center gap-3 border border-misr-950/20 bg-transparent px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-misr-950/60 transition-all duration-300 hover:border-misr-600 hover:text-misr-600"
                  >
                    Load More Articles
                    <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </button>
                </div>
              </FadeIn>
            )}

            {showAll && (
              <>
                <FadeIn>
                  <div className="mb-14 flex items-end justify-between gap-6 border-b border-misr-950/10 pb-8">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                        Archive
                      </span>
                      <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 lg:text-5xl">
                        More{" "}
                        <span className="font-semibold text-misr-600">
                          Articles
                        </span>
                      </h2>
                      <div className="mt-6 h-px w-16 bg-misr-gold" />
                    </div>
                  </div>
                </FadeIn>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {remaining.map((item, i) => (
                    <FadeIn key={item.id} delay={i * 80}>
                      <NewsGridCard item={item} />
                    </FadeIn>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
