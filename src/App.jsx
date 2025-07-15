import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { NavBar, Footer } from './Components';
import AppRoutes from './Routes/AppRoutes';
import { NavBarevent } from './Components/Layout/NavBarevent';
import CometFooterr from './Components/Layout/Footer/Footerevent';


const Layout = () => {
  const location = useLocation();

  return (
    <div className="App min-h-screen flex flex-col">
      <header>
        {location.pathname.startsWith('/events') ? <NavBarevent /> : <NavBar />}
      </header>
      <main className="flex-grow relative">
        <AppRoutes />
      </main>
      <footer>
        {location.pathname.startsWith('/events') ? <CometFooterr /> : <Footer />}
      </footer>
    </div>
  );
};


function App() {
  return (
    <Router basename="/comet">
      <Layout /> 
    </Router>
  );
}

export default App;
