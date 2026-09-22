import type { Metadata } from "next";
import MapSection from "@/sections/MapSection";
import PageHero from "@/components/PageHero";
import { ecosystems } from "@/data/site";

export const metadata: Metadata = {
  title: "Map — Teal Carbon Lab",
  description: "An interactive map of restoration potential across coastal and wetland sites.",
};

export default function MapPage() {
  return (
    <main>
      <PageHero
        eyebrow="Map"
        title="Where can we restore?"
        lead="Explore restoration potential site by site across the coastline."
        image={ecosystems[0].image}
        edge="mist"
      />
      <MapSection />
    </main>
  );
}
