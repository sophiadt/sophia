import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-white-akari-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />}
        ]} />
        <Hero />
      </div>
    </main>
  );
}
