import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-foreground hover:bg-subtle",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string };

/** Polymorphic button: renders an internal Link, an external <a>, or a <button>. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  ...props
}: CommonProps &
  ({ href: string; external?: boolean } | { href?: undefined; external?: never }) &
  Omit<ComponentProps<"button">, "className"> &
  Omit<ComponentProps<"a">, "className" | "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(props as ComponentProps<"a">)}
        />
      );
    }
    // In-page anchors: native <a> scrolls reliably (App Router <Link> often won't).
    if (href.startsWith("#")) {
      return <a href={href} className={classes} {...(props as ComponentProps<"a">)} />;
    }
    return <Link href={href} className={classes} {...(props as ComponentProps<"a">)} />;
  }

  return <button className={classes} {...(props as ComponentProps<"button">)} />;
}
