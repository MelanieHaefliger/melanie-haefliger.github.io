"use client";

import { motion } from "framer-motion";
import { Check, AlertTriangle, X } from "lucide-react";

type Status = "full" | "partial" | "none";

const FEATURES: { name: string; legacy: Status; next: Status; note?: string }[] = [
  { name: "Application management", legacy: "full", next: "full" },
  { name: "Custom field configurations", legacy: "full", next: "full" },
  { name: "EU data hosting (GDPR)", legacy: "full", next: "none", note: "Hard blocker for European accounts" },
  { name: "Email automation templates", legacy: "full", next: "partial", note: "Gap closed — integrated post-assessment" },
  { name: "Analytics & reporting", legacy: "full", next: "partial", note: "Priority integration for top-revenue accounts" },
  { name: "Historical data records", legacy: "full", next: "full", note: "Required field mapping before import" },
  { name: "Third-party integrations", legacy: "full", next: "full" },
];

const statusConfig: Record<Status, { icon: typeof Check; label: string; className: string }> = {
  full: { icon: Check, label: "Available", className: "text-emerald-400 bg-emerald-900/30" },
  partial: { icon: AlertTriangle, label: "Partial / gap", className: "text-amber-400 bg-amber-900/30" },
  none: { icon: X, label: "Not available", className: "text-red-400 bg-red-900/30" },
};

function StatusCell({ status }: { status: Status }) {
  const { icon: Icon, label, className } = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${className}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

export function MigrationGapMatrix() {
  return (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-3 text-left font-mono text-xs uppercase tracking-[0.15em] text-muted">Feature</th>
            <th className="pb-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted">Legacy</th>
            <th className="pb-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-muted">New platform</th>
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((f, i) => (
            <motion.tr
              key={f.name}
              className="border-b border-border/50 last:border-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 24 }}
            >
              <td className="py-3 pr-4">
                <span className="text-foreground">{f.name}</span>
                {f.note && (
                  <span className="ml-2 text-xs text-muted">— {f.note}</span>
                )}
              </td>
              <td className="py-3 text-center">
                <StatusCell status={f.legacy} />
              </td>
              <td className="py-3 text-center">
                <StatusCell status={f.next} />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
