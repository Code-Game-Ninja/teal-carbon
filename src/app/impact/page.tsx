import type { Metadata } from "next";
import { stats, ecosystems, publications, hero } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Impact — Teal Carbon Lab",
  description: "The measurable outcomes of coastal and wetland carbon research and restoration.",
};

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Impact"
        title="What the science unlocks."
        lead="Carbon, coastline and community — the outcomes we measure."
        image={hero.image}
        edge="paper-warm"
      />

      {/* stats */}
      <section className="paper-grain bg-paper-warm px-6 py-24 md:px-12 md:py-32">
        <Reveal stagger className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              {typeof s.value === "number" ? (
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="block font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-none tracking-[-0.02em] text-primary"
                />
              ) : (
                <span className="block font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-none tracking-[-0.02em] text-primary">
                  {s.value}
                  {s.suffix}
                </span>
              )}
              <p className="mt-4 text-lg text-ink">{s.label}</p>
              <p className="mt-2 font-mono text-xs text-ink-muted">{s.source}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ecosystems */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-6 text-ink-muted">Ecosystems we work across</p>
          </Reveal>
          <Reveal stagger className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {ecosystems.map((e) => (
              <div key={e.key} className="flex items-start gap-5 border-t border-hairline-light pt-8">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full" style={{ background: e.color }} />
                <div>
                  <h3 className="font-display text-3xl leading-none tracking-tight text-ink">{e.name}</h3>
                  <p className="mt-3 max-w-md text-ink-soft">{e.blurb}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* publications */}
      <section className="paper-grain bg-cream px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-8 text-ink-muted">Recent publications</p>
          </Reveal>
          <ul className="divide-y divide-hairline-light border-y border-hairline-light">
            {publications.map((pub) => (
              <li key={pub.title} className="grid gap-2 py-6 md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8">
                <span className="font-mono text-xs text-ink-muted">{pub.year}</span>
                <span className="text-lg text-ink">{pub.title}</span>
                <span className="font-serif-lead text-ink-soft">{pub.venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
