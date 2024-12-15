import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import TechnicalProjects from "@/components/Technical";
import GraphicalProjects from "@/components/Graphical";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative bg-white-akari-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechnicalProjects />
        <GraphicalProjects />
        <Contact />
      </div>
    </main>
  );
}
