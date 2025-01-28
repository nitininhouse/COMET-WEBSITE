import React from "react";
import IMAGE1 from "../../assets/frames/IMAGE1.png";
import VIDEO from "../../assets/speakers/video.mp4";

export default function CometLanding() {
  return (
    <section
      className="min-h-screen pt-8 text-white font-DM Sans"
    >
      <div className="container mx-auto space-y-12 mb-12">
        <h1
          style={{ fontFamily: "Aquire" }}
          className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-center text-[#FFA500] tracking-wider"
        >
          WHO WE ARE
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 ml-12">

        <div className="space-y-10 pr-7">

          <div>
            <h2
              style={{ fontFamily: "Aquire" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#FFA500] mb-4"
            >
              COMET'25
            </h2>

            <p className="text-gray-300 leading-relaxed text-justify">
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                COMET
              </span>
              , short for{" "}
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                Career Orientation and Mentorship for Emerging Talents
              </span>
              , is the flagship initiative of the Career Development Cell at IIT
              Roorkee. Breaking barriers and redefining conventions,{" "}
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                COMET
              </span>{" "}
              serves as a transformative platform to guide students beyond
              traditional career pathways, equipping them with tools, insights,
              and networks to excel in any field of their choice. With a mission
              to foster informed career decisions and interdisciplinary growth,{" "}
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                COMET
              </span>{" "}
              nurtures a thriving ecosystem of mentorship, innovation, and skill
              development. Step into a realm where opportunities abound, and
              career exploration knows no bounds.
            </p>
          </div>

          <div>
            <h2
              style={{ fontFamily: "Aquire" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-[#FFA500] mb-4"
            >
              THINK BEYOND, LEAD BEYOND
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify">
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                COMET'25
              </span>{" "}
              returns on 8th-9th February with the theme{" "}
              <span className="font-bold text-[#FFA500]">
                "Think Beyond, Lead Beyond."
              </span>{" "}
              This two-day Odyssey will feature skill-building workshops,
              adrenaline-pumping competitions, and exclusive fireside chats that
              will push you to break boundaries. Experience thought-provoking
              panel discussions, ignite your creativity during Content Creators
              Day, and engage in vibrant networking opportunities with
              visionaries across fields. Whether you're an aspiring
              entrepreneur, an innovative creator, or someone ready to lead,{" "}
              <span style={{ fontFamily: "Aquire" }} className="text-[#FFA500]">
                COMET'25
              </span>{" "}
              is your gateway to endless possibilities.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-7 mr-14">
          <div className="relative w-full max-w-[650px] mx-auto mb-0">
            {/* Video as the background */}
            <video
              src={VIDEO}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 clip-video"
            />

            {/* Frame overlaying the video */}
            <img
              src={IMAGE1}
              alt="COMET'25 Event"
              className="relative w-full h-auto rounded-lg z-10"
            />
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center w-full">
            <div className="border-2 border-[#DDC3D0] bg-[#DDC3D0] p-4 rounded-lg flex flex-col justify-center items-center">
              <p
                style={{ fontFamily: "Aquire" }}
                className="font-bold text-[#C10000] text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                4K+
              </p>
              <p className="font-bold text-[#C10000] text-sm sm:text-base md:text-lg lg:text-xl">
                Participants
              </p>
            </div>
            <div className="border-2 border-[#DDC3D0] bg-[#DDC3D0] p-4 rounded-lg flex flex-col justify-center items-center">
              <p
                style={{ fontFamily: "Aquire" }}
                className="font-bold text-[#C10000] text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                50+
              </p>
              <p className="font-bold text-[#C10000] text-sm sm:text-base md:text-lg lg:text-xl">
                Events
              </p>
            </div>
            <div className="border-2 border-[#DDC3D0] bg-[#DDC3D0] p-4 rounded-lg flex flex-col justify-center items-center">
              <p
                style={{ fontFamily: "Aquire" }}
                className="font-bold text-[#C10000] text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                25K+
              </p>
              <p className="font-bold text-[#C10000] text-sm sm:text-base md:text-lg lg:text-xl">
                Digital Reach
              </p>
            </div>
            <div className="border-2 border-[#DDC3D0] bg-[#DDC3D0] p-4 rounded-lg flex flex-col justify-center items-center">
              <p
                style={{ fontFamily: "Aquire" }}
                className="font-bold text-[#C10000] text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                40+
              </p>
              <p className="font-bold text-[#C10000] text-sm sm:text-base md:text-lg lg:text-xl">
                Speakers
              </p>
            </div>
            <div className="border-2 border-[#DDC3D0] bg-[#DDC3D0] p-4 rounded-lg flex flex-col justify-center items-center">
              <p
                style={{ fontFamily: "Aquire" }}
                className="font-bold text-[#C10000] text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
              >
                10L+
              </p>
              <p className="font-bold text-[#C10000] text-sm sm:text-base md:text-lg lg:text-xl">
                Worth Prizes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 ">
        <div className="bg-[#DBDAEA] text-[#C10000] py-4 rounded-none w-full overflow-hidden">
          <div className="scrolling-wrapper">
            <span className="scrolling-text">
              COMET&apos;25: THINK BEYOND, LEAD BEYOND • COMET&apos;25: THINK
              BEYOND, LEAD BEYOND • COMET&apos;25: THINK BEYOND, LEAD BEYOND •
              COMET&apos;25: THINK BEYOND, LEAD BEYOND • COMET&apos;25: THINK
              BEYOND, LEAD BEYOND •
            </span>
            <span className="scrolling-text">
              COMET&apos;25: THINK BEYOND, LEAD BEYOND • COMET&apos;25: THINK
              BEYOND, LEAD BEYOND • COMET&apos;25: THINK BEYOND, LEAD BEYOND •
              COMET&apos;25: THINK BEYOND, LEAD BEYOND • COMET&apos;25: THINK
              BEYOND, LEAD BEYOND •
            </span>
          </div>
        </div>
        <style jsx>{`
          .scrolling-wrapper {
            display: flex;
            width: 200%; /* Ensures enough space for two sets of texts */
            animation: scroll 10s linear infinite;
          }

          .scrolling-text {
            display: inline-block;
            white-space: nowrap;
            font-family: "Aquire", sans-serif;
            font-size: 1.125rem; /* Equivalent to text-lg */
            font-weight: 600; /* Equivalent to font-semibold */
            color: #c10000;
            padding-right: 2rem; /* Adds spacing between repetitions */
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
