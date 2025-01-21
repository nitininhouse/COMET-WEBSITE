import React from "react";
import alicePhoto from "../assets/team/1.jpeg";
import bobPhoto from "../assets/team/2.JPG";
import carolPhoto from "../assets/team/3.jpg";
import davidPhoto from "../assets/team/4.jpg";
import evaPhoto from "../assets/team/5.JPG";
import frankPhoto from "../assets/team/6.jpeg";
import gracePhoto from "../assets/team/7.jpeg"; // 7th person
import IMAGE2 from "../assets/backgrounds/IMAGE2.png";


const people = [
  {
    id: 1,
    name: "Ankit Lal",
    position: "Convenor",
    number: "9958718768",
    photoUrl: alicePhoto,
  },
  {
    id: 2,
    name: "Ashwani Shankar",
    position: "Co-convenor",
    number: "9971719553",
    photoUrl: bobPhoto,
  },
  {
    id: 3,
    name: "Dayal Dewasi ",
    position: "Office Superintendent",
    number: "+91-1332-284432",
    photoUrl: carolPhoto,
  },
  {
    id: 4,
    name: "Chaitanya Gupta",
    position: "Co-Convenor ",
    number: "6353349566",
    photoUrl: davidPhoto,
  },
  {
    id: 5,
    name: "Sarthak Warade",
    position: "Events Head",
    number: "9131654619",
    photoUrl: evaPhoto,
  },
  {
    id: 6,
    name: "Smrutisriya Bisoyi",
    position: "Head of Sponsorship",
    number: "7846963005",
    photoUrl: frankPhoto,
  },
  {
    id: 7,
    name: "Mansi Bansal",
    position: "Head of Outreach",
    number: "8968168872",
    photoUrl: gracePhoto,
  },
];

const ResponsiveTeamGrid = () => {
  return (
    <div  style={{
        backgroundImage: `url(${IMAGE2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "Aquire" }}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center text-yellow-500 mb-8"
        >
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {people.slice(0, 6).map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={person.photoUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {person.name}
                </h3>
                <p style={{ fontFamily: "Aquire" }} className="text-sm text-gray-600 mt-1">{person.position}</p>
                <p className="text-xs text-gray-500 mt-2">{person.number}</p>
              </div>
            </div>
          ))}
          {/* Empty grid item to center the 7th person */}
          <div className="hidden md:block"></div>
          {/* 7th person in the middle */}
          <div
            key={people[6].id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={people[6].photoUrl}
                alt={people[6].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {people[6].name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {people[6].position}
              </p>
              <p className="text-xs text-gray-500 mt-2">{people[6].number}</p>
            </div>
          </div>
          {/* Empty grid item to center the 7th person */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTeamGrid;
