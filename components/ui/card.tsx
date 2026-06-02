import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Layered surface used for project cards and content blocks. */
export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 transition-colors sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
