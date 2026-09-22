"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { clsx } from "clsx";
import { mapNodes, ecosystems, type MapNode } from "@/data/site";
import Reveal from "@/components/Reveal";
import OrganicEdge from "@/components/OrganicEdge";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-cream/60" />,
});

const ecoColor = (key: MapNode["eco"]) =>
  ecosystems.find((e) => e.key === key)?.color ?? "var(--color-primary)";
const ecoName = (key: MapNode["eco"]) =>
  ecosystems.find((e) => e.key === key)?.name ?? key;

export default function MapSection() {
  const [selected, setSelected] = useState<MapNode>(mapNodes[0]);

  return (
    <section id="map" className="paper-grain relative bg-mist px-6 py-28 md:px-12 md:py-40">
      <Reveal className="mx-auto max-w-6xl">
        <p className="eyebrow mb-6 text-ink-muted">04 / Where can we restore?</p>
        <h2 className="mb-14 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.01em] text-ink">
          A living map of the coastline.
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.6fr_1fr]">
        {/* real interactive map */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline-light md:aspect-auto md:min-h-[460px]">
          <LeafletMap selectedId={selected.id} onSelect={setSelected} />
        </div>

        {/* glass detail panel */}
        <div className="glass-dark flex flex-col justify-between rounded-2xl p-8 text-on-dark">
          <div>
            <span className="eyebrow" style={{ color: ecoColor(selected.eco) }}>
              {ecoName(selected.eco)}
            </span>
            <h3 className="mt-3 font-display text-4xl leading-none tracking-tight">{selected.name}</h3>
            <div className="mt-8 space-y-5">
              <div>
                <p className="font-display text-4xl font-light">
                  {selected.hectares.toLocaleString()}
                  <span className="text-lg"> ha</span>
                </p>
                <p className="font-mono text-xs text-on-dark-muted">restoration potential</p>
              </div>
              <div>
                <p className="font-display text-4xl font-light">{selected.tco2e.toLocaleString()}</p>
                <p className="font-mono text-xs text-on-dark-muted">tCO₂e / year</p>
              </div>
            </div>
          </div>
          <p className="mt-8 font-mono text-xs text-on-dark-muted">
            Select a marker or a site below to explore.
          </p>
        </div>
      </div>

      {/* node selector — touch & keyboard friendly */}
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap gap-3">
        {mapNodes.map((node) => {
          const isSel = node.id === selected.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelected(node)}
              aria-pressed={isSel}
              data-cursor="View"
              className={clsx(
                "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors",
                isSel ? "border-primary bg-primary/10 text-ink" : "border-hairline-light text-ink-soft"
              )}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: ecoColor(node.eco) }} />
              {node.name}
            </button>
          );
        })}
      </div>

      <OrganicEdge position="bottom" color="var(--color-ocean-deep)" height={90} />
    </section>
  );
}
