const sources = [
  { name: "Slack", sub: "Messages & events" },
  { name: "ClickUp", sub: "Tasks & tickets" },
  { name: "Salesforce", sub: "CRM data" },
];

const outcomes = [
  { label: "Ticket handling", before: "5–10 min manual", after: "~0 min automated" },
  { label: "Manual workload", after: "−70% overall" },
  { label: "Users unblocked", after: "5,000+" },
  { label: "Iteration result", after: "40% → 70% cut" },
];

function Arrow() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <div className="flex flex-col items-center gap-0">
        <div className="h-5 w-px bg-border" />
        <div className="h-0 w-0 border-x-4 border-x-transparent border-t-4 border-t-border" />
      </div>
    </div>
  );
}

export function WorkflowArchDiagram() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-subtle/40 px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          High-level technical architecture
        </p>
      </div>

      <div className="grid gap-8 p-6 sm:grid-cols-[1fr_auto]">
        {/* Left — flow */}
        <div className="min-w-0">
          {/* Source systems */}
          <div className="grid grid-cols-3 gap-2">
            {sources.map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-accent/25 bg-accent/8 px-3 py-2.5 text-center"
              >
                <p className="font-semibold text-xs text-foreground">{s.name}</p>
                <p className="mt-0.5 text-[11px] text-muted">{s.sub}</p>
              </div>
            ))}
          </div>

          <Arrow />

          <div className="rounded-lg border border-accent/40 bg-accent/12 px-4 py-3 text-center">
            <p className="font-semibold text-sm text-foreground">API Integration Layer</p>
            <p className="mt-1 text-xs text-muted">
              REST APIs · Webhooks · Auth per system · Low-code orchestration
            </p>
          </div>

          <Arrow />

          <div className="rounded-lg border border-accent-2/35 bg-accent-2/8 px-4 py-3 text-center">
            <p className="font-semibold text-sm text-foreground">Central Database</p>
            <p className="mt-1 text-xs text-muted">Unified data model · Single source of truth</p>
            <p className="mt-1.5 text-[11px] font-medium text-accent-2">
              PM decision: define the field mapping across all three systems
            </p>
          </div>

          <Arrow />

          <div className="rounded-lg border border-accent/40 bg-accent/18 px-4 py-3 text-center">
            <p className="font-semibold text-sm text-foreground">Low-code Automation Engine</p>
            <p className="mt-1 text-xs text-muted">
              Triggers · Rules · Auto-actions → status updates → notifications
            </p>
          </div>
        </div>

        {/* Right — outcomes */}
        <div className="w-full sm:w-44 shrink-0 space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted mb-3">
            Outcomes
          </p>
          {outcomes.map((o) => (
            <div
              key={o.label}
              className="rounded-lg border border-border bg-subtle/50 px-3 py-2.5"
            >
              <p className="text-[11px] text-muted">{o.label}</p>
              {o.before && (
                <p className="text-[11px] text-muted line-through">{o.before}</p>
              )}
              <p className="text-xs font-semibold text-foreground">{o.after}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
