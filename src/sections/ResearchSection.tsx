"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";
import { research } from "@/data/site";
import OrganicEdge from "@/components/OrganicEdge";

export default function ResearchSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="research" className="relative bg-ocean-deep px-6 py-28 text-on-dark md:px-12 md:py-40">
      <p className="eyebrow mb-6 text-on-dark-soft">05 / Our research</p>
      <h2 className="mb-16 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em]">
        Turning coastal ecosystems into measurable climate solutions.
      </h2>

      <div className="grid gap-12 md:grid-cols-[1fr_0.9fr]">
        {/* list */}
        <ul className="border-t border-hairline-dark">
          {research.map((r, i) => (
            <li
              key={r.index}
              onMouseEnter={() => setActive(i)}
              className="group border-b border-hairline-dark py-7"
            >
              <Link href={`/research/${r.slug}`} data-cursor="Explore" className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-on-dark-muted">{r.index}</span>
                <span className="flex-1">
                  <span
                    className={clsx(
                      "block font-display text-3xl leading-none tracking-tight transition-colors md:text-5xl",
                      active === i ? "text-primary-bright" : "text-on-dark"
                    )}
                  >
                    {r.title}
                  </span>
                  <span className="mt-2 block max-w-md text-sm text-on-dark-soft">{r.blurb}</span>
                </span>
                <span className="text-primary-bright opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* preview image */}
        <div className="relative hidden aspect-[3/4] w-full overflow-hidden rounded-lg md:block">
          {research.map((r, i) => (
            <Image
              key={r.index}
              src={r.image}
              alt={r.title}
              fill
              sizes="40vw"
              className={clsx(
                "object-cover transition-opacity duration-500",
                active === i ? "opacity-100" : "opacity-0"
              )}
            />
          ))}
          <div className="scrim absolute inset-0" />
        </div>
      </div>

      <OrganicEdge position="bottom" color="var(--color-cream)" height={90} />
    </section>
  );
}
