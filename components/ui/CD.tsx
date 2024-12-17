"use client";

import React, { useRef, useState, useEffect } from 'react';
import './CD.css';

export const CD = ({ imageSrc, audioSrc }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const cdRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []); // Start playing automatically when the component is mounted

    useEffect(() => {
        let rotationInterval: NodeJS.Timeout | null = null; // Ensure proper typing for the interval
        if (isPlaying) {
            rotationInterval = setInterval(() => {
                setRotation((prev) => (prev + 1) % 360);
            }, 10);
        } else {
            if (rotationInterval) {
                clearInterval(rotationInterval);
            }
        }

        return () => {
            if (rotationInterval) {
                clearInterval(rotationInterval); // Cleanup interval on unmount
            }
        };
    }, [isPlaying]);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
    };

    return (
        <div className="cd-player-container pb-11">
            <div
                className="cd"
                ref={cdRef}
                onClick={togglePlayPause}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <img src={imageSrc} alt="CD" className="cd-image" />
            </div>
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};