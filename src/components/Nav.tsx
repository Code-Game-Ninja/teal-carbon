"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { nav, site } from "@/data/site";

const socials = [
  { label: "X", href: "#", d: "M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.4 22H2.3l8-9.2L1.5 2h7l4.5 6L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" },
  { label: "LinkedIn", href: "#", d: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06C20.4 8.54 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21H9V9Z" },
  { label: "GitHub", href: "#", d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" },
];

export default function Nav() {
  const [shrunk, setShrunk] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-5">
        <div
          className={clsx(
            "glass-dark flex w-full max-w-6xl items-center justify-between rounded-full text-on-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            shrunk ? "px-4 py-2 md:px-5 md:py-2 shadow-lg" : "px-5 py-3.5 md:px-7 md:py-4"
          )}
        >
          {/* logo */}
          <Link
            href="/"
            className={clsx(
              "flex items-center gap-2 font-display leading-none tracking-tight transition-all duration-500",
              shrunk ? "text-base md:text-lg" : "text-lg md:text-xl"
            )}
          >
            <span
              className={clsx(
                "inline-block rounded-full bg-primary transition-all duration-500",
                shrunk ? "h-2 w-2" : "h-2.5 w-2.5"
              )}
            />
            {site.name}
          </Link>

          {/* center links */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {nav.slice(0, 5).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                data-cursor="Go"
                className="text-sm text-on-dark/85 transition-colors hover:text-primary-bright"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* right cluster */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 lg:flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass flex h-8 w-8 items-center justify-center rounded-full text-on-dark/90 transition-colors hover:text-primary-bright"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
            <a
              href={site.external.href}
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97] md:inline-block"
            >
              {site.external.label}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="text-sm font-semibold uppercase tracking-widest md:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] flex flex-col bg-ocean-abyss text-on-dark transition-transform duration-500 md:hidden",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-xl">{site.name}</span>
          <button
            onClick={() => setOpen(false)}
            className="text-sm font-semibold uppercase tracking-widest"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-6 px-6">
          {nav.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl leading-none tracking-tight"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.external.href}
          className="mx-6 mb-10 rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-on-primary"
        >
          {site.external.label}
        </a>
      </div>
    </>
  );
}
