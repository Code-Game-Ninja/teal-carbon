import Image from "next/image";
import { ecosystems } from "@/data/site";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import OrganicEdge from "@/components/OrganicEdge";

export default function EcosystemExperience() {
  return (
    <section className="relative bg-ocean-deep text-on-dark">
      <div className="px-6 pt-24 md:px-12 md:pt-32">
        <Reveal>
          <p className="eyebrow text-on-dark-soft">02 / The ecosystems</p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em]">
            Four systems doing the quiet work of storing carbon.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-5 px-3 md:gap-6 md:px-6">
        {ecosystems.map((e, i) => (
          <div
            key={e.key}
            className="relative flex min-h-[72svh] items-end overflow-hidden rounded-2xl md:min-h-[80svh]"
          >
            <Parallax speed={0.14} className="absolute inset-0 h-[125%] w-full">
              <Image src={e.image} alt={e.name} fill sizes="100vw" className="object-cover" />
            </Parallax>
            <div className="scrim absolute inset-0" />

            <div className="relative z-10 w-full p-6 md:p-12">
              <Reveal>
                <span className="eyebrow" style={{ color: e.color }}>
                  {String(i + 1).padStart(2, "0")} — {e.name}
                </span>
                <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
                  <h3 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-[-0.02em]">
                    {e.name}
                  </h3>
                  <p className="max-w-sm font-serif-lead text-xl text-on-dark-soft">{e.blurb}</p>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-5 h-6 md:mt-6">
        <OrganicEdge position="bottom" color="var(--color-cream)" height={90} />
      </div>
    </section>
  );
}
