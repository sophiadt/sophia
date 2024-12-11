import { TypeWriterEffect } from "./ui/TypeWriterEffect";
import { Rain } from "./ui/Rain";

const Hero = () => {
  const words = [
    { text: "Sophia!", className: "text-blue-400 font-bold" },
    { text: "a software developer" },
    { text: "an animator" },
    { text: "a computer science student" },
    { text: "a designer" },
    { text: "a gamer :D" },
  ];

  return (
    <div className="bg-white-akari-white">
      <Rain>
        {/* Main content */}
        <div className="flex justify-center relative my-30 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
              {/* Text Section with adjusted margin-top */}
              <div className="flex-2 md:mr-20 lg:mr-30 mt-20 md:mt-30 lg:mt-40">
                <h2 className="text-left text-[40px] md:text-4xl lg:text-5xl">
                  Hi, welcome to my portfolio!
                </h2>
                <TypeWriterEffect
                  prefix="I'm "
                  words={words}
                  className="text-left sm:text-base md:text-xl lg:text-2xl xl:text-4xl"
                  cursorClassName="bg-blue-400"
                />
              </div>

              {/* Image Section remains unaffected */}
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