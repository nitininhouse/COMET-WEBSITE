import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar, Footer } from './Components';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return ( 
    <Router basename='/comet/'  >
      <div className="App min-h-screen flex flex-col">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow relative">
          <AppRoutes/>
        </main>
        <footer> 
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
