import React from "react";


const TeamMemberCard = ({ member, showClub = false }) => {
    return (
        <div className="relative w-48 sm:w-60 h-72 sm:h-80 overflow-hidden bg-white p-4 shadow-md group">
            <div className="h-40 sm:h-48 overflow-hidden relative">
                <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-yellow-500 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="pt-3 relative">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="text-sm sm:text-base font-bold text-[#C10000] group-hover:text-lg transition-all duration-300">
                            {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[#E89005] group-hover:text-sm transition-all duration-300">
                            {member.position}
                        </p>
                        {showClub && (
                            <p className="text-xs sm:text-sm font-bold text-[#E89005] group-hover:text-xs transition-all duration-300">
                                Carrier Development Cell
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;