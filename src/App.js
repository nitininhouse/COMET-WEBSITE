
import React from 'react';
import { NavBar, Footer, CometLanding, HeroSection } from './Components';
import BackgroundImage from "./assets/backgrounds/Background.png";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <header>
        <NavBar />
        <HeroSection />
      </header>

      <main className="flex-grow relative">
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
        <div className="relative z-10">
          <CometLanding />
          {/* main content here */}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;