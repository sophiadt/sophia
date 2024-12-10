"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

// Shared TypewriterEffect with animation on each character
export const TypewriterEffect = ({
    words,
    prefix,
    className,
    cursorClassName,
}: {
    words: string[];
    prefix?: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView, animate]);

    const renderWords = () => (
        <motion.div ref={scope} className="inline">
            {words.map((word, idx) => (
                <div key={`word-${idx}`} className="inline-block">
                    {word.split("").map((char, index) => (
                        <motion.span
                            key={`char-${index}`}
                            className={cn("dark:text-white text-black opacity-0 hidden")}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </div>
            ))}
        </motion.div>
    );

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {prefix && <span>{prefix} </span>}
            {renderWords()}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

// Smooth TypewriterEffect
export const TypewriterEffectSmooth = ({
    prefix,
    wordArray,
    className,
    cursorClassName,
}: {
    prefix?: string;
    wordArray: string[]; // Array of words to be typed
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100); // Faster initial typing speed
    const [deletingSpeed, setDeletingSpeed] = useState(50); // Faster deleting speed

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = wordArray[currentIndex];
            if (isDeleting) {
                setTypedText((prev) => prev.slice(0, -1));
                setTypingSpeed(deletingSpeed); // Speed up when deleting
            } else {
                setTypedText((prev) => currentWord.slice(0, prev.length + 1));
                setTypingSpeed(100); // Speed up typing speed to 100ms per character
            }

            if (!isDeleting && typedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && typedText === "") {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % wordArray.length); // Move to next word
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentIndex, wordArray, typingSpeed, deletingSpeed]);

    return (
        <div className={cn("flex space-x-1 items-center", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{ width: "0%" }}
                whileInView={{ width: "fit-content" }}
                transition={{ duration: 2, ease: "linear", delay: 1 }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {prefix && <span>{prefix} </span>}
                    <span>{typedText}</span>
                </div>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "block rounded-sm w-[4px] sm:w-[6px] xl:w-[8px] h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};