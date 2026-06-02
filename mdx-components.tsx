import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX component map — required by @next/mdx in the App Router.
 * Styles case-study prose to match the Mint Tech palette without needing a
 * separate typography plugin.
 */
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-5 text-base leading-7 text-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 list-decimal space-y-2 pl-5 text-base leading-7 text-muted marker:text-accent">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1.5">{children}</li>,
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-5 text-lg font-medium italic text-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border" />,
  code: ({ children }) => (
    <code className="rounded bg-subtle px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
