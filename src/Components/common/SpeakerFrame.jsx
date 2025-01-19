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
            <div className="absolute top-[4px] left-[4px] right-[4px] bottom-[4px] z-0 overflow-hidden">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
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
                <span className="text-white font-Aquire font-bold text-lg tracking-wider">
                    {designation}
                </span>
            </div>
        </div>
    );
};

export default SpeakerCard;
