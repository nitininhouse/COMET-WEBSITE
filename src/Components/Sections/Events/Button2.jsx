import React from 'react';

const DateButton2 = () => {
  return (
    <div className="mt-8  flex justify-center items-center">
      <div className="relative">
        {/* Main button */}
        <div className="bg-[#C10000] text-white text-3xl font-bold px-8 py-4 rounded-lg">
          9th February
        </div>
        
        {/* Blue border effect */}
        <div className="absolute  rounded-lg -z-10"></div>
      </div>
    </div>
  );
};

export default DateButton2;