/**
 * Project / case-study metadata.
 * ─────────────────────────────────────────────────────────────────────────
 * This drives the "Selected work" cards and each case-study page header.
 * The long-form body for each lives in content/case-studies/<slug>.mdx.
 *
 * Metrics and stories below are taken from Melanie's CV. The PivotPilot entry
 * is a placeholder to be filled in with real details.
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
    tagline: "A personal AI project — an LLM-powered copilot built end to end.",
    role: "Founder & Product Lead",
    period: "2025 — present",
    summary:
      "My personal AI build: designing and shipping an LLM-powered product solo — owning problem, UX, retrieval architecture, and go-to-market. (Details to be finalised.)",
    tags: ["AI / LLM", "0→1 Product", "RAG", "UX"],
    metrics: [
      { label: "Role", value: "Solo build" },
      { label: "Stack", value: "LLM · RAG" },
      { label: "Status", value: "In progress" },
    ],
  },
  {
    slug: "workflow-automation",
    title: "Automating a core user workflow",
    tagline:
      "Consolidating data across Slack, ClickUp & Salesforce to cut manual work by 70%.",
    role: "Product Owner · Benevity",
    period: "2023 — 2024",
    summary:
      "Mapped every touchpoint of a core workflow, defined the data-field mapping to consolidate scattered data into a central database, and rolled out API integrations and low-code automations in phases.",
    tags: ["Automation", "API integrations", "Low-code", "B2B2C SaaS"],
    metrics: [
      { label: "Manual workload", value: "−70%" },
      { label: "Users impacted", value: "5,000+" },
      { label: "Staff freed", value: "~15" },
    ],
    featured: true,
  },
  {
    slug: "ai-knowledge-chatbot",
    title: "Internal AI knowledge chatbot",
    tagline: "Owning the product decisions behind a RAG assistant for support teams.",
    role: "Product Owner · Benevity",
    period: "2023 — 2024",
    summary:
      "Led the product side of an internal AI knowledge chatbot — scoping which Slack, Drive, and Confluence sources to index, defining response and citation behaviour, and enforcing access policy at retrieval time.",
    tags: ["AI / LLM", "RAG", "Access control", "Internal tooling"],
    metrics: [
      { label: "Support tickets", value: "−10%" },
      { label: "Sources", value: "Slack · Drive · Confluence" },
      { label: "Focus", value: "Citations & access" },
    ],
  },
  {
    slug: "platform-migration",
    title: "De-risking a platform migration",
    tagline: "Retaining ~$200K ARR through a structured Go/No-Go risk assessment.",
    role: "Product Owner · Benevity",
    period: "2023",
    summary:
      "Surfaced hidden client configurations and ran a structured Go/No-Go risk assessment during a legacy platform sunset, protecting revenue across 30 enterprise and mid-market accounts.",
    tags: ["Risk management", "Stakeholder alignment", "GTM", "Migration"],
    metrics: [
      { label: "ARR retained", value: "~$200K" },
      { label: "Accounts", value: "30" },
      { label: "Decision", value: "Go/No-Go" },
    ],
  },
  {
    slug: "shehub",
    title: "SheHub.es — launching a community platform",
    tagline: "0→1 product work for a women's-empowerment non-profit (volunteer).",
    role: "Product Manager (Volunteer)",
    period: "2025 — present",
    summary:
      "Ran user research, turned findings into user stories and requirements to launch the live public platform, and defined the PRD for an internal admin tool that automates community-management tasks.",
    tags: ["0→1", "User research", "PRD", "Non-profit"],
    metrics: [
      { label: "Platform", value: "Live" },
      { label: "Admin tool", value: "Shipped" },
      { label: "Focus", value: "Research → PRD" },
    ],
    externalUrl: "https://shehub.es",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
