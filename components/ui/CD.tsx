"use client";

import React, { useRef, useState } from 'react';
import './CD.css';

export const CD = ({ imageSrc, audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="cd-player-container">
            <div className={`cd ${isPlaying ? 'spinning' : ''}`} onClick={togglePlayPause}>
                <img src={imageSrc} alt="CD" className="cd-image" />
            </div>
            <audio ref={audioRef} src={audioSrc} />
            <button onClick={togglePlayPause} className="play-pause-button">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};