import React, { useState, useEffect } from "react";
import CDCIITRlogo from "../../../assets/logos/CDClogo.svg";
import IITRlogo from "../../../assets/logos/IITRlogo.svg";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");  

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        currentSection = closestSection.getAttribute("id");
      }
      setActiveSection(currentSection);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "Home", scrollLabel: "home"},
    { label: "Who we are", scrollLabel: "whoweare"},
    { label: "Events", scrollLabel: "events" }, 
    { label: "Past Speakers", scrollLabel: "pastspeakers" },
    { label: "Our Partners", scrollLabel: "ourpartners" },
    { label: "Our Team", scrollLabel: "ourteam" },
  ];

  const handleRegisterRedirect = () => {
    window.location.href = "https://forms.gle/ZzaK5HdrGDHpC7eu8";
  };

  // Modified NavLinks component inline
  const NavLinks = ({ navItems, activeSection }) => {
    return (
      <>
        {navItems.map((item) => (
          <button
            key={item.scrollLabel}
            onClick={() => handleScroll(item.scrollLabel)}
            className={`text-lg hover:text-yellow-400 transition-colors ${
              activeSection === item.scrollLabel ? "text-yellow-400" : "text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </>
    );
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
            <NavLinks navItems={navItems} activeSection={activeSection} />
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
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        handleRegisterRedirect={handleRegisterRedirect}
        handleScroll={handleScroll}
      />
    </div>
  );
};

export default NavBar;