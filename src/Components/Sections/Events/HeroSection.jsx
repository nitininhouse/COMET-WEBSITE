import React from "react";
import videoBg from '../../../assets/backgrounds/videoBgEvents.mp4';

const HeroSectionEvents = () => {
    const handleRegisterRedirect = () => {
        window.location.href = "https://forms.gle/ZzaK5HdrGDHpC7eu8";
    };

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

            <div className="relative z-10 h-full flex items-center justify-center text-white px-2 xs:px-4 sm:px-6 pt-[25vh] pb-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center justify-center gap-0">
                        <div className="text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-Aquire font-bold text-transparent bg-clip-text bg-[#E89005] tracking-[10%] leading-none">
                            <span>
                                EVENTS
                            </span>
                        </div>
                        <div className="text-center text-xs sm:text-base md:text-lg lg:text-2xl font-extralight tracking-[45%] font-Ysabeau leading-none">
                            <span className="whitespace-nowrap">THINK BEYOND LEAD BEYOND</span>
                        </div>
                        <div className="hidden sm:block text-xs sm:text-base md:text-lg lg:text-xl font-light text-center font-DmSans py-12 mx-20">
                            <span>
                                Immerse yourself in COMET'25 with an exciting lineup of competitions, insightful guest lectures by industry leaders, and hands-on workshops designed to ignite your career aspirations and fuel innovation!
                            </span>
                        </div>
                        <div className="w-full flex justify-center pt-6+">
                            {/* w-[6rem] h-[2rem] text-xs sm:w-[8rem] sm:h-[3rem] sm:text-base */}
                            <button
                                onClick={handleRegisterRedirect}
                                className="bg-red-700 hidden sm:block md:w-[12rem] md:h-[4rem] md:rounded-lg md:text-2xl text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionEvents;
