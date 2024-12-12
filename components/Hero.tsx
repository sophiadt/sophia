import { TypeWriterEffect } from "./ui/TypeWriterEffect";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { Rain } from "./ui/Rain";
import { CD } from "./ui/CD";

const Hero = () => {
  const words = [
    { text: "Sophia!", className: "text-blue-akari font-bold" },
    { text: "a software developer" },
    { text: "a web developer" },
    { text: "a computer science student" },
    { text: "an AI enthusiast" },
    { text: "an animator" },
    { text: "a graphic designer" },
    { text: "a gamer :D" },
  ];

  return (
    <BackgroundGradientAnimation className="h-screen w-auto flex items-center">
      <Rain>
        {/* Main content */}
        <div className="flex justify-center relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-[25rem]">
              {/* Text Section with adjusted margin-top */}
              <div className="flex-2 md:mr-20 lg:mr-30 mt-20 md:mt-30 lg:mt-40">
                <h2 className="text-left text-[40px] md:text-5xl lg:text-6xl">
                  Hi, welcome to my portfolio!
                </h2>
                <TypeWriterEffect
                  prefix="I'm "
                  words={words}
                  className="text-left sm:text-base md:text-xl lg:text-4xl xl:text-5xl"
                  cursorClassName="bg-blue-akari"
                />
                <p className="py-7">
                  Also an avid fan of Genshin Impact, Honkai Star Rail, and Ace Attorney!
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex flex-col items-center md:items-end space-y-4">
                <img src="/cd.png" alt="CD" className="w-48 h-auto rounded-full" />
                <CD
                    imageSrc="/cd.png" // Path to the image
                    audioSrc="/akari.mp3" // Path to the audio file
                />
                {/* <img src="/kitty.png" alt="Kitty" className="w-48 h-auto rounded-lg" /> */}
              </div>
            </div>
          </div>
        </div>
      </Rain>
    </BackgroundGradientAnimation>
  );
};

export default Hero;