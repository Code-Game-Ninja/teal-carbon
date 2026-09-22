import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { projects } from "@/data/site";
import Reveal from "@/components/Reveal";
import OrganicEdge from "@/components/OrganicEdge";

export default function ProjectsTrail() {
  return (
    <section id="projects" className="paper-grain relative overflow-hidden bg-cream px-6 py-28 md:px-12 md:py-40">
      <Reveal className="mx-auto mb-20 max-w-6xl">
        <p className="eyebrow mb-6 text-ink-muted">06 / Field projects</p>
        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em] text-ink">
          Mapping the coastline. Finding where restoration makes the greatest difference.
        </h2>
      </Reveal>

      <div className="relative mx-auto max-w-5xl">
        {/* dashed expedition trail */}
        <span
          aria-hidden
          className="absolute bottom-0 left-6 top-0 border-l-2 border-dashed md:left-1/2 md:-translate-x-1/2"
          style={{ borderColor: "var(--color-trail-line)" }}
        />

        <div className="flex flex-col gap-24">
          {projects.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal
                key={p.index}
                className={clsx(
                  "relative pl-16 md:w-1/2 md:pl-0",
                  left ? "md:self-start md:pr-14 md:text-right" : "md:self-end md:pl-14"
                )}
              >
                {/* trail node */}
                <span
                  aria-hidden
                  className={clsx(
                    "absolute left-6 top-3 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-cream",
                    left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  )}
                  style={{ background: "var(--color-primary)" }}
                />

                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-md">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-cursor="View project"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <p className="font-mono text-xs text-ink-muted">
                    {p.index} · {p.kind} · {p.year}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-none tracking-tight text-ink md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-ink-soft md:ml-auto">{p.blurb}</p>
                  <Link href={`/projects/${p.slug}`} data-cursor="Explore" className="mt-4 inline-block text-sm font-semibold text-primary">
                    Explore project →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <OrganicEdge position="bottom" color="var(--color-ocean-deep)" height={90} />
    </section>
  );
}
