import React from 'react';
import { NavBar, CometLanding, HeroSection, PastSpeakers, Partners, TeamGrid,Footer } from './Components';
import BackgroundImage from "./assets/backgrounds/Background.png";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <header>
        <NavBar />
      </header>

      <main className="flex-grow relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "auto",
              backgroundPosition: "top center",
              backgroundRepeat: "repeat-y",
            }}
          />
        </div>
        {/* Content Sections */}
        <div className="relative z-10">
          <section id="Home">
            <HeroSection />
          </section>
          <section id="WhoWeAre">
            <CometLanding />
          </section>
          <section id="PastSpeakers">
            <PastSpeakers />
          </section>
          <section id="OurPartners">
            <Partners />
          </section>
          <section id="OurTeam">
            <TeamGrid />
          </section>
          <section >
            <Footer />
          </section>
        </div>
      </main>


    </div>
  );
}

export default App;
