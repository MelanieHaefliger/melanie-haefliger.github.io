"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { PointerIcon } from "lucide-react";

export function StatusBadge() {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    window.open(
      "https://linkedin.com/in/melanie-haefliger",
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  return (
    <div className="relative inline-flex items-center gap-2">
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="shrink-0 text-accent"
        aria-hidden
      >
        <PointerIcon size={20} />
      </motion.span>

      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 hover:bg-accent/20 [webkit-tap-highlight-color:transparent]"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="overflow-hidden whitespace-nowrap text-xs"
        >
          {hovered ? "Let\u2019s chat \u2192" : "Open to new roles"}
        </motion.span>
      </button>
    </div>
  );
}
