import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Centered max-width wrapper with responsive gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-8 lg:px-48 xl:px-72", className)}
      {...props}
    />
  );
}
