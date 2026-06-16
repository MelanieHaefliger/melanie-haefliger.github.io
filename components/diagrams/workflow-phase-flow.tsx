"use client";

import { motion } from "framer-motion";
import { ScanSearch, Layers2, GitBranch, ArrowRight, ArrowDown } from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: ScanSearch,
    title: "Map every step",
    detail:
      "Sat with support & CS to document the full process — 8 steps from application to resolution. 6 of them manual and repetitive.",
  },
  {
    num: "02",
    Icon: Layers2,
    title: "Define the data layer",
    detail:
      "Mapped every field across Salesforce, ClickUp & Slack. Without a shared language between tools, nothing could automate correctly.",
  },
  {
    num: "03",
    Icon: GitBranch,
    title: "Roll out in phases",
    detail:
      "Highest-volume steps first: ticket creation, field fill, first email. Measured impact, then expanded to monitoring & status updates.",
  },
];

export function WorkflowPhaseFlow() {
  return (
    <div className="not-prose my-10">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-0">
        {STEPS.map((step, i) => (
          <div key={step.num} className="contents">
            <motion.div
              className="flex flex-1 flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(0,121,121,0.10)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-accent">{step.num}</span>
                <step.Icon className="h-4 w-4 text-accent" />
              </div>
              <h4 className="mb-2 text-sm font-semibold text-foreground">{step.title}</h4>
              <p className="text-sm leading-6 text-muted">{step.detail}</p>
            </motion.div>

            {i < STEPS.length - 1 && (
              <div className="flex items-center justify-center sm:px-3 sm:pt-8">
                <ArrowRight className="hidden h-5 w-5 text-accent/30 sm:block" />
                <ArrowDown className="h-5 w-5 text-accent/30 sm:hidden" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-muted italic">
        We phased it because we had limited engineering capacity — not every automation could go live at once, so we prioritised the highest-impact steps first.
      </p>
    </div>
  );
}
