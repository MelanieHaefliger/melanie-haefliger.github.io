"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function parseValue(value: string) {
  // Extract the first number (with optional commas) from the value string.
  // e.g. "−70%" → { pre:"−", num:70, raw:"70", post:"%" }
  //      "5,000+" → { pre:"", num:5000, raw:"5,000", post:"+" }
  //      "→ ~0 min" → null (num is 0, skip count-up)
  const m = value.match(/^(.*?)(\d[\d,]*)(.*)$/);
  if (!m) return null;
  const raw = m[2];
  const num = parseInt(raw.replace(/,/g, ""), 10);
  if (isNaN(num) || num === 0) return null;
  return { pre: m[1], num, raw, post: m[3] };
}

function formatNum(n: number, raw: string): string {
  return raw.includes(",") ? n.toLocaleString("en-US") : String(n);
}

export function AnimatedMetric({ value, label, href }: { value: string; label: string; href?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!isInView || !parsed) return;
    const { num } = parsed;
    const duration = Math.min(1600, 900 + num * 0.3);
    let startTime = 0;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(num * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  const display = parsed
    ? `${parsed.pre}${formatNum(count, parsed.raw)}${parsed.post}`
    : value;

  const dd = (
    <motion.dd
      className={href ? "mt-1 text-xl font-semibold text-accent underline-offset-2 hover:underline" : "mt-1 text-xl font-semibold text-foreground"}
      initial={{ opacity: 0, y: 8, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.08 }}
    >
      {display}
    </motion.dd>
  );

  return (
    <div ref={ref} className="row-span-2 grid grid-rows-subgrid gap-0">
      <dt className="whitespace-pre-line text-xs text-muted">{label}</dt>
      {href ? (
        /* stopPropagation so the card <Link> wrapper doesn't fire */
        <a href={href} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="block"
        >
          {dd}
        </a>
      ) : dd}
    </div>
  );
}
