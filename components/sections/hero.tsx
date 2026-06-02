import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft mint glow behind the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative py-24 sm:py-32 lg:py-40">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.role} · Open to new roles
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            I build AI products that turn messy workflows into experiences
            people <span className="text-accent">love</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I&apos;m {site.name} — an AI Product Manager with experience across
            scale-ups, travel-tech, and employee-engagement platforms. I turn
            ambiguous problems into automations and interfaces that move real
            metrics.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/#work">
              See my work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#contact" variant="secondary">
              Let&apos;s chat <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
