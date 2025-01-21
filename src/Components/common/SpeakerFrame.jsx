import React from 'react';
import SpeakerFrame from '../../assets/frames/SpeakerFrame.svg';

const SpeakerCard = ({ name, designation, image }) => {
    return (
        <div
            className="relative w-[256px] h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            {/* Frame SVG */}
            <img src={SpeakerFrame} alt="frame" className="w-full relative z-10" />

            {/* Image Container */}
            <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] z-0 overflow-hidden bg-[#DBDAEA]">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="absolute bottom-0 left-0 right-0"
                    />
                )}
            </div>

            {/* Text Overlays */}
            <div className="absolute top-0 left-0 right-0 h-[22px] flex items-center justify-center z-20">
                <span className="text-white font-Aquire font-bold text-base tracking-wider">
                    {name}
                </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[26px] flex items-center justify-center z-20">
                <span className="text-white font-Aquire font-bold text-base tracking-wider">
                    {designation}
                </span>
            </div>
        </div>
    );
};

export default SpeakerCard;
