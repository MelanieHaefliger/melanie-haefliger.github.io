/**
 * Central site configuration — edit this file to update name, contact links,
 * and SEO defaults across the whole site.
 */
export const site = {
  name: "Melanie Haefliger",
  role: "AI Product Manager",
  // One-line positioning used in the hero and meta description.
  tagline: "I build AI products that turn messy workflows into experiences people love.",
  description:
    "AI Product Manager with experience across scale-ups, travel-tech, and employee-engagement platforms. I ship AI-powered automations and user experiences that move real metrics.",
  // Update once a custom domain is connected.
  url: "https://melaniehaefliger.vercel.app",
  email: "melany.haefliger@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/melanie-haefliger",
    email: "mailto:melany.haefliger@gmail.com",
  },
  // Where the downloadable CV lives (drop the PDF in /public).
  cv: "/melanie-haefliger-cv.pdf",
  location: "Europe",
} as const;

export type Site = typeof site;
