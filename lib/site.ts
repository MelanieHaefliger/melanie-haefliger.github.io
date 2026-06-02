/**
 * Central site configuration — edit this file to update name, contact links,
 * and SEO defaults across the whole site.
 */
export const site = {
  name: "Melanie Haefliger",
  role: "Product Owner · AI & Automation",
  // One-line positioning used in the hero and meta description.
  tagline: "I turn complex workflows into seamless, AI-powered experiences.",
  description:
    "Strategic Product Owner and AI-native builder with 6+ years in hypergrowth SaaS (CSR and travel-tech). I integrate LLMs, Claude Code, and intelligent automations to cut operational overhead and ship experiences people love.",
  // GitHub Pages project URL. Update if you rename the repo or add a domain.
  url: "https://melaniehaefliger.github.io/portfolio",
  email: "melany.haefliger@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/melanie-haefliger",
    email: "mailto:melany.haefliger@gmail.com",
  },
  // Where the downloadable CV lives (drop the PDF in /public).
  cv: "/melanie-haefliger-cv.pdf",
  location: "Remote · Swiss & EU citizen",
} as const;

export type Site = typeof site;
