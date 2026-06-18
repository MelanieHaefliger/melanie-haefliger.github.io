"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Tool = { label: string; initial: string; bg: string; slug?: string };

const TOOLS: Tool[] = [
  { label: "Slack",             initial: "S",   bg: "#4A154B", slug: "slack" },
  { label: "Figma",             initial: "F",   bg: "#C2410C", slug: "figma" },
  { label: "Confluence",        initial: "C",   bg: "#0052CC", slug: "confluence" },
  { label: "Salesforce",        initial: "SF",  bg: "#0176D3", slug: "salesforce" },
  { label: "ClickUp",           initial: "CU",  bg: "#7C3AED", slug: "clickup" },
  { label: "Mixpanel",          initial: "M",   bg: "#7856FF", slug: "mixpanel" },
  { label: "Workato",           initial: "W",   bg: "#6366F1", slug: "workato" },
  { label: "Jira",              initial: "Ji",  bg: "#0747A6", slug: "jira" },
  { label: "Notion",            initial: "No",  bg: "#5c5c5c", slug: "notion" },
  { label: "Zendesk",           initial: "Z",   bg: "#03363D", slug: "zendesk" },
  { label: "OpenAI",            initial: "AI",  bg: "#10A37F", slug: "openai" },
  { label: "Looker",            initial: "Lo",  bg: "#1967D2", slug: "looker" },
  { label: "SQL",               initial: "SQ",  bg: "#336791", slug: "postgresql" },
  { label: "Asana",             initial: "As",  bg: "#F06A6A", slug: "asana" },
  { label: "Google Workspace",  initial: "GW",  bg: "#4285F4", slug: "googleworkspace" },
  { label: "Claude",            initial: "Cl",  bg: "#D97757", slug: "anthropic" },
  { label: "Openclaw",          initial: "OC",  bg: "#0e7490" },
];

const FLOAT: { yOff: number; amp: number; dur: number; del: number }[] = [
  { yOff: 0,  amp: 8,  dur: 3.1, del: 0.0 },
  { yOff: 10, amp: 6,  dur: 2.8, del: 0.5 },
  { yOff: 4,  amp: 10, dur: 3.5, del: 0.9 },
  { yOff: 16, amp: 7,  dur: 3.0, del: 0.3 },
  { yOff: 8,  amp: 9,  dur: 2.7, del: 0.7 },
  { yOff: 0,  amp: 6,  dur: 3.3, del: 0.2 },
  { yOff: 12, amp: 8,  dur: 2.9, del: 0.6 },
  { yOff: 6,  amp: 11, dur: 3.6, del: 0.4 },
  { yOff: 16, amp: 7,  dur: 3.1, del: 0.8 },
  { yOff: 4,  amp: 9,  dur: 2.8, del: 0.1 },
  { yOff: 0,  amp: 10, dur: 3.0, del: 0.3 },
  { yOff: 10, amp: 7,  dur: 2.7, del: 0.7 },
  { yOff: 6,  amp: 8,  dur: 3.3, del: 0.2 },
  { yOff: 2,  amp: 9,  dur: 3.2, del: 0.4 },
  { yOff: 14, amp: 7,  dur: 2.9, del: 0.8 },
  { yOff: 8,  amp: 10, dur: 3.4, del: 0.1 },
  { yOff: 4,  amp: 6,  dur: 3.0, del: 0.6 },
];

function ToolIcon({ slug, initial, bg }: { slug?: string; initial: string; bg: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white"
      style={{ backgroundColor: bg }}
    >
      {slug && !failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt=""
          aria-hidden
          width={14}
          height={14}
          onError={() => setFailed(true)}
        />
      ) : (
        initial
      )}
    </span>
  );
}

export function ToolCloud() {
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-wrap justify-center gap-3 pb-6 lg:justify-start">
      {TOOLS.map((tool, i) => {
        const { yOff, amp, dur, del } = FLOAT[i];
        return (
          <motion.div
            key={tool.label}
            style={{ marginTop: yOff, borderColor: `${tool.bg}55` }}
            animate={reduced ? {} : { y: [0, -amp, 0] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: del }}
            whileHover={{ scale: 1.1, y: -6, transition: { type: "spring", stiffness: 320, damping: 16 } }}
            className="flex cursor-default select-none items-center gap-2 rounded-full border bg-card px-3 py-1.5"
            title={tool.label}
          >
            <ToolIcon slug={tool.slug} initial={tool.initial} bg={tool.bg} />
            <span className="text-sm font-medium text-foreground">{tool.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
