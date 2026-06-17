"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, asset } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const scrollTo = useCallback(
    (e: React.MouseEvent, hash: string) => {
      const el = document.getElementById(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${hash}`);
      }
    },
    [],
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center pointer-events-none transition-all duration-300">
      <div
        className={cn(
          "pointer-events-auto mx-3 flex w-full items-center justify-between gap-2 rounded-2xl border bg-background/80 px-3 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300 sm:mx-8 sm:gap-3 sm:px-4 sm:py-2 lg:mx-12",
          "border-border/40",
          scrolled ? "border-border/60 shadow-black/10 dark:shadow-black/30" : "shadow-black/5",
        )}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="shrink-0 rounded-md transition-transform active:scale-90"
        >
          <img
            src={asset("/android-chrome-192x192.png")}
            alt="Melanie Haefliger"
            width={28}
            height={28}
            className="rounded-md"
          />
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const hash = link.href.split("#")[1];
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, hash)}
                className="rounded-md px-2 py-1 text-xs text-muted transition-colors hover:text-foreground sm:px-2.5 sm:py-1.5 sm:text-sm"
              >
                {link.label}
              </Link>
            );
          })}
          <span className="ml-0.5 sm:ml-1">
            <ThemeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
