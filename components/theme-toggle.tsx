"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering theme-dependent UI until mounted (theme is unknown on the server).
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {/* Render both and toggle visibility to keep markup stable before mount. */}
      <Sun className={`h-4 w-4 ${mounted && isDark ? "hidden" : "block"}`} />
      <Moon className={`h-4 w-4 ${mounted && isDark ? "block" : "hidden"}`} />
    </button>
  );
}
