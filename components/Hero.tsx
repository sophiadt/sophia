import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeWriterEffect } from "./ui/TypeWriterEffect";
import { Rain } from "./ui/Rain";

const Hero = () => {
  const words = [
    { text: "Sophia!", className: "text-blue-300" },
    { text: "a software developer" },
    { text: "an animator" },
    { text: "a computer science student" },
    { text: "a designer" },
    { text: "a gamer :D" },
  ];

  return (
    <div className="bg-white-akari-white">
      <Rain>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Main content */}
        <div className="flex justify-center relative my-30 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
              {/* Text Section */}
              <div className="flex-2 md:mr-20 lg:mr-30">
                <h2 className="text-left text-[40px] md:text-5xl lg:text-6xl">
                  Hi, welcome to my portfolio!
                </h2>
                <TypeWriterEffect
                  prefix="I'm "
                  words={words}
                  className="text-left sm:text-base md:text-xl lg:text-3xl xl:text-5xl"
                  cursorClassName="bg-blue-600"
                />
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img src="/kitty.png" alt="Kitty" className="w-48 h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </Rain>
    </div>
  );
};

export default Hero;