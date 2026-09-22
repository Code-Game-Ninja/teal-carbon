import type { Metadata } from "next";
import Image from "next/image";
import { about, researchers, partners } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Teal Carbon Lab",
  description: "The interdisciplinary research group behind Teal Carbon Lab.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow={about.eyebrow} title={about.mission} image={about.image} />

      {/* mission body */}
      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <Reveal className="mx-auto max-w-3xl space-y-6">
          {about.body.map((p, i) => (
            <p key={i} className="text-lg text-ink-soft">{p}</p>
          ))}
        </Reveal>
      </section>

      {/* researchers */}
      <section className="bg-paper-warm px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-10 text-ink-muted">The team</p>
          </Reveal>
          <Reveal stagger className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {researchers.map((r) => (
              <div key={r.name}>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                  <Image src={r.image} alt={r.name} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <h3 className="mt-4 font-display text-2xl leading-none tracking-tight text-ink">{r.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{r.role}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* partners */}
      <section className="bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-10 text-ink-muted">Partners</p>
          </Reveal>
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p} className="flex min-h-28 items-center rounded-lg border border-hairline-light p-6 font-display text-xl leading-tight text-ink">
                {p}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
