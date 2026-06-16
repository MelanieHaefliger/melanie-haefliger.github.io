import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Centered max-width wrapper with responsive gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6 sm:px-8", className)}
      {...props}
    />
  );
}
