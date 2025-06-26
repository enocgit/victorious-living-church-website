import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about/about-section";
import Events from "@/components/sections/events";
import PlanVisit from "@/components/sections/plan-visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Events />
      <PlanVisit />
    </main>
  );
}
