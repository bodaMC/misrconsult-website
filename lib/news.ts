export type NewsCategory = "news" | "certification" | "award";

export type Certification = {
  id: string;
  title: string;
  issuingOrganization: string;
  year: string;
  description: string;
  imageUrl: string;
};

export type NewsItem = {
  id: string;
  slug: string;
  category: NewsCategory;
  date: string;
  title: string;
  excerpt: string;
  body: string;
  content: string;
  badge?: string;
  highlight?: boolean;
  imageUrl: string;
  galleryImages?: string[];
};

export const DEFAULT_NEWS_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop";

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    issuingOrganization: "International Organization for Standardization",
    year: "2024",
    description:
      "Quality Management System certification verifying our engineering processes, documentation standards, and client satisfaction protocols.",
    imageUrl: "/certificates/iso.jpeg",
  },
  {
    id: "syndicate-expertise",
    title: "House of Expertise",
    issuingOrganization: "Egyptian Engineers Syndicate",
    year: "2025",
    description:
      "Accredited as a certified House of Expertise — a distinction held by only a select number of engineering firms in Egypt.",
    imageUrl:"/certificates/engsyndicate.jpeg",
  },
  {
    id: "fcic-membership",
    title: "FCIC Membership Certificate",
    issuingOrganization: "Federation of Egyptian Industries",
    year: "2024",
    description:
      "Corporate membership recognising MisrConsult's standing within Egypt's industrial and engineering community.",
    imageUrl: "/certificates/fcic.jpeg" ,
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "syndicate-house-of-expertise",
    slug: "syndicate-house-of-expertise",
    category: "certification",
    date: "2025-07",
    title: "Accredited as a House of Expertise by the Egyptian Engineers Syndicate",
    excerpt:
      "MisrConsult has been officially recognised by the Egyptian Engineers Syndicate as a certified House of Expertise, a distinction held by only a select number of firms in Egypt.",
    body: "The Egyptian Engineers Syndicate has granted MisrConsult the status of House of Expertise (بيت خبرة), an accreditation that acknowledges firms with exceptional depth of technical knowledge, multi-disciplinary engineering capability, and a proven track record on complex projects.",
    content: `The Egyptian Engineers Syndicate has granted MisrConsult the status of House of Expertise (بيت خبرة), an accreditation that acknowledges firms with exceptional depth of technical knowledge, multi-disciplinary engineering capability, and a proven track record on complex projects.

## What This Means

This recognition places MisrConsult among a very small group of elite consultancies in Egypt — firms trusted to provide expert testimony, technical arbitration, and specialist engineering advisory on the nation's most complex developments.

## Our Commitment

We remain dedicated to upholding the highest standards of engineering integrity, technical rigour, and professional excellence that this accreditation represents.`,
    badge: "Engineers Syndicate",
    highlight: true,
    imageUrl: "/projects/97-hills/02.png",
  },
  {
    id: "palm-hills-contract-2025",
    slug: "palm-hills-contract-2025",
    category: "news",
    date: "2025-02",
    title: "MisrConsult Signs New Agreement with Palm Hills Developments",
    excerpt:
      "We are pleased to announce a new engineering consultancy contract with Palm Hills Developments for a landmark residential project in West Cairo.",
    body: "MisrConsult has signed a structural and architectural consultancy contract with Palm Hills Developments for a major new residential compound in West Cairo.",
    content: `MisrConsult has signed a structural and architectural consultancy contract with Palm Hills Developments for a major new residential compound in West Cairo. The project will encompass structural design, infrastructure planning, and construction supervision — continuing our long-standing partnership with one of Egypt's leading real estate developers.

## Scope of Engagement

- Full structural engineering design and analysis
- Architectural coordination and design review
- Infrastructure and utilities planning
- Construction supervision and quality assurance

This agreement reinforces the trust Palm Hills places in MisrConsult's engineering capabilities and our track record of delivery across their portfolio.`,
    imageUrl: "/projects/palm-hills-new-cairo/01.jpg",
    galleryImages: [
      "/projects/palm-hills-new-cairo/03.jpg",
      "/projects/palm-hills-new-cairo/05.jpg",
    ],
  },
  {
    id: "iso-9001-2015",
    slug: "iso-9001-2015",
    category: "certification",
    date: "2024-11",
    title: "MisrConsult Awarded ISO 9001:2015 Certification",
    excerpt:
      "Our quality management system has been independently verified and certified to the international ISO 9001:2015 standard, reinforcing our commitment to engineering excellence.",
    body: "MisrConsult has successfully obtained the ISO 9001:2015 certification, the internationally recognised standard for Quality Management Systems.",
    content: `MisrConsult has successfully obtained the ISO 9001:2015 certification, the internationally recognised standard for Quality Management Systems. This certification reflects our continuous commitment to delivering engineering and architectural services of the highest standard.

## Certification Scope

The certification covers our entire quality management framework — from project initiation and design development through to construction supervision and client handover.

## Key Benefits for Our Clients

- Rigorous process controls on every project
- Documented quality assurance procedures
- Continuous improvement culture
- Independent third-party verification of our standards`,
    badge: "ISO 9001:2015",
    highlight: true,
    imageUrl: "/certificates/iso9001.png",
  },
  {
    id: "emaar-misr-expansion-2025",
    slug: "emaar-misr-expansion-2025",
    category: "news",
    date: "2025-01",
    title: "Expanded Scope of Work with Emaar Misr on Uptown Cairo",
    excerpt:
      "MisrConsult has been appointed for additional engineering services on the Uptown Cairo development, expanding our existing collaboration with Emaar Misr.",
    body: "Following the successful completion of multiple phases, Emaar Misr has appointed MisrConsult to provide extended structural engineering and MEP coordination services.",
    content: `Following the successful completion of multiple phases, Emaar Misr has appointed MisrConsult to provide extended structural engineering and MEP coordination services for further phases of the Uptown Cairo masterplan.

This expanded scope reflects the trust placed in our team and our track record of delivery on this prestigious project — one of Cairo's most significant mixed-use developments.`,
    imageUrl: "/projects/97-hills/03.png",
  },
  {
    id: "ora-new-giza-2024",
    slug: "ora-new-giza-2024",
    category: "news",
    date: "2024-12",
    title: "New Engineering Contract Signed with ORA Developers",
    excerpt:
      "MisrConsult has been engaged by ORA Developers to provide structural consultancy services for a new phase at their flagship development.",
    body: "MisrConsult has entered into a structural engineering consultancy agreement with ORA Developers for a new residential phase at one of their flagship communities.",
    content: `MisrConsult has entered into a structural engineering consultancy agreement with ORA Developers for a new residential phase at one of their flagship communities. The project will leverage MisrConsult's expertise in complex reinforced concrete and steel structures to meet the development's ambitious design aspirations.`,
    imageUrl: "/projects/ora-silversands/01.jpg",
  },
  {
    id: "fcic-certificate",
    slug: "fcic-certificate",
    category: "certification",
    date: "2024-06",
    title: "FCIC Membership Certificate Awarded",
    excerpt:
      "MisrConsult has received corporate membership certification from the Federation of Egyptian Industries, reflecting our firm's standing in the engineering sector.",
    body: "MisrConsult has obtained corporate membership certification from the Federation of Egyptian Industries (FCIC).",
    content: `MisrConsult has obtained corporate membership certification from the Federation of Egyptian Industries (FCIC), recognising our firm's contribution to Egypt's industrial and engineering landscape.

This membership underscores our commitment to responsible engineering practice and active participation in the professional community that shapes Egypt's built environment.`,
    badge: "FCIC Certificate",
    imageUrl: "/projects/phd-r4/01.png",
  },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatDate(ym: string): string {
  const [year, month] = ym.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function getNewsItemBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getRelatedNews(item: NewsItem, count = 3): NewsItem[] {
  return [...newsItems]
    .filter((n) => n.slug !== item.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getLatestNews(count = 3): NewsItem[] {
  return [...newsItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getHighlightedNews(): NewsItem[] {
  return newsItems.filter((n) => n.highlight);
}

export const categoryLabels: Record<NewsCategory, string> = {
  news: "Company News",
  certification: "Certification",
  award: "Award",
};

export const categoryBadgeClasses: Record<NewsCategory, string> = {
  news: "border-misr-400/30 bg-misr-400/10 text-misr-400",
  certification: "border-misr-gold/30 bg-misr-gold/10 text-misr-gold",
  award: "border-misr-gold/30 bg-misr-gold/10 text-misr-gold",
};
