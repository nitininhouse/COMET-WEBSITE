import React from "react";

const Partners = () => {
  // Generate array of logo paths dynamically based on sequential naming
  const logoCount = 20; // Update this to match the total number of logos
  const logos = Array.from({ length: logoCount }, (_, index) => 
    require(`../assets/partners/${index + 1}.png`)
  );

  return (
    <div className="relative bg-cover text-center py-12">
      <h2
        style={{ fontFamily: "Aquire" }}
        className="text-yellow-500 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4"
      >
        OUR PARTNERS
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex space-x-4 animate-scroll"
          style={{ animation: "scroll 10s linear infinite" }}
        >
          {/* Render logos */}
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[100px] flex items-center justify-center bg-white rounded-lg shadow-lg"
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
        .animate-scroll {
          display: flex;
          width: calc(200px * ${logos.length * 2} + 4px * ${logos.length * 2});
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
