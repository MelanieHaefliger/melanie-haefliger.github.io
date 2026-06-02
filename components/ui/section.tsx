import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** A landing-page section with an optional monospace eyebrow + heading. */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <Container>
        {(eyebrow || title) && (
          <Reveal className="mb-10 sm:mb-14">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
