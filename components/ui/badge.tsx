import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Small pill used for tags, tech stack, and metric labels. */
export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-subtle px-2.5 py-0.5 text-xs font-medium text-muted",
        className,
      )}
      {...props}
    />
  );
}
