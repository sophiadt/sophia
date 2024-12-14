import { navItems } from "@/data";

import Hero from "@/components/Hero";
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
        <section id="technical">
          <TechnicalProjects />
        </section>
        <section id="graphical">
          <GraphicalProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
