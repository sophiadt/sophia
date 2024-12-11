"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypeWriterEffect = ({
    words,
    prefix = "I'm a",
    className,
    cursorClassName,
}: {
    words: string[];
    prefix?: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentWord, setCurrentWord] = useState("");
    const [displayText, setDisplayText] = useState(prefix);
    const [typing, setTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);

    const typeDelay = 50;
    const deleteDelay = 40;
    const pauseBetweenWords = 1500;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (typing) {
            if (currentWord.length < words[wordIndex].length) {
                timeout = setTimeout(() => {
                    setCurrentWord((prev) => prev + words[wordIndex][prev.length]);
                }, typeDelay);
            } else {
                timeout = setTimeout(() => setTyping(false), pauseBetweenWords);
            }
        } else {
            if (currentWord.length > 0) {
                timeout = setTimeout(() => {
                    setCurrentWord((prev) => prev.slice(0, -1));
                }, deleteDelay);
            } else {
                setTyping(true);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        setDisplayText(`${prefix} ${currentWord}`);

        return () => clearTimeout(timeout);
    }, [currentWord, typing, words, wordIndex]);

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            <motion.span>{displayText}</motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "inline-block rounded-sm w-[6px] h-10 md:h-12 lg:h-14 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};