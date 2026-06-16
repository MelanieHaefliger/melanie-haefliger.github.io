import { Users, FolderKanban, Star, Zap } from "lucide-react";

const features = [
  {
    Icon: Users,
    title: "Applicants",
    detail: "All members in one view. Filter by role, experience level, and pipeline status.",
  },
  {
    Icon: FolderKanban,
    title: "Projects & Roles",
    detail: "Track open positions across cohorts. See spots filled vs. needed at a glance.",
  },
  {
    Icon: Star,
    title: "Candidate Pipeline",
    detail: "From 'reached out' → interviewing → engaged → assigned to a project.",
  },
  {
    Icon: Zap,
    title: "Automated Actions",
    detail: "Welcome emails, access rights, onboarding — triggered automatically on approval.",
  },
];

export function SheHubFeatures() {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {features.map(({ Icon, title, detail }) => (
        <div
          key={title}
          className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30"
        >
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/12 text-accent">
            <Icon className="h-4 w-4" />
          </div>
          <p className="font-semibold text-sm text-foreground">{title}</p>
          <p className="mt-1.5 text-sm text-muted leading-5">{detail}</p>
        </div>
      ))}
    </div>
  );
}
