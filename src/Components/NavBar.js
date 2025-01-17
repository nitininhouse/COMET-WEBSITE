import React, { useState, useEffect } from 'react';
import { ReactComponent as CDCIITRlogo } from '../assets/logos/CDClogo.svg';
import { ReactComponent as IITRlogo } from '../assets/logos/IITRlogo.svg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Who we are', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Our Partners', href: '#' },
    { label: 'Past Speakers', href: '#' },
    { label: 'Our Team', href: '#' }
  ];

  return (
    <header className="bg-black text-white font-DmSans">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <IITRlogo className="h-16" />
            <CDCIITRlogo className="h-16" />
            <div className="flex flex-col font-bold pl-2">
              <span className="text-lg text-yellow-400">Career Development Cell</span>
              <span className="text-lg text-yellow-400">IIT Roorkee</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-16`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-white hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button - Custom HTML/CSS hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center text-yellow-400 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            {/* Custom close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-yellow-400 w-8 h-8 relative focus:outline-none"
              aria-label="Close menu"
            >
              <span className="block absolute w-8 h-0.5 bg-current transform rotate-45 top-1/2"></span>
              <span className="block absolute w-8 h-0.5 bg-current transform -rotate-45 top-1/2"></span>
            </button>
          </div>
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
