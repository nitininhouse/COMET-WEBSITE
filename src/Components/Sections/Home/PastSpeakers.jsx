import React from "react";
import { SpeakerCard } from '../../index';

import AnirudhArun from "../../../assets/speakers/AnirudhArun.png";
import TanuJain from "../../../assets/speakers/TanuJain.png";
import IqlipseNova from "../../../assets/speakers/IqlipseNova.png";
import PratishMehta from "../../../assets/speakers/PratishMehta.png";
import AbhishekSyal from "../../../assets/speakers/AbhishekSyal.png";
import AnkitShukla from "../../../assets/speakers/AnkitShukla.png";
import HimanshuShekhar from "../../../assets/speakers/HimanshuShekhar.png";
import TarunMalhotra from "../../../assets/speakers/TarunMalhotra.png";
import ManojAgarwal from "../../../assets/speakers/ManojAgarwal.png";

const PastSpeakers = () => {
    const PAD_X = 10; // X-axis gap in percentage
    const GAP_Y = 48; // Y-axis gap in pixels

    const speakers = [
        {
            name: "Anirudh Arun",
            designation: "Co-founder-BluSmart",
            image: AnirudhArun
        },
        {
            name: "DR TANU JAIN",
            designation: "Ex-Bureaucrat",
            image: TanuJain
        },
        {
            name: "IQLIPSE NOVA",
            designation: "Singer, Youtuber",
            image: IqlipseNova
        },
        {
            name: "Pratish Mehta",
            designation: "Director - KF 3",
            image: PratishMehta
        },
        {
            name: "Manoj Agarwal",
            designation: "Co-founder, Seafund",
            image: ManojAgarwal
        },
        {
            name: "Himanshu Shekhar",
            designation: "Senior Editor, NDTV",
            image: HimanshuShekhar
        },
        {
            name: "Abhishek Syal",
            designation: "Senior Advisor, Dell",
            image: AbhishekSyal
        },
        {
            name: "Ankit Shukla",
            designation: "Founder, HelloPM",
            image: AnkitShukla
        },
        {
            name: "Tarun Malhotra",
            designation: "Vice President, Pay10",
            image: TarunMalhotra
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
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-items-center max-w-[1400px] mx-auto"
                style={{
                    gap: `${GAP_Y}px`,
                    padding: `${GAP_Y}px ${PAD_X}%`
                }}
            >
                {speakers.map((speaker, index) => {
                    const isLast = index === speakers.length - 1;

                    return (
                        <SpeakerCard
                            key={index}
                            name={speaker.name}
                            designation={speaker.designation}
                            image={speaker.image}
                            width="100%"
                            height="auto"
                            className={`${isLast ? 'col-span-2 sm:col-start-2 sm:col-span-2 lg:col-span-2 lg:col-start-auto' : 'col-span-2'}`}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default PastSpeakers;