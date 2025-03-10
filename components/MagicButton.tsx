import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex h-12 md:h-12 w-auto md:w-40 md:mt-10 overflow-hidden rounded-full p-[2px] focus:outline-none"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#79c9ff_0%,#0041ce_50%,#79c9ff_100%)]" />
            
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-[#0041cec3] 
                bg-white px-7 backdrop-blur-3xl gap-2 hover:bg-[#0041ce2a] hover:text-white transition-colors duration-200 ${otherClasses}`}
            >
                {position === "left" && <span className="text-2xl">{icon}</span>}
                {title}
                {position === "right" && <span className="text-2xl">{icon}</span>}
            </span>
        </button>
    );    
};

export default MagicButton;