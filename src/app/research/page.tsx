import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { research } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research — Teal Carbon Lab",
  description: "Blue carbon, teal carbon, ecosystem restoration and climate adaptation research.",
};

export default function ResearchPage() {
  return (
    <main>
      <PageHero
        eyebrow="Research"
        title="Coastal ecosystems, measured."
        lead="Four programmes turning wetlands and coastlines into measurable climate solutions."
        image={research[0].image}
      />

      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal stagger className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {research.map((r) => (
              <Link key={r.slug} href={`/research/${r.slug}`} data-cursor="Read" className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-mono text-xs text-ink-muted">{r.index}</p>
                <h2 className="mt-2 font-display text-3xl leading-none tracking-tight text-ink md:text-4xl">
                  {r.title}
                </h2>
                <p className="mt-3 max-w-md text-ink-soft">{r.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
