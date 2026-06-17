"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const BEFORE = [
  "Applications came in via a waitlist form — no structured data captured upfront",
  "Member data managed manually in Airtable",
  "Every applicant required individual outreach across LinkedIn, WhatsApp, and email",
  "Project assignments tracked in spreadsheets, often out of date",
];

const AFTER = [
  "Structured registration captures role, experience, and availability upfront",
  "All member data centralised in a single source of truth",
  "Candidate pipeline tracks status automatically across stages",
  "Onboarding emails and project access assigned automatically on approval",
];

export function SheHubBeforeAfter() {
  const [active, setActive] = useState<"before" | "after">("before");
  const isBefore = active === "before";

  return (
    <div className="not-prose my-8">
      {/* Toggle */}
      <div className="mb-5 inline-flex rounded-xl border border-border bg-card p-1">
        {(["before", "after"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={[
              "relative rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200",
              active === tab
                ? tab === "before"
                  ? "bg-red-900/40 text-red-300"
                  : "bg-accent/15 text-accent"
                : "text-muted hover:text-foreground",
            ].join(" ")}
          >
            {tab === "before" ? "The problem" : "How it works now"}
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.18 }}
          className={[
            "rounded-xl border p-6",
            isBefore
              ? "border-red-900/40 bg-red-950/10"
              : "border-accent/25 bg-accent/[0.04]",
          ].join(" ")}
        >
          <ol className="space-y-3">
            {(isBefore ? BEFORE : AFTER).map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={[
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs",
                    isBefore
                      ? "bg-red-900/50 text-red-300"
                      : "bg-accent/20 text-accent",
                  ].join(" ")}
                >
                  {isBefore ? <X className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                </span>
                <span className="text-sm leading-6 text-muted">{step}</span>
              </li>
            ))}
          </ol>

          <p className={[
            "mt-5 text-sm font-medium",
            isBefore ? "text-red-400/80" : "text-accent",
          ].join(" ")}>
            {isBefore
              ? "Everything was done manually — across three different tools."
              : "One approval triggers everything. No manual follow-up needed."}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
