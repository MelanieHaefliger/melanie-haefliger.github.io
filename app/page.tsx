import { Mail, FileDown } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { experience, skills } from "@/content/experience";
import { site } from "@/lib/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Hero />

      {/* ── Selected work ─────────────────────────────────────────────── */}
      <Section id="work" eyebrow="Selected work" title="Things I've shipped & built">
        <div className="space-y-5">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── About / experience ────────────────────────────────────────── */}
      <Section id="about" eyebrow="About" title="An AI PM who ships" className="bg-subtle/40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-base leading-7 text-muted">
            <p>
              I&apos;m an AI Product Manager with ~3 years building products at
              scale-ups across travel-tech and employee-engagement. I care most
              about the unglamorous middle: the messy workflows where good
              automation and a clearer interface quietly change someone&apos;s day.
            </p>
            <p>
              Lately I&apos;ve been going deeper on AI — designing LLM-powered
              features and building{" "}
              <span className="font-medium text-foreground">PivotPilot</span>, a
              copilot for career pivots, end to end. I like owning the whole arc:
              the problem, the experiment, and the experience that ships.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={site.cv} external variant="secondary" size="sm">
                <FileDown className="h-4 w-4" /> Download CV
              </Button>
              <Button href={site.links.linkedin} external variant="ghost" size="sm">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {s.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Experience timeline */}
        <div className="mt-14 space-y-6">
          {experience.map((role, i) => (
            <Reveal key={role.company + role.period} delay={i * 70}>
              <div className="grid gap-2 border-t border-border pt-6 sm:grid-cols-[200px_1fr]">
                <div>
                  <p className="font-medium text-foreground">{role.company}</p>
                  <p className="text-sm text-muted">{role.period}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{role.context}</p>
                </div>
                <div>
                  <p className="mb-2 font-medium text-foreground">{role.title}</p>
                  <ul className="space-y-1.5 text-sm leading-6 text-muted">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <Section id="contact" eyebrow="Contact" title="Let's chat">
        <Reveal className="max-w-2xl">
          <p className="text-lg leading-8 text-muted">
            I&apos;m open to AI product roles and interesting conversations. The
            fastest way to reach me is email or LinkedIn — I read everything.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.links.email}>
              <Mail className="h-4 w-4" /> {site.email}
            </Button>
            <Button href={site.links.linkedin} external variant="secondary">
              <LinkedInIcon className="h-4 w-4" /> Connect on LinkedIn
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
