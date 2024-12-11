import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeWriterEffect } from "./ui/TypeWriterEffect";

const Hero = () => {
  const words = [
    { text: "Sophia! ", className: "text-blue-300" },
    { text: "a software developer " },
    { text: "an animator " },
    { text: "a computer science student " },
    { text: "a designer " },
    { text: "a gamer :D " },
  ];

  return (
    <div className="pb-20 pt-36">
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

      {/* Background grid */}
      {/* <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-left justify-left">
          {/* <TextGenerateEffect */}
            {/* words="Hi, welcome to my portfolio!" */}
            {/* className="text-left text-[40px] md:text-5xl lg:text-6xl"
          /> */}
          <h2 className="text-left text-[40px] md:text-5xl lg:text-6xl">Hi, welcome to my portfolio!</h2>

          <TypeWriterEffect
            prefix="I'm "
            words={words.map((word) => word.text)}
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
            cursorClassName="bg-blue-600"
          />

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;