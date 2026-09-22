import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects — Teal Carbon Lab",
  description: "Field projects mapping, restoring and measuring coastal and wetland carbon.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Science, in the field."
        lead="Where restoration makes the greatest difference — mapped, rebuilt and measured."
        image={projects[0].image}
      />

      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col gap-16">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                data-cursor="View project"
                className="group grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-mono text-xs text-ink-muted">
                    {p.index} · {p.kind} · {p.location} · {p.year}
                  </p>
                  <h2 className="mt-3 font-display text-4xl leading-none tracking-tight text-ink md:text-5xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-md text-ink-soft">{p.blurb}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-primary">Explore project →</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
