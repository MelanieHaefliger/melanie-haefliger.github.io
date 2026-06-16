const before = [
  { label: "Waitlist form", sub: "shehub.es/waitlist" },
  { label: "Airtable", sub: "Managed manually" },
  { label: "Individual outreach", sub: "LinkedIn · WhatsApp · email" },
  { label: "Project assignment", sub: "Spreadsheets, often out of date" },
];

const after = [
  { label: "Structured registration", sub: "Role, experience & availability captured upfront" },
  { label: "Centralised database", sub: "Single source of truth" },
  { label: "Automated pipeline", sub: "Status tracked automatically across stages" },
  { label: "Auto-onboarding", sub: "Emails + access assigned on approval" },
];

function Column({
  title,
  items,
  variant,
}: {
  title: string;
  items: { label: string; sub: string }[];
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";
  return (
    <div className="flex-1 min-w-0">
      <p
        className={`mb-4 font-mono text-[10px] uppercase tracking-[0.18em] ${
          isBefore ? "text-muted" : "text-accent"
        }`}
      >
        {title}
      </p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="relative">
            <div
              className={`rounded-lg border px-4 py-3 ${
                isBefore
                  ? "border-border bg-subtle/30 opacity-70"
                  : "border-accent/30 bg-accent/8"
              }`}
            >
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="mt-0.5 text-xs text-muted">{item.sub}</p>
            </div>
            {i < items.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden>
                <div className="flex flex-col items-center">
                  <div className="h-3 w-px bg-border" />
                  <div className="h-0 w-0 border-x-[3px] border-x-transparent border-t-[3px] border-t-border" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SheHubBeforeAfter() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-subtle/40 px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          From manual to automated
        </p>
      </div>
      <div className="flex gap-4 p-6 sm:gap-8">
        <Column title="Before" items={before} variant="before" />
        {/* Divider with arrow */}
        <div className="flex flex-col items-center justify-center shrink-0 gap-1 pt-8">
          <div className="h-px w-6 bg-accent/40" />
          <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-accent/40" />
        </div>
        <Column title="After" items={after} variant="after" />
      </div>
    </div>
  );
}
