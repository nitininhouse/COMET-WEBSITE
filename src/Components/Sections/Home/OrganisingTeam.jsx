import React from "react";
import TeamMemberCard from "../../Common/TeamMemberCard";

const OrganisingTeam = () => {
  const teamMembers = [
    { id: 1, name: "Ankit Lal", position: "Convener", img: require("../../../assets/team/1.jpg") },
    { id: 2, name: "Chaitanya Gupta ", position: "Co-Convener", img: require("../../../assets/team/2.jpg") },
    { id: 3, name: "Ashwani Shankar", position: "Co-Convener", img: require("../../../assets/team/3.jpg") },
    { id: 4, name: "Shaswat Pandey", position: "Co-Convener", img: require("../../../assets/team/4.jpg") },
    { id: 5, name: "Sarthak Warade", position: "Events Head", img: require("../../../assets/team/5.jpg") },
    { id: 6, name: "Renu", position: "Head of Marketing", img: require("../../../assets/team/6.jpg") },
    { id: 7, name: "Smrutisriya Bisoyi", position: "Head of Sponsorship", img: require("../../../assets/team/7.jpg") },
    { id: 8, name: "Mansi Bansal", position: "Head of Outreach", img: require("../../../assets/team/8.jpg") },
    { id: 9, name: "Aarsh Choudhary", position: "General Secretary", img: require("../../../assets/team/11.png") },
    { id: 10, name: "Dayal Dewasi ", position: "Office Superintendent", img: require("../../../assets/team/10.jpg") },
    { id: 11, name: "Dr. Rajat Rastogi", position: "Professor-In-Charge", img: require("../../../assets/team/9.jpg") },
    { id: 12, name: "Gaurav ", position: "Head of Promotions", img: require("../../../assets/team/12.png") },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 py-12">
      <div className="container mx-auto">
        <h1
          style={{ fontFamily: "Aquire" }}
          className="mb-8 text-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-[#FFA500]"
        >
          ORGANISING TEAM
        </h1>

        <div className="grid gap-6">
          {/* First Row - Single Larger Member (Team Lead) */}
          <div className="flex justify-center mb-8 sm:mb-20">
            <TeamMemberCard member={teamMembers[0]} />
          </div>

          {/* Second Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-12">
            {teamMembers.slice(1, 4).map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Third Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-12 mt-4 sm:mt-8">
            {teamMembers.slice(4, 7).map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Fourth Row - 2 Smaller Members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-12 mt-4 sm:mt-8">
            <TeamMemberCard member={teamMembers[7]} />
            <TeamMemberCard member={teamMembers[11]} />
          </div>

          {/* Fifth Row - 3 Smaller Members */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-12 mt-4 sm:mt-8">
            {teamMembers.slice(8, 11).map((member) => (
              <TeamMemberCard key={member.id} member={member} showClub={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisingTeam;