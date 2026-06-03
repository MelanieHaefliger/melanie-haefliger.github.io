import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const shared = cn(
    "group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 sm:p-8",
    featured && "ring-1 ring-accent/20",
    !project.placeholder && "hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg",
    project.placeholder && "opacity-60",
  );

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-1 flex items-center gap-2">
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
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </div>

      <p className="text-base leading-6 text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {project.metrics.length > 0 && (
        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
          {project.metrics.slice(0, 3).map((m) => (
            <div key={m.label}>
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="mt-0.5 font-semibold text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );

  if (project.placeholder) {
    return <div className={shared}>{content}</div>;
  }

  return (
    <Link href={`/work/${project.slug}`} className={shared}>
      {content}
    </Link>
  );
}
