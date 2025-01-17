import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const SpeakersGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // This will be replaced with your actual image imports
  const speakers = [
    { id: 1, name: 'Speaker 1' },
    { id: 2, name: 'Speaker 2' },
    { id: 3, name: 'Speaker 3' },
    { id: 4, name: 'Speaker 4' },
    { id: 5, name: 'Speaker 5' },
    { id: 6, name: 'Speaker 6' },
    { id: 7, name: 'Speaker 7' },
    { id: 8, name: 'Speaker 8' },
    { id: 9, name: 'Speaker 9' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= speakers.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen w-full bg-black p-4">
      <div className="max-w-6xl mx-auto">
        <h1  style={{ fontFamily: "Aquire" }} className="text-red-600 text-3xl  mb-8 text-center">
          PAST SPEAKERS
        </h1>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src="/api/placeholder/300/300"
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-2 text-center">
                {speaker.name}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Single Slide View */}
        <div className="md:hidden relative">
          <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/300/300"
              alt={speakers[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white p-2 text-center">
              {speakers[currentIndex].name}
            </div>
            
            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Next speaker"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersGrid;