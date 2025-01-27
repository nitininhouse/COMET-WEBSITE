import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, CometLanding, HeroSection, PastSpeakers, Partners, TeamGrid, Footer, Event } from './Components';
import BackgroundImage from "./assets/backgrounds/Background.png";
import EventsPage from './Event Page';


function App() {
  return (
    <Router>
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
          {/* Routes */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={
                <>
                  <section id="Home">
                    <HeroSection />
                  </section>
                  <section id="WhoWeAre">
                    <CometLanding />
                  </section>
                  <section>
                    <Event />
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
                  <section>
                    <Footer />
                  </section>
                </>
              } />
              <Route path="/events" element={<EventsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
