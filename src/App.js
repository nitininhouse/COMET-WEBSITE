
import React from 'react';
import SpeakersGrid from './Components/pastspeakers'
import Partners from './Components/partners';
import { NavBar, Footer, CometLanding, HeroSection } from './Components';

function App(){
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CometLanding />
      <Partners/>
      <SpeakersGrid/>
     
      <Footer />
    </div>
  );
}

export default App;
