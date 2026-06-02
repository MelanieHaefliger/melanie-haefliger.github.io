import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProject } from "@/content/projects";

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

  const { default: Body } = await import(`@/content/case-studies/${slug}.mdx`);

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <header className="mb-12">
          <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span>{project.role}</span>
            <span className="text-border">/</span>
            <span>{project.period}</span>
            {project.anonymized && (
              <Badge className="ml-1 normal-case tracking-normal">Anonymized</Badge>
            )}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">{project.tagline}</p>

          {project.metrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="text-xs text-muted">{m.label}</dt>
                  <dd className="mt-1 text-xl font-semibold text-foreground">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {project.externalUrl && (
            <div className="mt-6">
              <Button href={project.externalUrl} external size="sm">
                Visit project <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </header>

        <Body />
      </Container>
    </article>
  );
}
