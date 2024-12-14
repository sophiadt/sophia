"use client";

import { useState, useEffect } from "react";
import NextImage from "next/image"; // Rename the imported Next.js Image component

export const Kitty = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const imageCount = 10;
    const imageFolder = "/kitty";
    const animationSpeed = 150; // 6 fps

    // Preload all images
    useEffect(() => {
        const preloadImages = () => {
            for (let i = 1; i <= imageCount; i++) {
                const paddedNumber = String(i).padStart(2, "0");
                const img = new window.Image(); // Use the browser's native Image constructor
                img.src = `${imageFolder}/frame_${paddedNumber}.png`;
            }
        };
        preloadImages();
    }, [imageFolder, imageCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % imageCount);
        }, animationSpeed);

        return () => clearInterval(interval);
    }, [animationSpeed, imageCount]);

    const getImageName = (index: number) => {
        const paddedNumber = String(index + 1).padStart(2, "0");
        return `${imageFolder}/frame_${paddedNumber}.png`;
    };

    return (
        <div className="w-48">
            <NextImage
                src={getImageName(currentImage)}
                alt={`Kitty Frame ${currentImage + 1}`}
                layout="responsive"
                width={2160} // Replace with actual width of your images
                height={3840} // Replace with actual height of your images
                priority
            />
        </div>
    );
};