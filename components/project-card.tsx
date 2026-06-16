"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedMetric } from "@/components/ui/animated-metric";
import { cn, asset } from "@/lib/utils";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const router = useRouter();

  const shared = cn(
    "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 sm:p-8",
    featured && "ring-1 ring-accent/20",
    !project.placeholder && "cursor-pointer hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(0,121,121,0.12)] active:scale-[0.99] active:shadow-none",
    project.placeholder && "opacity-60",
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    router.push(`/work/${project.slug}`);
  };

  const content = (
    <>
      {!project.placeholder && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      <div className="mb-4 flex items-start justify-center gap-4 lg:justify-between">
        <div className="text-center lg:text-left">
          <div className="mb-1 flex items-center gap-2 justify-center lg:justify-start">
            {featured && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Featured
              </span>
            )}
            {project.anonymized && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Anonymized
              </span>
            )}
            {project.placeholder && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                In progress
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.title}
          </h3>
        </div>
        {!project.placeholder && (
          <ArrowUpRight className="h-5 w-5 shrink-0 text-accent animate-pulse transition-all duration-300 group-hover:animate-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </div>

      <p className="text-base leading-6 text-muted text-center lg:text-left">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {project.metrics.length > 0 && (
        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
          {project.metrics.slice(0, 3).map((m) => (
            <AnimatedMetric
              key={m.label}
              value={m.value}
              label={m.label}
              href={m.href ? asset(m.href) : undefined}
            />
          ))}
        </dl>
      )}

      {(project.externalUrl || project.prototypeUrl) && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4 justify-center lg:justify-start">
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Visit project <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.prototypeUrl && (
            <a
              href={asset(project.prototypeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              View prototype <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </>
  );

  if (project.placeholder) {
    return <div className={shared}>{content}</div>;
  }

  return (
    <div
      className={shared}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/work/${project.slug}`)}
      aria-label={`Read case study: ${project.title}`}
    >
      {content}
    </div>
  );
}
