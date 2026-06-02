/**
 * Project / case-study metadata.
 * ─────────────────────────────────────────────────────────────────────────
 * This drives the "Selected work" cards and each case-study page header.
 * The long-form body for each lives in content/case-studies/<slug>.mdx.
 *
 * ⚠️ DRAFT CONTENT: titles, metrics, and descriptions below are realistic
 * placeholders based on your background. Replace with your real numbers and
 * details. `anonymized: true` entries are illustrative interview case studies.
 */

export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  /** Short blurb shown on the landing-page card. */
  summary: string;
  tags: string[];
  metrics: Metric[];
  featured?: boolean;
  anonymized?: boolean;
  /** Optional outbound link (live product, waitlist, etc.). */
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "pivotpilot",
    title: "PivotPilot",
    tagline: "An AI copilot for navigating career pivots with confidence.",
    role: "Founder & Product Lead",
    period: "2025 — present",
    summary:
      "A personal AI project: a copilot that helps people map a career pivot — surfacing transferable skills, generating tailored learning paths, and turning vague ambition into a concrete weekly plan.",
    tags: ["AI / LLM", "0→1 Product", "RAG", "UX"],
    metrics: [
      { label: "Time to a first plan", value: "< 5 min" },
      { label: "Early waitlist", value: "150+" },
      { label: "Built solo in", value: "6 weeks" },
    ],
    featured: true,
  },
  {
    slug: "engagement-automation",
    title: "Automating the engagement loop",
    tagline:
      "Cutting manual ops out of an employee-engagement platform with smart automations.",
    role: "Product Manager",
    period: "Employee-engagement scale-up",
    summary:
      "Replaced a fragile, manual survey-and-action workflow with an automated engagement loop — freeing the ops team and getting insights to managers far faster.",
    tags: ["Automation", "B2B SaaS", "Workflow", "Ops efficiency"],
    metrics: [
      { label: "Manual hours saved / wk", value: "~20" },
      { label: "Time-to-insight", value: "−60%" },
      { label: "Manager adoption", value: "+34%" },
    ],
  },
  {
    slug: "travel-booking-ux",
    title: "Rethinking the booking flow",
    tagline: "A UX overhaul of a high-traffic travel-tech booking funnel.",
    role: "Product Manager",
    period: "Travel-tech scale-up",
    summary:
      "Led a research-driven redesign of a multi-step booking funnel, removing friction at the highest-drop-off steps and lifting completion without discounting.",
    tags: ["UX", "Conversion", "Travel-tech", "Experimentation"],
    metrics: [
      { label: "Funnel completion", value: "+18%" },
      { label: "Support tickets", value: "−25%" },
      { label: "Steps removed", value: "3 → 2" },
    ],
  },
  {
    slug: "interview-marketplace",
    title: "Case study: a two-sided marketplace",
    tagline: "An illustrative product strategy from an interview exercise.",
    role: "Product exercise",
    period: "Anonymized",
    summary:
      "An interview case study, anonymized: how I'd approach growth and trust for a two-sided marketplace facing a cold-start problem. Included to show how I think, not a shipped product.",
    tags: ["Product strategy", "Marketplace", "Case study"],
    metrics: [
      { label: "Format", value: "Strategy" },
      { label: "Status", value: "Illustrative" },
    ],
    anonymized: true,
  },
];

export const featuredProject = projects.find((p) => p.featured)!;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
