import React from "react";

// Dynamically load all images in the partners folder
const importAll = (r) => r.keys().map(r);
const logos = importAll(require.context("../../assets/partners", false, /\.png$/));

const Partners = () => {
  // Duplicate logos to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative bg-cover text-center py-12">
      <h2
        style={{ fontFamily: "Aquire" }}
        className="text-yellow-500 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4"
      >
        OUR PARTNERS
      </h2>
      <div className="overflow-hidden">
        <div className="animate-scroll flex space-x-4">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[100px] flex items-center justify-center bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          width: calc(200px * ${duplicatedLogos.length} + 16px * ${duplicatedLogos.length});
          animation: scroll 14s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;