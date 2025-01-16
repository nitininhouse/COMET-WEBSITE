
import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CometLanding from './Components/whoweare';
function App() {
  return (
    <div className="App">
      <NavBar />
      <CometLanding />
      <main>
        <p>This is the main content.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;