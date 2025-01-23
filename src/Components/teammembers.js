import React from "react";

const teamMembers = [
  { id: 1, name: "Ankit Lal", position: "Convener", img: require("../assets/team/1.jpeg") },
  { id: 2, name: "Chaitanya Gupta ", position: "Co-Convener", img: require("../assets/team/2.jpg") },
  { id: 3, name: "Ashwani Shankar", position: "Co-Convener", img: require("../assets/team/3.JPG") },
  { id: 4, name: "Shaswat Pandey", position: "Co-Convener", img: require("../assets/team/4.jpeg") },
  { id: 5, name: "Sarthak Warade", position: "Events Head", img: require("../assets/team/5.JPG") },
  { id: 6, name: "Renu", position: "Head of Marketing", img: require("../assets/team/6.jpeg") },
  { id: 7, name: "Smrutisriya Bisoyi", position: "Head of Sponsorship", img: require("../assets/team/7.jpeg") },
  { id: 8, name: "Mansi Bansal", position: "Head of Outreach", img: require("../assets/team/8.jpeg") },
  { id: 9, name: "Dr. Rajat Rastogi", position: "Professor-In-Charge", img: require("../assets/team/9.jpg") },
  { id: 10, name: "Dayal Dewasi ", position: "Office Superintendent", img: require("../assets/team/10.jpg") },
  { id: 11, name: "Aarsh Choudhary", position: "General Secretary", img: require("../assets/team/11.png") },
];

const TeamGrid = () => {
  return (
    <div className="min-h-screen px-8 py-12">
      <div className="container mx-auto">
        <h1
          style={{ fontFamily: "Aquire" }}
          className="mb-8 text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-[#FFA500]"
        >
          ORGANISING TEAM
        </h1>

        {/* Grid Container */}
        <div className="grid gap-6">
          {/* First Row - Single Larger Member (Team Lead) */}
          <div className="flex justify-center mb-20">
            <div className="w-64 h-80 overflow-hidden bg-white p-4 shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={teamMembers[0].img}
                  alt={teamMembers[0].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="text-lg font-bold text-[#C10000]">{teamMembers[0].name}</h3>
                <p className="text-sm font-bold text-[#E89005]">{teamMembers[0].position}</p>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-around px-12">
            {teamMembers.slice(1, 4).map((member) => (
              <div
                key={member.id}
                className="w-60 h-80 overflow-hidden bg-white p-4 shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-3 text-center">
                  <h3 className="text-lg font-bold text-[#C10000]">{member.name}</h3>
                  <p className="text-sm font-bold text-[#E89005]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-around px-12">
            {teamMembers.slice(4, 7).map((member) => (
              <div
                key={member.id}
                className="w-60 h-80 overflow-hidden bg-white p-4 shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-3 text-center">
                  <h3 className="text-lg font-bold text-[#C10000]">{member.name}</h3>
                  <p className="text-sm font-bold text-[#E89005]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fourth Row - Single Centered Member */}
          <div className="flex justify-center px-12">
            <div className="w-60 h-80 overflow-hidden bg-white p-4 shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src={teamMembers[7].img}
                  alt={teamMembers[7].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="text-lg font-bold text-[#C10000]">{teamMembers[7].name}</h3>
                <p className="text-sm font-bold text-[#E89005]">{teamMembers[7].position}</p>
              </div>
            </div>
          </div>

          {/* Fifth Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-around px-12">
            {teamMembers.slice(8).map((member) => (
              <div
                key={member.id}
                className="w-60 h-80 overflow-hidden bg-white p-4 shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pt-3 text-center">
                  <h3 className="text-lg font-bold text-[#C10000]">{member.name}</h3>
                  <p className="text-sm font-bold text-[#E89005]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
