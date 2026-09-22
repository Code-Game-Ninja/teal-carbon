import { stats } from "@/data/site";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

export default function DataSection() {
  return (
    <section id="impact" className="paper-grain relative bg-paper-warm px-6 py-28 md:px-12 md:py-40">
      <Reveal className="mx-auto max-w-6xl">
        <p className="eyebrow mb-6 text-ink-muted">03 / The numbers behind the science</p>
        <h2 className="mb-16 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em] text-ink">
          What restoration could unlock.
        </h2>
      </Reveal>

      <Reveal stagger className="grid gap-12 border-t border-hairline-light pt-12 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp
              value={s.value}
              suffix={s.suffix}
              className="block font-display text-[clamp(3rem,7vw,7rem)] font-light leading-none tracking-[-0.02em] text-primary"
            />
            <p className="mt-4 text-lg text-ink">{s.label}</p>
            <p className="mt-2 font-mono text-xs text-ink-muted">{s.source}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
