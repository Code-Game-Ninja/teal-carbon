import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import EcosystemExperience from "@/sections/EcosystemExperience";
import DataSection from "@/sections/DataSection";
import MapSection from "@/sections/MapSection";
import ResearchSection from "@/sections/ResearchSection";
import ProjectsTrail from "@/sections/ProjectsTrail";
import FinalCta from "@/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <EcosystemExperience />
      <DataSection />
      <MapSection />
      <ResearchSection />
      <ProjectsTrail />
      <FinalCta />
    </main>
  );
}
