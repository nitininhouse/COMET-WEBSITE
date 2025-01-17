import React from "react";
import IMAGE2 from "../assets/backgrounds/IMAGE2.png";

const Partners = () => {
  return (
    <div style={{ backgroundImage: `url(${IMAGE2})` }}  className="relative bg-cover text-center py-12">
      <h2  style={{ fontFamily: "Aquire" }} className="text-yellow-500 font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4">OUR PARTNERS</h2>
      <div className="overflow-hidden">
        <div
          className="flex space-x-4 animate-scroll"
          style={{ animation: "scroll 10s linear infinite" }}
        >
          {/* Example boxes */}
          {Array(10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="min-w-[200px] h-[100px] bg-gray-300 rounded-lg shadow-lg"
              ></div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;
