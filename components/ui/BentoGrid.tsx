"use client";

import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TbBubbleTea } from "react-icons/tb";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Python", "C++", "Java"];
    const rightLists = ["JS", "NextJS", "SQL"];

    const [copied, setCopied] = useState(false);
    const [isClient, setIsClient] = useState(false); // For detecting client-side rendering

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        setIsClient(true); // Set to true after the component mounts (client-side)
    }, []);

    const handleCopy = () => {
        const text = "sophiaydt@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                /* From https://css.glass */
                background: "rgba(157, 190, 207, 0.5)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.6px)",
                WebkitBackdropFilter: "blur(5.6px)",
                border: "1px solid rgba(157, 190, 207, 0.5)"
            }}
        >
            {/* add img divs */}
            <div className={`${id === 4 && "flex"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center mix-blend-overlay")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 4 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-extralight md:max-w-52 md:text-xs lg:text-base text-sm text-black-blue z-10">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`text-lg lg:text-3xl font-bold text-black-blue-2300 z-10`}
                        style={{ whiteSpace: "pre-wrap" }}
                    >
                        {title}
                    </div>

                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white mix-blend-multiply"
                                        style={{ background: 'linear-gradient(rgb(0, 65, 206, 0.75), rgb(121, 201, 255, 1))' }}
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center mix-blend-multiply" style={{ background: 'linear-gradient(rgb(0, 65, 206, 1), rgb(121, 201, 255, 1))' }}></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center mix-blend-multiply" style={{ background: 'linear-gradient(rgb(0, 65, 206, 1), rgb(121, 201, 255, 1))' }}></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center text-white mix-blend-multiply"
                                        style={{ background: 'linear-gradient(rgb(0, 65, 206, 1), rgb(121, 201, 255, 1))' }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && isClient && (  // Make sure the code runs only on client side
                        <div className="relative z-50 inset-0 flex items-center">
                            <div
                                className={`absolute -bottom-5 -left-4 ${copied ? "block" : "block"}`}
                            >
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <div className="flex space-x-6">
                                <MagicButton
                                    title={copied ? "Email copied!" : "Copy email"}
                                    icon={<IoCopyOutline />}
                                    position="left"
                                    handleClick={handleCopy}
                                    otherClasses=""
                                />
                                <MagicButton
                                    title={"Connect!"}
                                    icon={<TbBubbleTea />}
                                    position="right"
                                    handleClick={() => window.open("https://www.linkedin.com/in/sophiadontranho/", "_blank")}
                                    otherClasses=""
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};