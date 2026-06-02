/**
 * Experience timeline + skills shown in the About section.
 * ⚠️ DRAFT: replace company names, titles, dates, and bullets with your real
 * history. Keep bullets outcome-oriented (what changed because of you).
 */

export type Role = {
  company: string;
  title: string;
  period: string;
  /** Industry/context label — keep or anonymize as you prefer. */
  context: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "[Travel-tech scale-up]",
    title: "Product Manager",
    period: "2023 — 2025",
    context: "Travel-tech · B2C",
    highlights: [
      "Owned the booking experience for a high-traffic product, running discovery and experimentation end to end.",
      "Shipped a funnel redesign that lifted completion by ~18% without discounting.",
      "Introduced lightweight automations that cut repetitive ops work for the support team.",
    ],
  },
  {
    company: "[Employee-engagement scale-up]",
    title: "Product Manager",
    period: "2022 — 2023",
    context: "HR-tech · B2B SaaS",
    highlights: [
      "Automated the survey-to-action engagement loop, freeing ~20 ops hours a week.",
      "Cut time-to-insight for managers by 60% with smarter defaults and triggers.",
      "Partnered with design and data to raise manager adoption by 34%.",
    ],
  },
  {
    company: "PivotPilot",
    title: "Founder & Product Lead",
    period: "2025 — present",
    context: "AI · Personal project",
    highlights: [
      "Designing and building an AI copilot for career pivots — solo, 0→1.",
      "Owns the full stack of product decisions: problem, UX, LLM/RAG architecture, and go-to-market.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Product",
    items: [
      "Discovery & research",
      "Roadmapping",
      "Experimentation / A-B",
      "Metrics & analytics",
      "Stakeholder alignment",
    ],
  },
  {
    group: "AI & technical",
    items: ["LLM products", "RAG", "Prompt design", "Automation design", "Prototyping"],
  },
  {
    group: "Domains",
    items: ["Travel-tech", "Employee engagement", "B2B SaaS", "Marketplaces"],
  },
];
