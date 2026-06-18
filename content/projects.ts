/**
 * Project / case-study metadata.
 * ─────────────────────────────────────────────────────────────────────────
 * This drives the "Selected work" cards and each case-study page header.
 * The long-form body for each lives in content/case-studies/<slug>.mdx.
 */

export type Metric = { label: string; value: string; href?: string };

export type ProcessStep = {
  step: string;
  label: string;
  detail: string;
};

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
  /** PM process steps shown visually on the case study page. */
  process?: ProcessStep[];
  /** Tech/tools used — shown as pills on the case study page. */
  techStack?: string[];
  featured?: boolean;
  anonymized?: boolean;
  placeholder?: boolean;
  /** Optional outbound link (live product, waitlist, etc.). */
  externalUrl?: string;
  /** Optional prototype link — renders a "View prototype" button. */
  prototypeUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "workflow-automation",
    title: "Automating a core user workflow",
    tagline:
      "Consolidating data across Slack, ClickUp & Salesforce to cut manual work by 70%.",
    role: "Product Owner · Benevity",
    period: "2023 — 2024",
    summary:
      "Mapped every step of a manual process across three disconnected tools, built the data layer that connected them, and shipped API integrations and automations in phases.",
    tags: ["Automation", "API integrations", "Low-code", "B2B2C SaaS"],
    metrics: [
      { label: "Per ticket\n(was 5–10 min)", value: "→ ~0 min" },
      { label: "Manual workload", value: "−70%" },
      { label: "Users impacted", value: "5,000+" },
    ],
    process: [
      { step: "01", label: "Map", detail: "End-to-end workflow audit with support & CS teams — 8 manual steps identified" },
      { step: "02", label: "Connect", detail: "Defined data field mapping across Slack, ClickUp & Salesforce so all three tools shared a common language" },
      { step: "03", label: "Automate", detail: "Phased rollout with Workato + custom APIs — highest-volume steps first, measure, then expand" },
      { step: "04", label: "Measure", detail: "Tracked reduction in real time: 40% cut after launch → 70% with later iterations" },
    ],
    techStack: ["Workato", "ClickUp", "Salesforce", "Slack", "Zendesk", "Gmail"],
    featured: true,
  },
  {
    slug: "ai-knowledge-chatbot",
    title: "Internal AI knowledge chatbot",
    tagline: "Owning the product decisions behind a RAG assistant for support teams.",
    role: "Product Owner · Benevity",
    period: "2023 — 2024",
    summary:
      "I contributed to the delivery of an internal AI assistant: a Slack bot for internal Q&A and a Zendesk integration that surfaced suggested answers inside open tickets. I owned source scoping, citation rules, and access control.",
    tags: ["AI / LLM", "RAG", "Access control", "Internal tooling"],
    metrics: [
      { label: "Time on tickets", value: "−30%" },
      { label: "Sources", value: "Confluence · Slack · Drive" },
      { label: "Surfaces", value: "Slack · Zendesk" },
    ],
    process: [
      { step: "01", label: "Scope", detail: "Decided which sources to index — Confluence, Slack and Google Workspace — balancing coverage against noise and outdated content" },
      { step: "02", label: "Access rules", detail: "Defined employee and power-user tiers — permissions enforced at retrieval time, not just in the UI" },
      { step: "03", label: "Ship", detail: "Launched on Slack for internal support and CS teams — answers grounded in indexed sources, citations required" },
      { step: "04", label: "Tune", detail: "Employees could rate answers and leave comments when a response was wrong or a source was missing — that feedback drove decisions on what content to index and where the knowledge base had gaps" },
    ],
    techStack: ["OpenAI GPT", "RAG / Retrieval", "Confluence", "Slack", "Google Workspace"],
  },
  {
    slug: "platform-migration",
    title: "De-risking a platform migration",
    tagline: "Retaining ~$1.8M ARR through a structured Go/No-Go risk assessment.",
    role: "Product Owner · Benevity",
    period: "2023",
    summary:
      "Discovered feature gaps between two platforms, decided which to integrate based on revenue and engagement data, mapped historical data fields, and ran a Go/No-Go risk assessment across 20 accounts to protect ~$1.8M ARR.",
    tags: ["Risk management", "Stakeholder alignment", "Migration", "Feature gap analysis"],
    metrics: [
      { label: "ARR retained", value: "~$1.8M" },
      { label: "Accounts protected", value: "20" },
      { label: "Key risk factor", value: "GDPR / data hosting" },
    ],
    process: [
      { step: "01", label: "Discover", detail: "Exported data from both platforms and walked user flows side by side — mapped every feature gap and field mismatch" },
      { step: "02", label: "Prioritise", detail: "Ranked gaps by account revenue and engagement — decided which features to integrate into the new platform before migration" },
      { step: "03", label: "Score", detail: "Built a Go/No-Go per account across three risk tiers — key blocker: GDPR data residency for European clients" },
      { step: "04", label: "Migrate", detail: "Mapped historical data fields between systems and handed CSMs a clear risk brief per account — ~$1.8M ARR retained" },
    ],
    techStack: ["Data export / SQL", "Salesforce"],
  },
  {
    slug: "shehub",
    title: "SheHub.es — launching a community platform",
    tagline: "0→1 product work for a women's-empowerment non-profit (volunteer).",
    role: "Product Manager (Volunteer)",
    period: "2025 — present",
    summary:
      "Ran user research, turned findings into user stories and requirements to launch the live public platform, and launched a functional MVP of an internal admin tool that automates community-management tasks.",
    tags: ["0→1", "User research", "PRD", "Non-profit"],
    metrics: [
      { label: "Community", value: "1,000+ members" },
      { label: "Instagram followers", value: "200+" },
      { label: "Launched", value: "2025" },
    ],
    process: [
      { step: "01", label: "Research", detail: "User interviews with community members — turned findings into prioritised user stories" },
      { step: "02", label: "Define", detail: "Requirements and PRD for the public platform — built on Next.js + TypeScript + Tailwind" },
      { step: "03", label: "Ship", detail: "Launched shehub.es — live community platform, 1,000+ LinkedIn members, 200+ Instagram followers" },
      { step: "04", label: "Automate", detail: "PRD for admin tool → shipped — now automates onboarding emails, project access, and candidate pipeline" },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    externalUrl: "https://shehub.es",
    prototypeUrl: "/prototype/shehub.html",
  },
  {
    slug: "coming-soon",
    title: "Coming soon",
    tagline: "New project in the works.",
    role: "TBD",
    period: "TBD",
    summary:
      "Details are being finalised. Stay tuned for the full case study.",
    tags: ["TBD"],
    metrics: [],
    placeholder: true,
  },
];

export const featuredProject = projects.find((p) => p.featured)!;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
