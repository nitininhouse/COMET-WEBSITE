import React from "react";
import videoBg from '../../../assets/backgrounds/videoBg.mp4';
import { ReactComponent as CometLogo } from '../../../assets/logos/CometLogo.svg';

const HeroSection = () => {
    return (
        <div className="block relative w-full h-screen overflow-hidden z-0">
            <video
                src={videoBg}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#E89005] mix-blend-color opacity-100" />
            <div className="absolute inset-0 bg-black mix-blend-multiply opacity-40" />

            <div className="relative z-10 h-full flex items-center justify-center text-white px-2 xs:px-4 sm:px-6">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-0">
                        <div className="hidden lg:block flex-shrink-0 mr-8">
                            <CometLogo className="h-32 md:h-48 lg:h-64" />
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-Ysabeau font-bold text-center whitespace-nowrap">
                                IIT Roorkee's Annual Career Odyssey
                            </div>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-2 xs:my-3 sm:my-4" />

                            <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Aquire font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E89005] via-[#C91F01] to-[#C10000] text-center">
                                Comet'25
                            </h2>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-2 xs:my-3 sm:my-4" />

                            <div className="flex flex-row items-center justify-between w-full text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl font-bold font-Ysabeau gap-2 xs:gap-4 sm:gap-8">
                                <span className="whitespace-nowrap">Think Beyond, Lead Beyond</span>
                                <span className="whitespace-nowrap">8th-9th February</span>
                            </div>

                            <div className="w-full h-1 bg-gradient-to-r from-[#E89005] via-[#C10000] to-[#E89005] my-2 xs:my-3 sm:my-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
