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
    words: string[];
    prefix?: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentText, setCurrentText] = useState(""); // Combine prefix and current word
    const [typing, setTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [prefixTyped, setPrefixTyped] = useState(false); // Track if prefix is typed

    const typeDelay = 50;
    const deleteDelay = 40;
    const pauseBetweenWords = 1500;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (typing) {
            if (!prefixTyped) {
                // Type the prefix first
                if (currentText.length < prefix.length) {
                    timeout = setTimeout(() => {
                        setCurrentText((prev) => prev + prefix[prev.length]);
                    }, typeDelay);
                } else {
                    setPrefixTyped(true); // Once prefix is typed, stop typing it
                    timeout = setTimeout(() => setTyping(false), pauseBetweenWords);
                }
            } else {
                // Type the current word after the prefix
                if (currentText.length < prefix.length + words[wordIndex].length) {
                    timeout = setTimeout(() => {
                        setCurrentText((prev) => prev + words[wordIndex][prev.length - prefix.length]);
                    }, typeDelay);
                } else {
                    timeout = setTimeout(() => setTyping(false), pauseBetweenWords);
                }
            }
        } else {
            if (currentText.length > prefix.length) {
                // Only delete the word, not the prefix
                timeout = setTimeout(() => {
                    setCurrentText((prev) => prev.slice(0, -1));
                }, deleteDelay);
            } else {
                setTyping(true);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentText, typing, words, wordIndex, prefix, prefixTyped]);

    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl text-left",
                className
            )}
        >
            <motion.span>{currentText}</motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn(
                    "inline-block rounded-sm w-[6px] h-10 md:h-12 lg:h-14 bg-blue-500 align-bottom",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};