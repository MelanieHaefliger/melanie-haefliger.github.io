"use client";

import { useState } from "react";

/**
 * Hero portrait. Looks for /portrait.jpg (or .png) in /public.
 * Until the photo is added, it shows a clean coral initials avatar so the
 * layout never looks broken. Drop the file and it auto-upgrades.
 */
export function Portrait() {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative mx-auto aspect-square w-52 shrink-0 sm:w-64 lg:w-80">
      {/* soft pulsing teal/turquoise glow behind the portrait */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent/30 to-accent-2/20 blur-3xl motion-safe:animate-[glowpulse_6s_ease-in-out_infinite]"
      />
      <div className="relative motion-safe:animate-[floaty_7s_ease-in-out_infinite]">
        {ok ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/portrait.jpg"
            alt="Melanie Haefliger"
            onError={() => setOk(false)}
            className="h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-border"
          />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent/5 text-6xl font-semibold text-accent ring-1 ring-border">
            MH
          </div>
        )}
      </div>
    </div>
  );
}
