import React, { useEffect } from "react";
import { HeroSectionEvents, Main, DateButton } from "../Components";
import BackgroundImage from "../assets/backgrounds/Background.png";

const EventsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
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
                <HeroSectionEvents />
                <DateButton />
                <Main />

            </section>
        </div>
    </div>
    );
};

export default EventsPage;
