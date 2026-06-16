const sources = ["Slack channels", "Drive documents", "Confluence pages"];

const querySteps = [
  { label: "User asks a question", sub: '"How do I process a donation refund?"', highlight: "source" },
  { label: "Embed query", sub: "Convert question into a vector" },
  { label: "Retrieved chunks", sub: "Top matching snippets from the index" },
  {
    label: "Access policy check",
    sub: "User can't see content they're not entitled to",
    pm: "PM decision: enforced at retrieval, not just in the UI",
  },
  { label: "LLM + context window", sub: "Generates answer from retrieved chunks", highlight: "accent" },
  {
    label: "Answer + source citations",
    sub: "Shown with every response so users can verify",
    pm: "PM decision: always cite — trust through transparency",
    highlight: "success",
  },
];

function Arrow({ dashed }: { dashed?: boolean }) {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <div className="flex flex-col items-center">
        <div className={`h-4 w-px ${dashed ? "border-l border-dashed border-border" : "bg-border"}`} />
        <div className="h-0 w-0 border-x-[3px] border-x-transparent border-t-[4px] border-t-border" />
      </div>
    </div>
  );
}

export function RAGArchDiagram() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-subtle/40 px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          RAG architecture — how the chatbot works
        </p>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2">
        {/* Left — ingestion pipeline */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Ingestion
          </p>
          <div className="grid grid-cols-3 gap-2">
            {sources.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-accent/25 bg-accent/8 px-2 py-2.5 text-center"
              >
                <p className="text-xs font-medium text-foreground leading-tight">{s}</p>
              </div>
            ))}
          </div>
          <Arrow />
          <div className="rounded-lg border border-accent/35 bg-accent/12 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-foreground">Chunking & Embedding</p>
            <p className="mt-1 text-xs text-muted">Split into segments · Convert text → vectors</p>
          </div>
          <Arrow />
          <div className="rounded-lg border border-accent/50 bg-accent/20 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-foreground">Vector Database</p>
            <p className="mt-1 text-xs text-muted">Semantic search index of all knowledge</p>
          </div>
        </div>

        {/* Right — query pipeline */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Query pipeline
          </p>
          <div className="space-y-0">
            {querySteps.map((step, i) => (
              <div key={i}>
                <div
                  className={`rounded-lg border px-4 py-2.5 ${
                    step.pm
                      ? "border-accent-2/30 bg-accent-2/8"
                      : step.highlight === "source"
                      ? "border-border bg-subtle/60"
                      : step.highlight === "success"
                      ? "border-accent/30 bg-accent/12"
                      : "border-border bg-card"
                  }`}
                >
                  <p className="text-sm font-medium text-foreground">{step.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{step.sub}</p>
                  {step.pm && (
                    <p className="mt-1 text-[11px] font-medium text-accent-2">{step.pm}</p>
                  )}
                </div>
                {i < querySteps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connection note */}
      <div className="border-t border-border bg-subtle/30 px-5 py-3">
        <p className="text-xs text-muted">
          Vector database serves both pipelines — ingestion writes to it, query pipeline reads from it via semantic search.
        </p>
      </div>
    </div>
  );
}
