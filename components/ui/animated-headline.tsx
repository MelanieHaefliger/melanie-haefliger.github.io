"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Splits text into words, each slides up from a clip mask with a spring stagger.
 * On reduced-motion: renders as plain text instantly.
 */
export function AnimatedHeadline({
  text,
  className,
  baseDelay = 0.18,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none pb-[0.1em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
              delay: baseDelay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
