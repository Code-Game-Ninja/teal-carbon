"use client";

import Image from "next/image";
import { useRef } from "react";
import { hero } from "@/data/site";
import ChapterMarker from "@/components/ChapterMarker";
import OrganicEdge from "@/components/OrganicEdge";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const imageWrap = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = section.current;
    if (!el || prefersReducedMotion() || !imageWrap.current || !content.current) return;

    const ctx = gsap.context(() => {
      // background image zooms in to fill as you scroll
      gsap.to(imageWrap.current, {
        scale: 1.18,
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true },
      });
      // content scrolls up faster and fades away
      gsap.to(content.current, {
        yPercent: -55,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top top", end: "70% top", scrub: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="top"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-ocean-deep text-on-dark"
    >
      <div ref={imageWrap} className="absolute inset-0 will-change-transform">
        <Image
          src={hero.image}
          alt="Aerial view of a turquoise coastline meeting sand"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="scrim absolute inset-0" />
      <div className="absolute inset-0 bg-ocean-abyss/25" />

      {/* centered composition (ref: Mindloop) */}
      <div
        ref={content}
        className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 text-center will-change-transform"
      >


        <h1 className="font-display font-normal leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,7vw,6.5rem)]">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-base text-on-dark-soft md:text-lg">{hero.lead}</p>

        {/* glass subscribe */}
        <form className="glass mt-9 flex w-full max-w-md items-center gap-2 rounded-full p-1.5" action="#">
          <label htmlFor="hero-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-email"
            type="email"
            placeholder="Enter your e-mail"
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-on-dark placeholder:text-on-dark-muted focus:outline-none"
          />
          <button
            type="submit"
            data-cursor="Join"
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97]"
          >
            Subscribe
          </button>
        </form>

        <a
          href="#intro"
          data-cursor="Explore"
          className="mt-8 text-sm text-on-dark-soft underline-offset-4 hover:underline"
        >
          {hero.cue} ↓
        </a>
      </div>

      <div className="absolute bottom-6 right-6 z-20 md:bottom-8 md:right-10">
        <ChapterMarker index={hero.chapter.index} total={hero.chapter.total} />
      </div>

      <OrganicEdge position="bottom" color="var(--color-cream)" height={100} />
    </section>
  );
}
