export type JobPosition = {
  id: string;
  title: string;
  image: string;
  description: string;
  responsibilities: string[];
};

export const jobPositions: JobPosition[] = [
  {
    id: "steel-structural-design-engineer",
    title: "Steel Structural design Engineer",
    image: "/hiring/01.png",
    description:
      "Design and analyze structural systems for high-rise, commercial, and infrastructure projects across Egypt and the Gulf region.",
    responsibilities: [
      "Prepare structural calculations and detailed drawings",
      "Coordinate with architectural and MEP disciplines",
      "Review shop drawings and support site supervision",
      "Ensure compliance with local and international codes",
    ],
  },
  {
    id: "audi-video-designer",
    title: "Audio & Video Design Engineer",
    image: "/hiring/02.png",
    description:
      "Develop concept and detailed architectural designs for residential, hospitality, and mixed-use developments.",
    responsibilities: [
      "Produce design presentations and working drawings",
      "Collaborate with engineering teams on buildability",
      "Support client meetings and design revisions",
      "Maintain design quality from concept through documentation",
    ],
  },
  {
    id: "acoustic-engineer",
    title: "Acoustic Specialist Engineer",
    image: "/hiring/03.png",
    description:
      "Lead multidisciplinary teams through planning, design, and construction phases of complex engineering assignments.",
    responsibilities: [
      "Manage project schedules, budgets, and deliverables",
      "Coordinate consultants, contractors, and client stakeholders",
      "Monitor progress and resolve technical issues on site",
      "Report project status and maintain documentation",
    ],
  },
  {
    id: "traffic-engineer",
    title: "Traffic Engineer",
    image: "/hiring/04.png",
    description:
      "Design mechanical, electrical, and plumbing systems for landmark towers, hospitals, and large-scale developments.",
    responsibilities: [
      "Develop MEP layouts and coordination drawings",
      "Perform load calculations and system sizing",
      "Review vendor submissions and as-built documentation",
      "Support commissioning and handover activities",
    ],
  },

];
