import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProcessSteps } from "@/components/ui/process-steps";
import { AnimatedMetric } from "@/components/ui/animated-metric";
import { FloatingTools } from "@/components/ui/floating-tools";
import { projects, getProject } from "@/content/projects";
import { asset } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (project.placeholder) {
    return (
      <article className="py-16 sm:py-24">
        <Container>
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Back to work
          </Link>
          <header className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              In progress
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted">
              Details are being finalised. Come back soon for the full case study.
            </p>
          </header>
        </Container>
      </article>
    );
  }

  const { default: Body } = await import(`@/content/case-studies/${slug}.mdx`);

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <header className="mb-12">
          <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span>{project.role}</span>
            {project.anonymized && (
              <Badge className="ml-1 normal-case tracking-normal">Anonymized</Badge>
            )}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{project.tagline}</p>

          {project.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-1 gap-8 border-y border-border py-6 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <AnimatedMetric key={m.label} label={m.label} value={m.value} href={m.href ? asset(m.href) : undefined} />
              ))}
            </dl>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {(project.externalUrl || project.prototypeUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.externalUrl && (
                <Button href={project.externalUrl} external size="sm">
                  Visit project <ArrowUpRight className="h-4 w-4" />
                </Button>
              )}
              {project.prototypeUrl && (
                <Button href={asset(project.prototypeUrl)} external variant="secondary" size="sm">
                  View prototype <ArrowUpRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </header>

        {project.process && project.process.length > 0 && (
          <section className="mb-14">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              How I approached it
            </p>
            <ProcessSteps steps={project.process} />
          </section>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <section className="mb-14 pb-10 border-b border-border">
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Tools & stack
            </p>
            <FloatingTools tools={project.techStack} />
          </section>
        )}

        <Body />
      </Container>
    </article>
  );
}
