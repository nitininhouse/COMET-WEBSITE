import React from "react";
import videoBg from '../assets/backgrounds/videoBg.mp4';
import { ReactComponent as CometLogo } from '../assets/logos/CometLogo.svg';

const HeroSection = () => {
    return (
        <div className="hidden md:block relative w-full h-screen overflow-hidden z-0">
            {/* Video Background - Hidden on mobile */}
            <video
                src={videoBg}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Mobile Background*/}
            <div className="md:hidden absolute inset-0 bg-black" />
            {/* Overlay - Only applied when video is showing (desktop) */}
            <div className="absolute inset-0 bg-[#E89005] mix-blend-color opacity-100" />
            <div className="absolute inset-0 bg-black mix-blend-multiply opacity-40" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-row items-center justify-center text-white p-4">
                {/* Container for content with responsive width */}
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <CometLogo className="h-48 md:h-64" />
                        </div>

                        {/* Text content with equal width gradients */}
                        <div className="flex flex-col items-center w-full max-w-2xl">
                            <span className="text-2xl md:text-4xl font-Ysabeau font-bold text-center">
                                IIT Roorkee's Annual Career Odyssey
                            </span>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-4" />

                            <h2 className="text-4xl md:text-9xl font-Aquire font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E89005] via-[#C91F01] to-[#C10000] text-center">
                                Comet'25
                            </h2>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-4" />

                            <div className="flex flex-col md:flex-row items-center justify-between w-full text-base md:text-2xl font-bold font-Ysabeau gap-4 md:gap-8">
                                <span>Think Beyond, Lead Beyond</span>
                                <span>8th-9th February</span>
                            </div>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;