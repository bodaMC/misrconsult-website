import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";
import { NewsGrid } from "@/components/news/news-grid";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Insights | MisrConsult",
  description:
    "Latest news, certifications, and insights from MisrConsult — Egypt's premier engineering house of expertise.",
};

export default function NewsPage() {
  const certifications = newsItems.filter((n) => n.category === "certification");
  const companyNews = newsItems.filter((n) => n.category === "news");

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
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
            News &amp; <span className="font-semibold text-misr-400">Insights</span>
          </h1>
          <p className="animate-fade-up animation-delay-600 mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Company announcements, new partnerships, and the accreditations that
            define our commitment to engineering excellence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
      </section>

      {/* ── Certifications & Accreditations ── */}
      <section className="relative overflow-hidden bg-misr-950 py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-15" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-gold">
                Accreditations
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-light text-white lg:text-5xl">
                Certifications &amp; <span className="font-semibold text-misr-400">Standards</span>
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-white/45 lg:block">
              Independently verified accreditations that underpin the quality and
              integrity of everything we deliver.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <div
                key={item.id}
                className="group relative border border-white/8 bg-white/3 p-8 transition-all duration-500 hover:border-misr-gold/30 hover:bg-white/5"
              >
                {/* Gold accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-misr-gold/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-6 flex items-start justify-between gap-4">
                  {/* Shield / cert icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-misr-gold/30 bg-misr-gold/10">
                    <svg
                      className="h-5 w-5 text-misr-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>

                  {item.badge && (
                    <span className="border border-misr-gold/30 bg-misr-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-misr-gold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                  {formatDate(item.date)}
                </p>
                <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold leading-snug text-white group-hover:text-misr-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company News ── */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-architecture opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between gap-6 border-b border-misr-950/10 pb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-misr-600">
                Latest Updates
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-light text-misr-950 lg:text-5xl">
                Company <span className="font-semibold text-misr-600">News</span>
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-misr-950/45 lg:block">
              Announcements on new contracts, partnerships, and milestones as
              MisrConsult continues to grow.
            </p>
          </div>

          <NewsGrid items={companyNews} />
        </div>
      </section>

      <Footer />
    </>
  );
}

function formatDate(ym: string) {
  const [year, month] = ym.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}
