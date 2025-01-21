
import React from 'react';

import Partners from './Components/partners';
import { NavBar, Footer, CometLanding, HeroSection } from './Components';
import CompactTeamGrid from './Components/teammembers';

function App(){
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CometLanding />
      <Partners/>
      
      <CompactTeamGrid/>
     
      <Footer />
    </div>
  );
}

export default App;
