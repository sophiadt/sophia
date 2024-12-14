"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TypeWriterEffect = ({
    words,
    prefix = "I'm ",
    className,
    cursorClassName,
}: {
    words: { text: string; className?: string }[]; // Words with optional className
    prefix?: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentText, setCurrentText] = useState(""); // The full text being typed
    const [typing, setTyping] = useState(true); // Whether currently typing or deleting
    const [wordIndex, setWordIndex] = useState(0); // Track the word index
    const [prefixTyped, setPrefixTyped] = useState(false); // If prefix is fully typed

    const typeDelay = 50;
    const deleteDelay = 40;
    const pauseBetweenWords = 1500;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (typing) {
            // Handle prefix typing first
            if (!prefixTyped) {
                if (currentText.length < prefix.length) {
                    timeout = setTimeout(() => {
                        setCurrentText((prev) => prev + prefix[currentText.length]);
                    }, typeDelay);
                } else {
                    setPrefixTyped(true); // Prefix is fully typed
                }
            } else {
                // Handle typing the word
                const currentWord = words[wordIndex];
                const fullText = prefix + currentWord.text;

                if (currentText.length < fullText.length) {
                    timeout = setTimeout(() => {
                        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
                    }, typeDelay);
                } else {
                    timeout = setTimeout(() => setTyping(false), pauseBetweenWords);
                }
            }
        } else {
            // Handle deleting only the word, not the prefix
            if (currentText.length > prefix.length) {
                timeout = setTimeout(() => {
                    setCurrentText((prev) => prev.slice(0, -1));
                }, deleteDelay);
            } else {
                setTyping(true);
                setWordIndex((prev) => (prev + 1) % words.length);
                setPrefixTyped(false); // Reset prefix for new cycle
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, typing, prefixTyped, words, wordIndex, prefix]);

    const wordToDisplay = words[wordIndex];

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "auto", // Initially fit to content
                }}
                whileInView={{
                    width: "fit-content", // Adjust dynamically
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                }}
            >
                <motion.span className="inline-block whitespace-nowrap">
                    {/* Separate the prefix with default styling */}
                    <span className="text-inherit">{currentText.slice(0, prefix.length)}</span>
                    {/* Style the word differently */}
                    <span
                        className={cn(
                            "sm:text-base md:text-xl lg:text-4xl xl:text-5xl",
                            wordToDisplay.className
                        )}
                    >
                        {currentText.slice(prefix.length)}
                    </span>
                </motion.span>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "inline-block rounded-sm w-[6px] h-8 md:h-10 lg:h-12 align-bottom",
                    cursorClassName
                )}
                style={{
                    background: "linear-gradient(rgb(0, 65, 206), rgb(121, 201, 255))"
                }}
            ></motion.span>
        </div>
    );
};
