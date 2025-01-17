import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Left and right arrows
import IMAGE2 from "../assets/backgrounds/IMAGE2.png"; // Background image
// Import images directly
import Speaker1 from "../assets/frames/Group (1).png";
import Speaker2 from "../assets/frames/Group (2).png";
import Speaker3 from "../assets/frames/Group (3).png";
import Speaker4 from "../assets/frames/Group (4).png";
import Speaker5 from "../assets/frames/Group (5).png";
import Speaker6 from "../assets/frames/Group (6).png";
import Speaker7 from "../assets/frames/Group (7).png";
import Speaker8 from "../assets/frames/Group (8).png";
import Speaker9 from "../assets/frames/Group (9).png";

const SpeakersGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image on mobile

  const speakers = [
    { id: 1, name: "Speaker 1", image: Speaker1 },
    { id: 2, name: "Speaker 2", image: Speaker2 },
    { id: 3, name: "Speaker 3", image: Speaker3 },
    { id: 4, name: "Speaker 4", image: Speaker4 },
    { id: 5, name: "Speaker 5", image: Speaker5 },
    { id: 6, name: "Speaker 6", image: Speaker6 },
    { id: 7, name: "Speaker 7", image: Speaker7 },
    { id: 8, name: "Speaker 8", image: Speaker8 },
    { id: 9, name: "Speaker 9", image: Speaker9 },
  ];

  // Function to go to the next speaker (for mobile)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= speakers.length ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous speaker (for mobile)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? speakers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${IMAGE2})` }}
      className="min-h-screen w-full bg-cover pt-4 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1
          style={{ fontFamily: "Aquire" }}
          className="text-red-600 text-3xl sm:text-5xl md:text-5xl lg:text-6xl mt-8 mb-8 text-center"
        >
          PAST SPEAKERS
        </h1>

        {/* Desktop Grid with Flexbox (3 items per row) */}
        <div className="hidden md:grid grid-cols-3 gap-16 px-9">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="relative rounded-lg overflow-hidden">
              {/* Static Image Inside the Container */}
              <img
                src={speaker.image} // Static placeholder image
                alt={speaker.name}
                className="w-full h-full object-cover rounded-lg transform transition-all duration-500 hover:scale-105 hover:rotate-3d hover:shadow-xl" // Applying 3D effect on hover
              />
            </div>
          ))}
        </div>

        {/* Mobile Single Slide View */}
        <div className="md:hidden relative flex justify-center items-center">
          <div className="relative w-[454px] h-auto overflow-hidden">
            {/* Static Image for Mobile */}
            <img
              src={speakers[currentIndex].image} // Static placeholder image for mobile view
              alt={speakers[currentIndex].name}
              className="w-full h-auto object-contain transform transition-all duration-500 hover:scale-105 hover:rotate-3d hover:shadow-xl" // Applying 3D effect on hover
            />

            {/* Arrow Buttons for Mobile */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Previous speaker"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

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
