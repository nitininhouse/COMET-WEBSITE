
import React from 'react';
import { NavBar, Footer, CometLanding, HeroSection } from './Components';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CometLanding />
      <main>
        <p>This is the main content.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;