import React from 'react';
import {
    HeroSection,
    CometLanding,
    Event,
    PastSpeakers,
    Partners,
    OrganisingTeam
} from '../Components';
import BackgroundImage from '../assets/backgrounds/Background.png';

const Home = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'auto',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'repeat-y',
                    }}
                />
            </div>

            {/* Page Content */}
            <div className="relative z-10">
                <section id="home">
                    <HeroSection />
                </section>
                <section id="whoweare">
                    <CometLanding />
                </section>
                <section  id="events">
                    <Event />
                </section>
                <section id="pastspeakers">
                    <PastSpeakers />
                </section>
                <section id="ourpartners">
                    <Partners />
                </section>
                <section id="ourteam">
                    <OrganisingTeam />
                </section>
            </div>
        </div>
    );
};

export default Home;
