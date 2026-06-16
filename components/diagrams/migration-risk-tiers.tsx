"use client";

import { motion } from "framer-motion";

const TIERS = [
  {
    label: "Ready to migrate",
    color: "emerald",
    dot: "bg-emerald-400",
    border: "border-emerald-900/40",
    bg: "bg-emerald-950/10",
    text: "text-emerald-400",
    factors: ["Feature parity confirmed", "No data residency concerns", "Configurations mapped"],
  },
  {
    label: "Feature gap — integration planned",
    color: "amber",
    dot: "bg-amber-400",
    border: "border-amber-900/40",
    bg: "bg-amber-950/10",
    text: "text-amber-400",
    factors: ["Missing features identified", "Prioritised by revenue & engagement", "Features integrated before migration"],
  },
  {
    label: "GDPR blocker — migration paused",
    color: "red",
    dot: "bg-red-400",
    border: "border-red-900/40",
    bg: "bg-red-950/10",
    text: "text-red-400",
    factors: ["EU accounts on US-hosted infrastructure", "Hard data residency requirement", "Escalated before any migration attempt"],
  },
];

export function MigrationRiskTiers() {
  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
      {TIERS.map((tier, i) => (
        <motion.div
          key={tier.label}
          className={`rounded-xl border p-5 ${tier.border} ${tier.bg}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 22 }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${tier.dot}`} />
            <span className={`text-xs font-semibold ${tier.text}`}>{tier.label}</span>
          </div>
          <ul className="space-y-1.5">
            {tier.factors.map((f) => (
              <li key={f} className="text-xs leading-5 text-muted">
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
