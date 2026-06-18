"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  const x = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden overflow-hidden md:block"
    >
      <motion.div
        className="absolute h-[150px] w-[150px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(0,121,121,0.13) 0%, rgba(36,177,177,0.06) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
