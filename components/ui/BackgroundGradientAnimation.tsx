"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(253, 253, 252)",
    gradientBackgroundEnd = "rgb(221, 223, 224)",
    firstColor = "155, 190, 207",
    secondColor = "198, 218, 227",
    thirdColor = "171, 196, 213",
    fourthColor = "144, 181, 204",
    fifthColor = "162, 190, 206",
    pointerColor = "136, 173, 194",
    size = "40%",
    blendingValue = "soft-light",
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);
    useEffect(() => {
        document.body.style.setProperty(
            "--gradient-background-start",
            gradientBackgroundStart
        );
        document.body.style.setProperty(
            "--gradient-background-end",
            gradientBackgroundEnd
        );
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`;
        }

        move();
    }, [tgX, tgY]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div
            className={cn(
                "relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn("", className)}>{children}</div>
            <div
                className={cn(
                    "gradients-container absolute inset-0 blur-lg",
                    isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                )}
            >
                {/* Gradient elements */}
                {/* Reuse gradient configuration logic */}
            </div>
        </div>
    );
};