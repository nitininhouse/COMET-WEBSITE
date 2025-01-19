import React from "react";
import { SpeakerCard } from './common';
import MemberImage from "../assets/speakers/AnirudhArun.png";

const PastSpeakers = () => {
    return (
        <section className="min-h-screen py-8 px-4 text-white font-DmSans">
            <div className="container mx-auto mb-16">
                {/* Heading */}
                <h1 className="font-Aquire text-3xl sm:text-5xl lg:text-6xl text-center text-[#FFA500] tracking-wider">
                    PAST SPEAKERS
                </h1>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
                <SpeakerCard name={"Anirudh Arun"} designation="President" image={MemberImage} />
            </div>
        </section>
    );
}

export default PastSpeakers;
