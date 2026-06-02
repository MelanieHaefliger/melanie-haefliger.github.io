"use client";

import { useState } from "react";

/**
 * Playful "click to pet" easter-egg. Looks for /mascot.png in /public and
 * renders nothing if it's missing, so it's purely additive personality.
 */
export function MascotPet() {
  const [ok, setOk] = useState(true);
  const [pets, setPets] = useState(0);

  if (!ok) return null;

  return (
    <div className="mt-20 flex flex-col items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mascot.png"
        alt="Mel's mascot"
        onError={() => setOk(false)}
        onClick={() => setPets((p) => p + 1)}
        className="h-24 w-24 cursor-pointer select-none transition-transform duration-150 hover:-rotate-6 active:scale-90"
      />
      <span className="font-mono text-xs text-muted">
        {pets === 0 ? "psst — click to pet 🐹" : `petted ${pets}×! 🐹`}
      </span>
    </div>
  );
}
