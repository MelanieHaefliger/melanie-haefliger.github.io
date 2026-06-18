"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiSlack, SiFigma, SiConfluence, SiSalesforce, SiClickup, SiMixpanel,
  SiJira, SiNotion, SiZendesk, SiOpenai, SiLooker, SiPostgresql,
  SiAsana, SiGoogledrive, SiAnthropic,
} from "react-icons/si";

type Tool = { label: string; bg: string; icon?: IconType; initial?: string };

const TOOLS: Tool[] = [
  { label: "Slack",            bg: "#4A154B", icon: SiSlack },
  { label: "Figma",            bg: "#C2410C", icon: SiFigma },
  { label: "Confluence",       bg: "#0052CC", icon: SiConfluence },
  { label: "Salesforce",       bg: "#0176D3", icon: SiSalesforce },
  { label: "ClickUp",          bg: "#7C3AED", icon: SiClickup },
  { label: "Mixpanel",         bg: "#7856FF", icon: SiMixpanel },
  { label: "Workato",          bg: "#6366F1", initial: "W" },
  { label: "Jira",             bg: "#0747A6", icon: SiJira },
  { label: "Notion",           bg: "#5c5c5c", icon: SiNotion },
  { label: "Zendesk",          bg: "#03363D", icon: SiZendesk },
  { label: "OpenAI",           bg: "#10A37F", icon: SiOpenai },
  { label: "Looker",           bg: "#1967D2", icon: SiLooker },
  { label: "SQL",              bg: "#336791", icon: SiPostgresql },
  { label: "Asana",            bg: "#F06A6A", icon: SiAsana },
  { label: "Google Workspace", bg: "#4285F4", icon: SiGoogledrive },
  { label: "Claude",           bg: "#D97757", icon: SiAnthropic },
  { label: "Openclaw",         bg: "#0e7490", initial: "OC" },
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

function ToolIcon({ icon: Icon, initial, bg }: { icon?: IconType; initial?: string; bg: string }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white"
      style={{ backgroundColor: bg }}
    >
      {Icon ? <Icon size={14} color="#ffffff" aria-hidden /> : initial}
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
            <ToolIcon icon={tool.icon} initial={tool.initial} bg={tool.bg} />
            <span className="text-sm font-medium text-foreground">{tool.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
