export type JobPosition = {
  id: string;
  title: string;
  image: string;
  description: string;
  responsibilities: string[];
};

export const jobPositions: JobPosition[] = [
  {
    id: "structural-engineer",
    title: "Structural Engineer",
    image: "/services/01.png",
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
    id: "architectural-designer",
    title: "Architectural Designer",
    image: "/services/02.png",
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
    id: "project-manager",
    title: "Project Manager",
    image: "/services/03.png",
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
    id: "mep-engineer",
    title: "MEP Engineer",
    image: "/services/04.png",
    description:
      "Design mechanical, electrical, and plumbing systems for landmark towers, hospitals, and large-scale developments.",
    responsibilities: [
      "Develop MEP layouts and coordination drawings",
      "Perform load calculations and system sizing",
      "Review vendor submissions and as-built documentation",
      "Support commissioning and handover activities",
    ],
  },
  {
    id: "site-engineer",
    title: "Site Engineer",
    image: "/services/05.png",
    description:
      "Supervise construction activities on site, ensuring work aligns with approved designs and quality standards.",
    responsibilities: [
      "Conduct daily site inspections and progress reporting",
      "Verify contractor compliance with drawings and specs",
      "Document RFIs, site instructions, and as-built records",
      "Coordinate with design teams on field adjustments",
    ],
  },
  {
    id: "bim-specialist",
    title: "BIM Specialist",
    image: "/services/06.png",
    description:
      "Build and maintain BIM models that support coordinated design, clash detection, and project documentation.",
    responsibilities: [
      "Develop and manage project BIM models",
      "Run coordination reviews across disciplines",
      "Support drawing extraction and model updates",
      "Assist teams with BIM standards and workflows",
    ],
  },
];
