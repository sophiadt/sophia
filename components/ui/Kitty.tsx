"use client";

import { useState, useEffect } from "react";
import NextImage from "next/image"; // Rename the imported Next.js Image component

export const Kitty = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isClient, setIsClient] = useState(false); // To ensure the component runs only on the client-side
    const imageCount = 10;
    const imageFolder = "/kitty";
    const animationSpeed = 167; // 6 fps

    // Ensure useEffect runs only on the client side
    useEffect(() => {
        setIsClient(true); // Set client-side state to true
    }, []);

    // Preload all images only if it's the client-side
    useEffect(() => {
        if (isClient) {
            const preloadImages = () => {
                for (let i = 1; i <= imageCount; i++) {
                    const paddedNumber = String(i).padStart(2, "0");
                    const img = new window.Image(); // Use the browser's native Image constructor
                    img.src = `${imageFolder}/frame_${paddedNumber}.png`;
                }
            };
            preloadImages();
        }
    }, [isClient, imageFolder, imageCount]);

    // Handle animation with interval only if it's the client-side
    useEffect(() => {
        if (isClient) {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % imageCount);
            }, animationSpeed);

            return () => clearInterval(interval); // Cleanup interval
        }
    }, [isClient, animationSpeed, imageCount]);

    // Function to get the image name based on the current index
    const getImageName = (index: number) => {
        const paddedNumber = String(index + 1).padStart(2, "0");
        return `${imageFolder}/frame_${paddedNumber}.png`;
    };

    if (!isClient) {
        return null; // Return null until we're on the client-side
    }

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