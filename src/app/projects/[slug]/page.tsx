import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return {
    title: p ? `${p.title} — Teal Carbon Lab` : "Projects — Teal Carbon Lab",
    description: p?.blurb,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <main>
      <PageHero eyebrow={`Project · ${p.kind}`} title={p.title} lead={p.blurb} image={p.image} />

      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="grid gap-8 border-b border-hairline-light pb-10 font-mono text-xs text-ink-muted sm:grid-cols-3">
            <span>Status · {p.status}</span>
            <span>Location · {p.location}</span>
            <span>Year · {p.year}</span>
          </Reveal>

          <Reveal className="mt-12 max-w-2xl space-y-6">
            {p.body.map((para, i) => (
              <p key={i} className="text-lg text-ink-soft">{para}</p>
            ))}
          </Reveal>

          <Reveal stagger className="mt-16 grid gap-6 md:grid-cols-2">
            {p.gallery.map((g, i) => (
              <div key={i} className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image src={g} alt={`${p.title} ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            ))}
          </Reveal>

          <div className="mt-20 border-t border-hairline-light pt-10">
            <Link href="/projects" className="text-sm font-semibold text-primary">
              ← All projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
