import { Mail, FileDown, Workflow, TrendingUp, Zap, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";

const helps = [
  {
    icon: Workflow,
    title: "Automate workflows & free up your team",
    body: "I map messy, manual processes and replace them with automations and integrations that free up whole teams.",
  },
  {
    icon: TrendingUp,
    title: "Boost engagement & retention",
    body: "I ship features and AI experiences that move the metrics that matter — adoption, retention, and revenue.",
  },
  {
    icon: Zap,
    title: "Streamline ops to save cost & time",
    body: "I find where time and money leak, then design the simplest change that fixes it — measured, not assumed.",
  },
];
import { projects } from "@/content/projects";
import { experience, skills } from "@/content/experience";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <Hero />

      {/* ── How I help ────────────────────────────────────────────────── */}
      <Section eyebrow="How I help companies" title="Value, not just features">
        <div className="grid gap-5 sm:grid-cols-3">
          {helps.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <Card className="h-full">
                <h.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-2 min-h-[3.5rem] text-lg font-semibold tracking-tight text-foreground sm:min-h-[3rem]">
                  {h.title}
                </h3>
                <p className="text-base leading-6 text-muted">{h.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

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
      <Section id="about" eyebrow="About" title="I build products that reduce friction, drive engagement, and scale" className="bg-subtle/40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5 text-lg leading-8 text-muted">
            <p>
              I&apos;m a Product Owner and AI-native builder with 6+ years in
              hypergrowth SaaS — across CSR and engagement tech at Benevity and
              travel-tech at TravelPerk. I care most about the unglamorous middle:
              the messy workflows where good automation and a clearer interface
              quietly change someone&apos;s day.
            </p>
            <p>
              I work best with autonomy and trust — given space, I take full ownership from problem to outcome. In a team I&apos;m the person who keeps an eye on the bigger picture, brings conversations back on track when they drift, and says something early if I sense something is off. I care about the environment as much as the output: respectful, honest, and occasionally fun.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={asset(site.cv)} external variant="secondary" size="sm">
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
                  <p className="font-medium text-foreground">
                    {role.companyUrl ? (
                      <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                        {role.company} <ArrowUpRight className="inline h-3 w-3" />
                      </a>
                    ) : (
                      role.company
                    )}
                  </p>
                  <p className="text-sm text-muted">{role.period}</p>
                  <p className="mt-1 font-mono text-sm text-muted">{role.context}</p>
                  {role.remote && (
                    <p className="mt-0.5 font-mono text-sm text-muted">&middot; Remote</p>
                  )}
                </div>
                <div>
                  <p className="mb-2 font-medium text-foreground">{role.title}</p>
                  <ul className="space-y-1.5 text-base leading-6 text-muted">
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
