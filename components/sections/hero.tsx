"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Portrait } from "@/components/portrait";
import { StatusBadge } from "@/components/status-badge";
import { AnimatedHeadline } from "@/components/ui/animated-headline";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const gradY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Warm gradient wash + soft coral glow. */}
      <motion.div
        aria-hidden
        style={{ y: gradY }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/[0.08] via-transparent to-transparent"
      />
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative pt-24 sm:pt-24 lg:pt-20 pb-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="min-w-0 flex-1 flex flex-col text-center items-center lg:text-left lg:items-start">
            <Reveal>
              <div className="mb-5 flex flex-nowrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 font-mono text-[10px] px-2 py-0.5 sm:text-xs sm:px-2.5 sm:py-1 md:text-sm md:px-3 md:py-1.5 lg:text-sm lg:px-4 whitespace-nowrap text-muted backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Scale-ups &amp; SaaS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 font-mono text-[10px] px-2 py-0.5 sm:text-xs sm:px-2.5 sm:py-1 md:text-sm md:px-3 md:py-1.5 lg:text-sm lg:px-4 whitespace-nowrap text-muted backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  AI &amp; automation
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 font-mono text-[10px] px-2 py-0.5 sm:text-xs sm:px-2.5 sm:py-1 md:text-sm md:px-3 md:py-1.5 lg:text-sm lg:px-4 whitespace-nowrap text-muted backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Retention &amp; engagement
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                <AnimatedHeadline text="Hi, I'm Mel." baseDelay={0.08} />
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-balance text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                I build products that turn messy workflows into experiences
                people <span className="text-accent">love</span>.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                I&apos;m a Product Owner and AI-native builder with 6+ years in
                hypergrowth SaaS across employee engagement and travel-tech —
                building the products and automations that move real metrics.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-nowrap items-center gap-3">
                <Button href="/#work">
                  See my work <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/#contact" variant="secondary">
                  Let&apos;s chat <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="flex flex-col items-center gap-4">
            <Portrait />
            <StatusBadge />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
