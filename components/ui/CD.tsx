"use client";

import React, { useRef, useState, useEffect } from 'react';
import './CD.css';

export const CD = ({ imageSrc, audioSrc }) => {
    const audioRef = useRef(null);
    const cdRef = useRef(null);  // Reference to the CD div for rotation control
    const [isPlaying, setIsPlaying] = useState(true);
    const [rotation, setRotation] = useState(0);  // Store the current rotation angle

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []); // Start playing automatically when the component is mounted

    useEffect(() => {
        let rotationInterval;
        if (isPlaying) {
            // Start a continuous rotation when playing
            const rotate = () => {
                setRotation((prev) => (prev + 1) % 360);  // Increment rotation by 1 degree
            };
            rotationInterval = setInterval(rotate, 10);  // Update rotation every 10 ms
        } else {
            // When paused, clear the rotation interval
            clearInterval(rotationInterval);
        }

        return () => clearInterval(rotationInterval);  // Clean up interval on unmount
    }, [isPlaying]);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current && audioRef.current.pause();
        } else {
            audioRef.current && audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="cd-player-container pb-11">
            <div 
                className="cd"
                ref={cdRef}
                onClick={togglePlayPause}
                style={{ transform: `rotate(${rotation}deg)` }}  // Apply the current rotation
            >
                <img src={imageSrc} alt="CD" className="cd-image" />
            </div>
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};