"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
    prefix,
    wordArray,
    className,
    cursorClassName,
}: {
    prefix?: string;
    wordArray: string[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = wordArray[currentIndex];
            if (isDeleting) {
                setTypedText((prev) => prev.slice(0, -1));
                setTypingSpeed(50); // Speed up deleting
            } else {
                setTypedText((prev) => fullText.slice(0, prev.length + 1));
                setTypingSpeed(150); // Normal typing speed
            }

            if (!isDeleting && typedText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && typedText === "") {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % wordArray.length); // Move to next word
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentIndex, wordArray, typingSpeed]);

    return (
        <div className={cn("flex space-x-1 items-center", className)}>
            <div className="overflow-hidden">
                <motion.div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {prefix && <span>{prefix} </span>}
                    <span>{typedText}</span>
                </motion.div>
            </div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] sm:w-[6px] xl:w-[8px] h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
