
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CometLanding from './Components/whoweare';
import SpeakersGrid from './Components/pastspeakers'
function App() {
  return (
    <div className="App">
      <Header />
      <CometLanding />
      
      <SpeakersGrid/>
     
      <Footer />
    </div>
  );
}

export default App;