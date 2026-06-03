/**
 * Experience timeline + skills shown in the About section.
 * Sourced from Melanie's CV. Tweak wording/dates freely.
 */

export type Role = {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  /** Industry/context label. */
  context: string;
  remote?: boolean;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Benevity",
    companyUrl: "https://benevity.com/",
    title: "Product Owner",
    period: "Oct 2022 — Present",
    context: "CSR & engagement tech · B2B2C SaaS",
    remote: true,
    highlights: [
      "Automated a core user workflow end to end — consolidating data from Slack, ClickUp, and Salesforce — cutting manual workload by 70% and freeing ~15 support and CS staff.",
      "Owned the product side of an internal AI knowledge chatbot (source scoping, citation behaviour, retrieval-time access policy), cutting support tickets by 10%.",
      "Shipped an AI image-recognition feature that replaced manual data entry, and wrote the specs for its validation logic.",
      "Retained ~$200K ARR across 30 accounts during a legacy platform sunset via a structured Go/No-Go risk assessment.",
    ],
  },
  {
    company: "Benevity",
    companyUrl: "https://benevity.com/",
    title: "Customer Success Manager",
    period: "Oct 2021 — Sep 2022",
    context: "CSR & engagement tech · B2B2C SaaS",
    remote: true,
    highlights: [
      "Achieved 95% customer retention through quarterly program reviews and strategic advisory for enterprise clients.",
      "Built Looker, Mixpanel, and Salesforce dashboards to track success metrics and trigger proactive outreach to at-risk accounts.",
    ],
  },
  {
    company: "Perk",
    companyUrl: "https://www.perk.com/",
    title: "Implementation / Onboarding Specialist",
    period: "2021",
    context: "Travel-tech · B2B SaaS · Barcelona",
    highlights: [
      "Onboarded 20+ B2B accounts per quarter with zero-downtime integrations; led SSO and API integrations as the technical contact for client IT teams.",
    ],
  },
  {
    company: "Perk",
    companyUrl: "https://www.perk.com/",
    title: "Senior Technical Support",
    period: "2020",
    context: "Travel-tech · B2B SaaS · Barcelona",
    highlights: [
      "Diagnosed complex edge cases with Engineering and surfaced user-journey friction into UX improvements.",
    ],
  },
  {
    company: "SheHub.es",
    companyUrl: "https://shehub.es/",
    title: "Product Manager (Volunteer)",
    period: "2025 — Present",
    context: "Women's empowerment · Non-profit",
    remote: true,
    highlights: [
      "Launched the live public platform shehub.es from user research through to requirements.",
      "Defined the strategy and PRD for an internal admin tool, now shipped, that automates community-management tasks.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Product",
    items: [
      "Discovery & user interviews",
      "User story mapping",
      "RICE prioritisation",
      "A/B testing",
      "OKR tracking",
      "Agile / Scrum",
    ],
  },
  {
    group: "AI & automation",
    items: [
      "LLMs (ChatGPT, Gemini)",
      "Claude Code",
      "RAG",
      "Low-code automation",
      "Figma AI",
      "Lovable",
    ],
  },
  {
    group: "Data & tools",
    items: [
      "SQL",
      "Looker",
      "Mixpanel",
      "Google Analytics",
      "Jira · Confluence · Aha!",
      "Salesforce",
    ],
  },
  {
    group: "Languages",
    items: ["Swiss German (Native)", "German (C2)", "Spanish (C1/C2)", "English (C1/C2)"],
  },
];
