import Image from "next/image";
import OrganicEdge from "./OrganicEdge";
import Parallax from "./Parallax";

/** DEEP interior-page hero: image + scrim + eyebrow + serif title. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  edge = "cream",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  edge?: "cream" | "mist" | "paper-warm" | "none";
}) {
  return (
    <section className="relative flex min-h-[68svh] w-full items-end overflow-hidden bg-ocean-deep text-on-dark">
      <Parallax speed={0.1} className="absolute inset-0 h-[120%] w-full">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="scrim absolute inset-0" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 pb-20 pt-32 md:px-12 md:pb-28">
        <p className="eyebrow mb-6 text-on-dark-soft">{eyebrow}</p>
        <h1 className="max-w-4xl font-display leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,7vw,6.5rem)]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-xl font-serif-lead text-xl text-on-dark-soft">{lead}</p>}
      </div>

      {edge !== "none" && <OrganicEdge position="bottom" color={`var(--color-${edge})`} height={90} />}
    </section>
  );
}
