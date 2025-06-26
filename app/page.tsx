import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Events from "@/components/sections/events";
import PlanVisit from "@/components/sections/plan-visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <PlanVisit />
    </main>
  );
}
