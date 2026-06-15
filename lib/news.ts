export type NewsCategory = "news" | "certification" | "award";

export type NewsItem = {
  id: string;
  category: NewsCategory;
  date: string; // e.g. "2025-03"
  title: string;
  excerpt: string;
  body: string;
  badge?: string; // e.g. "ISO 9001:2015"
  highlight?: boolean; // show as featured card
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "iso-9001-2015",
    
    category: "certification",
    
    date: "2024-11",
    title: "MisrConsult Awarded ISO 9001:2015 Certification",
    excerpt:
      "Our quality management system has been independently verified and certified to the international ISO 9001:2015 standard, reinforcing our commitment to engineering excellence.",
    body: "MisrConsult has successfully obtained the ISO 9001:2015 certification, the internationally recognised standard for Quality Management Systems. This certification reflects our continuous commitment to delivering engineering and architectural services of the highest standard, maintaining rigorous process controls, and ensuring client satisfaction across every project we undertake.",
    badge: "ISO 9001:2015",
    highlight: true,
  },
  {
    id: "syndicate-house    -of-expertise",
    category: "certification",
    date: "2025-07",
    title: "Accredited as a House of Expertise by the Egyptian Engineers Syndicate",
    excerpt:
      "MisrConsult has been officially recognised by the Egyptian Engineers Syndicate as a certified House of Expertise, a distinction held by only a select number of firms in Egypt.",
    body: "The Egyptian Engineers Syndicate has granted MisrConsult the status of House of Expertise (بيت خبرة), an accreditation that acknowledges firms with exceptional depth of technical knowledge, multi-disciplinary engineering capability, and a proven track record on complex projects. This recognition places MisrConsult among a very small group of elite consultancies in Egypt.",
    badge: "Engineers Syndicate",
    highlight: true,
    image: "/projects/97-hills/02.png",
  },
  {
    id: "palm-hills-contract-2025",
    category: "news",
    date: "2025-02",
    title: "MisrConsult Signs New Agreement with Palm Hills Developments",
    excerpt:
      "We are pleased to announce a new engineering consultancy contract with Palm Hills Developments for a landmark residential project in West Cairo.",
    body: "MisrConsult has signed a structural and architectural consultancy contract with Palm Hills Developments for a major new residential compound in West Cairo. The project will encompass structural design, infrastructure planning, and construction supervision — continuing our long-standing partnership with one of Egypt's leading real estate developers.",
    highlight: false,
  },
  {
    id: "emaar-misr-expansion-2025",
    category: "news",
    date: "2025-01",
    title: "Expanded Scope of Work with Emaar Misr on Uptown Cairo",
    excerpt:
      "MisrConsult has been appointed for additional engineering services on the Uptown Cairo development, expanding our existing collaboration with Emaar Misr.",
    body: "Following the successful completion of multiple phases, Emaar Misr has appointed MisrConsult to provide extended structural engineering and MEP coordination services for further phases of the Uptown Cairo masterplan. This expanded scope reflects the trust placed in our team and our track record of delivery on this prestigious project.",
    highlight: false,
  },
  {
    id: "ora-new-giza-2024",
    category: "news",
    date: "2024-12",
    title: "New Engineering Contract Signed with ORA Developers",
    excerpt:
      "MisrConsult has been engaged by ORA Developers to provide structural consultancy services for a new phase at their flagship development.",
    body: "MisrConsult has entered into a structural engineering consultancy agreement with ORA Developers for a new residential phase at one of their flagship communities. The project will leverage MisrConsult's expertise in complex reinforced concrete and steel structures to meet the development's ambitious design aspirations.",
    highlight: false,
  },
  {
    id: "FCIC Certificate",
    category: "certification",
    date: "2024-06",
    title: "Membership Certificate",
    excerpt:
      "MisrConsult has received certification for its Environmental Management System, reflecting our firm's sustainability commitments on all engineering projects.",
    body: "In line with our commitment to responsible engineering practice, MisrConsult has obtained Environmental Management System certification. This demonstrates that our operational processes and project delivery methods adhere to internationally recognised environmental standards, minimising our ecological footprint and embedding sustainability into our engineering practice.",
    badge: "FCIC Certificate",
    highlight: false,
  },
];

/** Latest N items for homepage preview */
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
  certification: "Certifications",
  award: "Awards",
};

export const categoryColors: Record<NewsCategory, string> = {
  news: "text-misr-400 border-misr-400/30 bg-misr-400/10",
  certification: "text-misr-gold border-misr-gold/30 bg-misr-gold/10",
  award: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};