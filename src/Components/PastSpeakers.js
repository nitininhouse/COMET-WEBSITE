import React from "react";
import { SpeakerCard } from './common';

import AnirudhArun from "../assets/speakers/AnirudhArun.png";
import TanuJain from "../assets/speakers/TanuJain.png";
import IqlipseNova from "../assets/speakers/IqlipseNova.png";
import PratishMehta from "../assets/speakers/PratishMehta.png";
import Speaker1 from "../assets/speakers/Speaker1.png";
import Speaker2 from "../assets/speakers/Speaker2.png";
import Speaker3 from "../assets/speakers/Speaker3.png";
import Speaker4 from "../assets/speakers/Speaker4.png";
import Speaker5 from "../assets/speakers/Speaker5.png";

const PastSpeakers = () => {
    const PAD_X = 10; // X-axis gap in percentage
    const GAP_Y = 48; // Y-axis gap in pixels

    const speakers = [
        {
            name: "Anirudh Arun",
            designation: "Co-founder-BLU smart",
            image: AnirudhArun
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: TanuJain
        },
        {
            name: "IQLIPSE NOVA",
            designation: "Singer, Youtuber",
            image: IqlipseNova
        },
        {
            name: "Pratish Mehta",
            designation: "Ex-IAS",
            image: PratishMehta
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: Speaker1
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: Speaker2
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: Speaker3
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: Speaker4
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-IAS",
            image: Speaker5
        }
    ];

    return (
        <section className="min-h-screen py-8 px-4 text-white font-DmSans">
            <div className="container mx-auto mb-16">
                <h1 className="font-Aquire text-3xl sm:text-5xl lg:text-6xl text-center text-[#FFA500] tracking-wider">
                    PAST SPEAKERS
                </h1>
            </div>

            {/* Responsive Grid with dynamic gaps */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-[1400px] mx-auto"
                style={{
                    gap: `${GAP_Y}px`,
                    padding: `${GAP_Y}px ${PAD_X}%`
                }}
            >
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        designation={speaker.designation}
                        image={speaker.image}
                        width="100%"
                        height="auto"
                    />
                ))}
            </div>
        </section>
    );
}

export default PastSpeakers;