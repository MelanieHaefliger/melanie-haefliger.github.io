"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const BEFORE = [
  "Get notified on Slack that someone applied",
  "Manually create a ClickUp ticket",
  "Look up the applicant in Salesforce to fill in the required fields",
  "Email 3+ internal stakeholders by hand",
  "Check back across Slack and Gmail for any updates",
  "Update a shared spreadsheet (that nobody kept current)",
];

const AFTER = [
  "User applies",
  "Workato automation triggers",
  "ClickUp ticket auto-created with all fields pre-filled automatically",
  "Stakeholder emails trigger automatically",
  "Replies in Slack and Zendesk sync to ClickUp — support only tagged if action is needed",
  "ClickUp status auto-updates — next email triggers",
];

export function WorkflowBeforeAfter() {
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
              ? "5,000+ users. Support staff spent hours every week on this — instead of actually helping people."
              : "Nobody has to touch it."}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
