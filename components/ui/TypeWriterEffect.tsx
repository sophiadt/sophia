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
    words: { text: string; className?: string }[]; // Update to include className
    prefix?: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentText, setCurrentText] = useState(""); // Combine prefix and current word
    const [typing, setTyping] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);
    const [prefixTyped, setPrefixTyped] = useState(false); // Track if prefix is typed

    const typeDelay = 45;
    const deleteDelay = 35;
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
                const currentWord = words[wordIndex];
                if (currentText.length < prefix.length + currentWord.text.length) {
                    timeout = setTimeout(() => {
                        setCurrentText((prev) => prev + currentWord.text[prev.length - prefix.length]);
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

    const wordToDisplay = words[wordIndex];

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                width: "0%",
                }}
                whileInView={{
                width: "fit-content",
                }}
            >
                <motion.span>
                    {prefix}
                    <span
                        className={cn("sm:text-base md:text-xl lg:text-3xl xl:text-5xl", wordToDisplay.className)}
                        style={{
                            whiteSpace: "nowrap",
                        }}>
                        {currentText.slice(prefix.length)}
                    </span>
                </motion.span>
            </motion.div>
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