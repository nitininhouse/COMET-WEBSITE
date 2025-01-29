import React from 'react';

const DateButton = () => {
  return (
    <div className="mt-14  flex justify-center items-center">
      <div className="relative">
        {/* Main button */}
        <div className="bg-[#E89005] text-white text-3xl font-bold px-8 py-4 rounded-lg">
          8th February
        </div>
        
        {/* Blue border effect */}
        <div className="absolute  rounded-lg -z-10"></div>
      </div>
    </div>
  );
};

export default DateButton;