import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { research, getResearch } from "@/data/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResearch(slug);
  return {
    title: r ? `${r.title} — Teal Carbon Lab` : "Research — Teal Carbon Lab",
    description: r?.blurb,
  };
}

export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResearch(slug);
  if (!r) notFound();

  return (
    <main>
      <PageHero eyebrow={`Research · ${r.index}`} title={r.title} lead={r.lead} image={r.image} />

      <section className="paper-grain bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal className="space-y-6">
            {r.body.map((p, i) => (
              <p key={i} className="text-lg text-ink-soft">{p}</p>
            ))}
          </Reveal>

          <Reveal className="h-fit rounded-lg border border-hairline-light p-8">
            <p className="eyebrow mb-5 text-ink-muted">Methods</p>
            <ul className="space-y-3">
              {r.methods.map((m) => (
                <li key={m} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-5xl border-t border-hairline-light pt-10">
          <Link href="/research" className="text-sm font-semibold text-primary">
            ← All research
          </Link>
        </div>
      </section>
    </main>
  );
}
