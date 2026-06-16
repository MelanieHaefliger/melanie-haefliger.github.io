"use client";

type Tool = { label: string; initial: string; bg: string };

const ROW_1: Tool[] = [
  { label: "Slack",      initial: "S",   bg: "#4A154B" },
  { label: "Figma",      initial: "F",   bg: "#C2410C" },
  { label: "Confluence", initial: "C",   bg: "#0052CC" },
  { label: "Salesforce", initial: "SF",  bg: "#0176D3" },
  { label: "ClickUp",    initial: "CU",  bg: "#7C3AED" },
  { label: "Mixpanel",   initial: "M",   bg: "#7856FF" },
  { label: "Workato",    initial: "W",   bg: "#6366F1" },
  { label: "Jira",       initial: "Ji",  bg: "#0747A6" },
];

const ROW_2: Tool[] = [
  { label: "Notion",     initial: "No",  bg: "#1a1a1a" },
  { label: "Zendesk",    initial: "Z",   bg: "#03363D" },
  { label: "Linear",     initial: "L",   bg: "#5E6AD2" },
  { label: "OpenAI",     initial: "AI",  bg: "#10A37F" },
  { label: "Amplitude",  initial: "Am",  bg: "#1E55FE" },
  { label: "Looker",     initial: "Lo",  bg: "#1967D2" },
  { label: "SQL",        initial: "SQL", bg: "#336791" },
  { label: "Miro",       initial: "Mi",  bg: "#050038" },
];

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur-sm">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
        style={{ backgroundColor: tool.bg }}
      >
        {tool.initial}
      </span>
      <span className="text-sm font-medium text-foreground">{tool.label}</span>
    </div>
  );
}

function MarqueeRow({ tools, direction }: { tools: Tool[]; direction: "left" | "right" }) {
  const doubled = [...tools, ...tools];
  return (
    <div className="overflow-hidden">
      <div
        className={
          direction === "left" ? "animate-marquee-left flex gap-3" : "animate-marquee-right flex gap-3"
        }
      >
        {doubled.map((t, i) => (
          <ToolChip key={`${t.label}-${i}`} tool={t} />
        ))}
      </div>
    </div>
  );
}

export function ToolMarquee() {
  return (
    <section className="marquee-group py-10">
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Tools I ship with
      </p>
      {/* Edge-to-edge strips with fade overlays on both sides */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"
        />
        {/* Right fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"
        />
        <div className="space-y-3">
          <MarqueeRow tools={ROW_1} direction="left" />
          <MarqueeRow tools={ROW_2} direction="right" />
        </div>
      </div>
    </section>
  );
}
