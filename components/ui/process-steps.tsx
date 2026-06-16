"use client";

import { Reveal } from "@/components/ui/reveal";
import type { ProcessStep } from "@/content/projects";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      {/* Connecting line visible on desktop */}
      <div
        aria-hidden
        className="absolute top-5 left-5 right-5 h-px bg-border hidden sm:block"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 90}>
            <div className="flex gap-4 sm:flex-col sm:gap-0">
              {/* Numbered circle sits on the connecting line */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-mono text-xs font-semibold ring-4 ring-background">
                {s.step}
              </div>
              <div className="sm:mt-4">
                <p className="font-semibold text-sm text-foreground">{s.label}</p>
                <p className="mt-1 text-sm leading-5 text-muted">{s.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
