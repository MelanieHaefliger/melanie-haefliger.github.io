"use client";

import { useState } from "react";

/**
 * Hero portrait — a background-removed cutout (public/portrait-cutout.png)
 * floating on the page with a soft teal halo. Cropped to upper body (object-top)
 * with a gentle bottom fade so it blends into the page. Falls back to a clean
 * coral initials avatar if the image is missing.
 */
export function Portrait() {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative mx-auto aspect-square w-60 shrink-0 sm:w-72 lg:w-80">
      {/* soft pulsing teal/turquoise halo */}
      <div
        aria-hidden
        className="absolute inset-2 rounded-full bg-gradient-to-br from-accent/30 to-accent-2/20 blur-3xl motion-safe:animate-[glowpulse_6s_ease-in-out_infinite]"
      />
      <div className="relative h-full w-full motion-safe:animate-[floaty_7s_ease-in-out_infinite]">
        {ok ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/portrait-cutout.png"
            alt="Melanie Haefliger"
            onError={() => setOk(false)}
            className="h-full w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent/5 text-6xl font-semibold text-accent ring-1 ring-border">
            MH
          </div>
        )}
      </div>
    </div>
  );
}
