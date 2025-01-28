import React from 'react';
import IMAGE3 from '../../assets/logos/comet logo 1.png'

const CometFooter = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8868!2d77.8957!3d29.8657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36bf463f887%3A0x2a4343f728d11b43!2sCDC%20Office%2C%20IIT%20Roorkee!5e0!3m2!1sen!2sin!4v1623456789";

  return (
    <footer className="w-full bg-[#F6F7F8] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Map Section */}
          <div className="lg:col-span-5">
            <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-md">
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
            <div className="flex flex-col space-y-6">
              <div className="h-full w-full">
                <div className="flex items-center justify-center h-full w-full">
                  <img
                    src={IMAGE3}
                    alt="COMET Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="mt-1">📧</span>
                  <div>
                    <p className="text-sm">comet_cdc@iitr.ac.in</p>
                    <p className="text-sm">st_cdc@iitr.ac.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="mt-1">📍</span>
                  <p className="text-sm">CDC Office, 341 Amod Kunj,<br />IIT Roorkee, Roorkee,<br />Uttarakhand India - 247667</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Contact, Connect and Quick Links */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              {/* Contact and Connect in same row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
                {/* Contact us */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span>📧</span>
                      <p className="text-sm">office_cdc@iitr.ac.in</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>📞</span>
                      <p className="text-sm">01332 176375</p>
                    </div>
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-lg">Connect:</h3>
                    <div className="flex space-x-2">
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Centered Quick Links */}
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  <div className="space-y-2">
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">IIT Roorkee</a>
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">Home</a>
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">Who we are</a>
                  </div>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">Events</a>
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">Past Speakers</a>
                    <a href="#" className="block text-sm hover:text-red-600 transition-colors">Our Team</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CometFooter;