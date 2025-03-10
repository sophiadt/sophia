import { TypeWriterEffect } from "./ui/TypeWriterEffect";
import { Rain } from "./ui/Rain";
import { CD } from "./ui/CD";
import MagicButton from "./MagicButton";
import { HiSparkles } from "react-icons/hi2";

import dynamic from "next/dynamic";

const Kitty = dynamic(() => import("@/components/ui/Kitty").then(mod => mod.Kitty), {
  ssr: false
});
const BackgroundGradientAnimation = dynamic(() => import("@/components/ui/BackgroundGradientAnimation").then(mod => mod.BackgroundGradientAnimation), {
  ssr: false
});

const Hero = () => {
  const words = [
    { text: "a software developer" },
    { text: "a web developer" },
    { text: "an artist" },
    { text: "an AI enthusiast" },
    { text: "a graphic designer" },
    { text: "a gamer :D" },
  ];

  return (
    <BackgroundGradientAnimation className="h-screen w-auto flex items-center">
      <Rain>
        {/* Main content */}
        <div className="flex justify-center relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-7">
              {/* Text Section with adjusted margin-top */}
              <div className="flex-2 md:mr-20 lg:mr-30 mt-20 md:mt-30 lg:mt-40">
                <h2 className="text-left text-[40px] md:text-5xl lg:text-6xl">
                  Hi, <span className="gradient-text">Sophia</span> here!
                </h2>
                <TypeWriterEffect
                  prefix="I&apos;m "
                  words={words}
                  className="text-left sm:text-base md:text-xl lg:text-4xl xl:text-5xl"
                  cursorClassName="bg-blue-akari"
                />
                <p className="py-7 w-[40rem] sm:w-[45rem] md:w-[50rem]">
                  I&apos;m always up for creating fun hacks and projects based on whatever sparks my interest—whether 
                  it&apos;s diving into the world of <em>Genshin Impact</em>, auto-ing in <em>Honkai Star Rail</em>, 
                  or solving mysteries like in <em>Ace Attorney</em>. If there&apos;s something that catches my attention, you can bet 
                  I&apos;ll find a way to turn it into something exciting. And of course, I&apos;m never without a cup of bubble tea 
                  to fuel the creative process!
                </p>
                <a href="#about">
                  <MagicButton
                    title="My work"
                    icon={<HiSparkles />}
                    position="right"
                  />
                </a>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex flex-col items-center md:items-end space-y-4">
                <CD
                    imageSrc="/cd.jpg" // Path to the image
                    audioSrc="/akari.mp3" // Path to the audio file
                />
                <Kitty />
              </div>
            </div>
          </div>
        </div>
      </Rain>
    </BackgroundGradientAnimation>
  );
};

export default Hero;