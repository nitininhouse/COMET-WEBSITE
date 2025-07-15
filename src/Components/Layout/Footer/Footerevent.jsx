import React from 'react';
import { Link } from 'react-router-dom';
import cometLogo from '../../../assets/logos/comet logo 1.png';

const CometFooterEvent = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8868!2d77.8957!3d29.8657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36bf463f887%3A0x2a4343f728d11b43!2sCDC%20Office%2C%20IIT%20Roorkee!5e0!3m2!1sen!2sin!4v1623456789";

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F6F7F8] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-5">
            <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CDC Office IIT Roorkee Location"
              />
            </div>
          </div>

          {/* Center Section with Logo and Contact */}
          <div className="lg:col-span-3">
            <div className="flex flex-col space-y-4">
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[200px]">
                  <img 
                    src={cometLogo}
                    alt="COMET Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="mt-1 text-sm">📧</span>
                  <div>
                    <p className="text-xs">comet_cdc@iitr.ac.in</p>
                    <p className="text-xs">st_cdc@iitr.ac.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="mt-1 text-sm">📍</span>
                  <p className="text-xs">CDC Office, 341 Amod Kunj,<br />IIT Roorkee, Roorkee,<br />Uttarakhand India - 247667</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Contact and Quick Links */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {/* Contact and Connect in same row */}
              <div className="flex flex-col md:flex-row md:justify-center md:items-start space-y-3 md:space-y-0">
                {/* Contact us */}
                <div>
                  <h3 className="font-semibold text-base mb-2">Contact us</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">📧</span>
                      <p className="text-xs">office_cdc@iitr.ac.in</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">📞</span>
                      <p className="text-xs">01332 176375</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Centered Quick Links */}
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-base mb-2">Quick Links</h3>
                <div className="space-y-1">
                  <a 
                    href="https://iitr.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-xs hover:text-red-600 transition-colors"
                  >
                    IIT Roorkee
                  </a>
                  <Link 
                    to="/" 
                    className="block text-xs hover:text-red-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/events/" 
                    className="block text-xs hover:text-red-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CometFooterEvent;