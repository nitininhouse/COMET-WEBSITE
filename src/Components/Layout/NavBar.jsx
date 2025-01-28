import React, { useState, useEffect } from "react";
import { ReactComponent as CDCIITRlogo } from "../../assets/logos/CDClogo.svg";
import { ReactComponent as IITRlogo } from "../../assets/logos/IITRlogo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

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

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Who we are", href: "/whoweare" },
    { label: "Past Speakers", href: "/pastspeakers" },
    { label: "Our Partners", href: "/ourpartners" },
    { label: "Our Team", href: "/ourteam" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterRedirect = () => {
    window.location.href = "https://forms.gle/ZzaK5HdrGDHpC7eu8";
  };

  return (
    <div
      className={`fixed w-full z-50 ${isMobileView ? "bg-black" : "md:bg-opacity-60 bg-black backdrop-blur-md"} text-white font-DmSans`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 pr-2">
            <a
              href="https://www.iitr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IITRlogo className="h-16 cursor-pointer" />
            </a>
            <CDCIITRlogo className="h-16" />
            <div className="hidden sm:flex flex-col font-bold">
              <span className="text-lg text-yellow-400 flex-nowrap">Career Development Cell</span>
              <span className="text-lg text-yellow-400">IIT Roorkee</span>
            </div>
          </div>

          <div className={`hidden lg:flex items-center space-x-8`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href.slice(1))}
                className={`whitespace-nowrap transition-colors ${activeSection === item.label.replace(/\s+/g, '') ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-400`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleRegisterRedirect}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              Register
            </button>
          </div>

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

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
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
              <button
                key={item.label}
                onClick={() => handleScroll(item.href.slice(1))}
                className={`whitespace-nowrap transition-colors ${activeSection === item.label.replace(/\s+/g, '') ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-400`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleRegisterRedirect}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-center mt-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
