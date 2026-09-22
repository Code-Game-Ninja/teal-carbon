import { intro } from "@/data/site";
import Reveal from "@/components/Reveal";
import WatercolorBloom from "@/components/WatercolorBloom";
import OrganicEdge from "@/components/OrganicEdge";

export default function Intro() {
  return (
    <section id="intro" className="paper-grain relative overflow-hidden bg-cream px-6 py-28 md:px-12 md:py-40">
      <WatercolorBloom color="var(--color-mist)" className="-right-40 top-10" />
      <Reveal className="relative mx-auto max-w-4xl">
        <p className="eyebrow mb-8 text-ink-muted">{intro.eyebrow}</p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em] text-ink">
          {intro.statement}
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft">{intro.body}</p>
      </Reveal>
      <OrganicEdge position="bottom" color="var(--color-ocean-deep)" height={90} />
    </section>
  );
}
