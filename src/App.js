
import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CometLanding from './Components/whoweare';
import SpeakersGrid from './Components/pastspeakers'
function App() {
  return (
    <div className="App">
      <NavBar />
      <CometLanding />
      
      <SpeakersGrid/>
     
      <Footer />
    </div>
  );
}

export default App;