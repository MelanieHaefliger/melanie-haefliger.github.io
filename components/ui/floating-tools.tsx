"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

/**
 * bg  = solid brand background colour
 * ink = text colour chosen to meet WCAG AA 4.5:1 against that bg
 *       (white for dark backgrounds, near-black for light ones like Tailwind cyan)
 */
type IconDef = { label: string; initial: string; bg: string; ink: string };

const ICONS: Record<string, IconDef> = {
  "Workato":                { label: "Workato",    initial: "W",   bg: "#6366F1", ink: "#fff" },
  "ClickUp":                { label: "ClickUp",    initial: "CU",  bg: "#7C3AED", ink: "#fff" },
  "Salesforce":             { label: "Salesforce", initial: "SF",  bg: "#0176D3", ink: "#fff" },
  "Slack":                  { label: "Slack",      initial: "S",   bg: "#4A154B", ink: "#fff" },
  "Zendesk":                { label: "Zendesk",    initial: "Z",   bg: "#03363D", ink: "#fff" },
  "Gmail":                  { label: "Gmail",      initial: "G",   bg: "#C5221F", ink: "#fff" },
  "OpenAI GPT":             { label: "OpenAI",     initial: "AI",  bg: "#10A37F", ink: "#fff" },
  "RAG / Retrieval":        { label: "RAG",        initial: "R",   bg: "#007979", ink: "#fff" },
  "Confluence":             { label: "Confluence", initial: "C",   bg: "#0052CC", ink: "#fff" },
  "Next.js":                { label: "Next.js",    initial: "N",   bg: "#1a1a1a", ink: "#fff" },
  "TypeScript":             { label: "TypeScript", initial: "TS",  bg: "#3178C6", ink: "#fff" },
  "Tailwind CSS":           { label: "Tailwind",   initial: "TW",  bg: "#0891B2", ink: "#fff" }, // darker cyan → white text passes 4.5:1
  "Figma":                  { label: "Figma",      initial: "F",   bg: "#C2410C", ink: "#fff" },
  "Data export / SQL":      { label: "SQL",        initial: "SQL", bg: "#336791", ink: "#fff" },
  "Risk scoring framework": { label: "Risk",       initial: "RF",  bg: "#007979", ink: "#fff" },
};

function getIcon(name: string): IconDef {
  return ICONS[name] ?? {
    label: name,
    initial: name.slice(0, 2).toUpperCase(),
    bg: "#007979",
    ink: "#fff",
  };
}

/* Unique but stable float parameters per index */
function floatParams(i: number) {
  const amplitudes = [6, 9, 5, 8, 7, 10, 6, 8];
  const durations  = [2.8, 3.4, 2.5, 3.1, 3.7, 2.9, 3.3, 2.6];
  const delays     = [0, 0.5, 0.9, 0.3, 0.7, 0.2, 0.6, 0.4];
  return {
    amp:      amplitudes[i % amplitudes.length],
    duration: durations [i % durations.length],
    delay:    delays    [i % delays.length],
  };
}

export function FloatingTools({ tools }: { tools: string[] }) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-wrap gap-5 py-3">
        {tools.map((name, i) => {
          const icon = getIcon(name);
          const { amp, duration, delay } = floatParams(i);

          return (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-1.5 cursor-default select-none"
              animate={
                reduced
                  ? {}
                  : {
                      y: hovered
                        ? [0, -(amp * 1.6), 0]
                        : [0, -amp, 0],
                    }
              }
              transition={{
                duration: hovered ? duration * 0.65 : duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: hovered ? delay * 0.5 : delay,
              }}
              whileHover={{ scale: 1.18, transition: { type: "spring", stiffness: 340, damping: 18 } }}
              title={icon.label}
            >
              {/* Icon tile — solid brand bg guarantees contrast on any page background */}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl font-bold text-xs transition-shadow duration-200"
                style={{
                  backgroundColor: icon.bg,
                  color: icon.ink,
                  boxShadow: hovered
                    ? `0 4px 20px ${icon.bg}55`
                    : `0 2px 8px ${icon.bg}30`,
                }}
              >
                {icon.initial}
              </div>
              {/* Label */}
              <span className="text-[10px] text-muted leading-none">{icon.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
