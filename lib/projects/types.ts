export type ProjectStat = {
  value: string;
  label: string;
  suffix?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  heroImage: string;
  heroVideo?: string;
  span: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  gallery: string[];
  stats: ProjectStat[];
};

export type FeaturedProject = Pick<
  Project,
  "slug" | "title" | "category" | "location" | "heroImage" | "span"
>;
