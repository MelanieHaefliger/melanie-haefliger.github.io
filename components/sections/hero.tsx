import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Portrait } from "@/components/portrait";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm gradient wash + soft coral glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/[0.08] via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {site.role} · Open to new roles
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                Hi, I&apos;m Mel.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-balance text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                Great products win hearts and fill wallets — let&apos;s make that{" "}
                <span className="text-accent">magic</span> happen.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                I&apos;m a Product Owner and AI-native builder with 6+ years in
                hypergrowth SaaS across CSR and travel-tech. I turn complex
                workflows into automations and experiences people love.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/#work">
                  See my work <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/#contact" variant="secondary">
                  Let&apos;s chat <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="order-first lg:order-none">
            <Portrait />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
