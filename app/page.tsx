import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import TechnicalProjects from "@/components/Technical";
import GraphicalProjects from "@/components/Graphical";
import Contact from "@/components/Contact";

import dynamic from "next/dynamic";

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav), {
  ssr: false
});

export default function Home() {
  return (
    <main className="relative bg-white-akari-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="max-w-screen-lg lg:max-w-screen-xl sm:px-10 px-5 mx-auto">
          <Grid />
{/*           <TechnicalProjects />
          <GraphicalProjects />
          <Contact /> */}
        </div>
      </div>
    </main>
  );
}
