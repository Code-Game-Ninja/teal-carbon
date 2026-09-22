import Image from "next/image";
import { hero } from "@/data/site";
import ChapterMarker from "@/components/ChapterMarker";
import OrganicEdge from "@/components/OrganicEdge";
import Parallax from "@/components/Parallax";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-ocean-deep text-on-dark"
    >
      <Parallax speed={0.1} className="absolute inset-0 h-[120%] w-full">
        <Image
          src={hero.image}
          alt="Aerial view of a turquoise coastline meeting sand"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="scrim absolute inset-0" />
      <div className="absolute inset-0 bg-ocean-abyss/25" />

      {/* centered composition (ref: Mindloop) */}
      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 text-center">
        {/* social proof pill */}
        <div className="glass mb-8 flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
          <div className="flex -space-x-2">
            {hero.proof.avatars.map((a, i) => (
              <span key={i} className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-ocean-deep/40">
                <Image src={a} alt="" fill sizes="28px" className="object-cover" />
              </span>
            ))}
          </div>
          <span className="text-xs text-on-dark/90">{hero.proof.text}</span>
        </div>

        <h1 className="font-display font-normal leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,7vw,6.5rem)]">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-base text-on-dark-soft md:text-lg">{hero.lead}</p>

        {/* glass subscribe */}
        <form
          className="glass mt-9 flex w-full max-w-md items-center gap-2 rounded-full p-1.5"
          action="#"
        >
          <label htmlFor="hero-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-email"
            type="email"
            placeholder="Enter your e-mail"
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-on-dark placeholder:text-on-dark-muted focus:outline-none"
          />
          <button
            type="submit"
            data-cursor="Join"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-transform active:scale-[0.97]"
          >
            Subscribe
          </button>
        </form>

        <a
          href="#intro"
          data-cursor="Explore"
          className="mt-8 text-sm text-on-dark-soft underline-offset-4 hover:underline"
        >
          {hero.cue} ↓
        </a>
      </div>

      <div className="absolute bottom-6 right-6 z-20 md:bottom-8 md:right-10">
        <ChapterMarker index={hero.chapter.index} total={hero.chapter.total} />
      </div>

      <OrganicEdge position="bottom" color="var(--color-cream)" height={100} />
    </section>
  );
}
