import Image from "next/image";
import { finalCta, site } from "@/data/site";
import Parallax from "@/components/Parallax";

export default function FinalCta() {
  return (
    <section className="relative flex h-svh w-full items-center overflow-hidden bg-ocean-deep text-on-dark">
      <Parallax speed={0.12} className="absolute inset-0 h-[120%] w-full">
        <Image
          src={finalCta.image}
          alt="Mangrove canopy from above"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="scrim absolute inset-0" />

      <div className="relative z-10 px-6 md:px-12">
        <h2 className="font-display leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,8vw,8rem)]">
          {finalCta.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <a
          href={site.external.href}
          data-cursor="Visit"
          className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97]"
        >
          {finalCta.cta} →
        </a>
      </div>
    </section>
  );
}
