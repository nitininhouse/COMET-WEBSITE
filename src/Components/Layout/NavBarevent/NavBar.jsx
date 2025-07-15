import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
// Import images directly
import CDCIITRlogo from "../../../assets/logos/CDClogo.svg";
import IITRlogo from "../../../assets/logos/IITRlogo.svg";
import MobileMenuu from "./MobileMenu";
import NavLinkss from "./NavLinks";

const NavBarevent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
  ];

  const handleRegisterRedirect = () => {
    window.location.href = "https://forms.gle/ZzaK5HdrGDHpC7eu8";
  };

  return (
    <div
      className={`fixed w-full z-50 ${
        isMobileView ? "bg-black" : "md:bg-opacity-60 bg-black backdrop-blur-md"
      } text-white font-DmSans`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 pr-2">
            <a
              href="https://www.iitr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={IITRlogo}
                alt="IITR Logo"
                className="h-16 cursor-pointer"
              />
            </a>
            <img 
              src={CDCIITRlogo}
              alt="CDC IITR Logo"
              className="h-16"
            />
            <div className="hidden sm:flex flex-col font-bold">
              <span className="text-lg text-yellow-400">Career Development Cell</span>
              <span className="text-lg text-yellow-400">IIT Roorkee</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinkss navItems={navItems} activeSection={activeSection} />
            <button
              onClick={handleRegisterRedirect}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <MobileMenuu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        handleRegisterRedirect={handleRegisterRedirect}
      />
    </div>
  );
};

export default NavBarevent;