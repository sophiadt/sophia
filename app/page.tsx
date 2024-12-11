import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />}
        ]} />
        <BackgroundGradientAnimation containerClassName="h-auto w-auto">
          <Hero />
        </BackgroundGradientAnimation>
      </div>
    </main>
  );
}
