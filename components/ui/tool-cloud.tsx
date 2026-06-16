"use client";

import { motion, useReducedMotion } from "framer-motion";

type Tool = { label: string; initial: string; bg: string };

const TOOLS: Tool[] = [
  { label: "Slack",      initial: "S",   bg: "#4A154B" },
  { label: "Figma",      initial: "F",   bg: "#C2410C" },
  { label: "Confluence", initial: "C",   bg: "#0052CC" },
  { label: "Salesforce", initial: "SF",  bg: "#0176D3" },
  { label: "ClickUp",    initial: "CU",  bg: "#7C3AED" },
  { label: "Mixpanel",   initial: "M",   bg: "#7856FF" },
  { label: "Workato",    initial: "W",   bg: "#6366F1" },
  { label: "Jira",       initial: "Ji",  bg: "#0747A6" },
  { label: "Notion",     initial: "No",  bg: "#5c5c5c" },
  { label: "Zendesk",    initial: "Z",   bg: "#03363D" },
  { label: "OpenAI",     initial: "AI",  bg: "#10A37F" },
  { label: "Looker",     initial: "Lo",  bg: "#1967D2" },
  { label: "SQL",        initial: "SQ",  bg: "#336791" },
];

/* Stagger offsets (px) and animation params — predefined for stability */
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
];

export function ToolCloud() {
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-wrap gap-3 pb-6">
      {TOOLS.map((tool, i) => {
        const { yOff, amp, dur, del } = FLOAT[i];
        return (
          <motion.div
            key={tool.label}
            style={{ marginTop: yOff, borderColor: `${tool.bg}55` }}
            animate={reduced ? {} : { y: [0, -amp, 0] }}
            transition={{
              duration: dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: del,
            }}
            whileHover={{
              scale: 1.1,
              y: -6,
              transition: { type: "spring", stiffness: 320, damping: 16 },
            }}
            className="flex cursor-default select-none items-center gap-2 rounded-full border bg-card px-3 py-1.5"
            title={tool.label}
          >
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white"
              style={{ backgroundColor: tool.bg }}
            >
              {tool.initial}
            </span>
            <span className="text-sm font-medium text-foreground">{tool.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
