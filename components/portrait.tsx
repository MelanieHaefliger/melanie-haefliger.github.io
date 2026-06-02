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
      {/* warm glow behind the portrait */}
      <div
        aria-hidden
        className="absolute -inset-5 rounded-[2.5rem] bg-accent/20 blur-3xl"
      />
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/portrait.jpg"
          alt="Melanie Haefliger"
          onError={() => setOk(false)}
          className="relative h-full w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-border"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent/5 text-6xl font-semibold text-accent ring-1 ring-border">
          MH
        </div>
      )}
    </div>
  );
}
