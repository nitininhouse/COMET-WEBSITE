
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CometLanding from './Components/whoweare';
function App() {
  return (
    <div className="App">
      <Header />
      <CometLanding />
      <main>
        <p>This is the main content.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;