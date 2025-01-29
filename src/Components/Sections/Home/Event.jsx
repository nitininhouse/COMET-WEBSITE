import React from 'react';
import { useNavigate } from 'react-router-dom';
import EVENT1 from '../../../assets/events/event1.jpg';
import EVENT2 from '../../../assets/events/event2.jpg';
import EVENT3 from '../../../assets/events/event3.jpg';

const Event = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: 'INTERACTIVE SPEAKER SESSIONS',
      image: EVENT3,
    },
    {
      title: 'INDUSTRY ORIENTED WORKSHOPS',
      image: EVENT2,
    },
    {
      title: 'COMPETITIONS WITH EXCITING PRIZES',
      image: EVENT1,
    },
  ];

  const handleNavigation = () => {
    navigate('/events');
  };

  return (
    <div className="min-h-screen p-9" style={{ fontFamily: "Aquire" }}>
      <h1 className="text-red-600 text-3xl sm:text-5xl md:text-5xl lg:text-6xl  font-bold text-center mb-12">EVENTS</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div 
            key={index}
            className="relative w-72 h-96 group cursor-pointer"
          >
            {/* Base rectangle with image */}
            <div className="absolute inset-0 bg-white">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h3 className="text-yellow-500 text-xl font-bold text-center mb-4">
                {event.title}
              </h3>
              
              <button
                onClick={handleNavigation}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
