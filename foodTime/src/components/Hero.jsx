import React from "react";

const Hero = () => {
  return (
    // Added `relative` for positioning child elements and `overflow-hidden` to contain them
    <div className="bg-[#6b914237] relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 py-10 overflow-hidden">
      
      {/* Decorative leaves are now positioned absolutely so they don't break the layout */}
      <img src="src/assets/img3.png" alt="leaf background" className="absolute top-10 left-0 w-48 opacity-60 -z-0" />
      <img src="src/assets/img2.png" alt="leaf background" className="hidden lg:block absolute top-10 right-0 w-48 opacity-60 -z-0" />

      {/* Left Column: z-10 keeps it above the background leaves */}
      <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start z-10">
        <h2 className="text-5xl lg:text-6xl font-serif text-[#396C03] font-medium leading-tight primary-text">
          Order food online
          <br /> from your favourite <br /> local restaurants.
        </h2>
        <p className="text-gray-600">Freshly made food delivered to your door.</p>
        <div className="flex items-center h-14 w-full max-w-md bg-white border border-gray-200 rounded-full shadow-sm p-2">
          {/* Changed icon color to orange */}
          <span className="pl-3 pr-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="12" cy="12" r="8"></circle>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
            </svg>
          </span>
          <input
            className="outline-none h-full w-full flex-grow bg-transparent text-gray-700"
            type="text"
            placeholder="Enter your location"
          />
          <button
            type="button"
            className="h-13 px-6 text-white font-medium bg-[#396C03] rounded-full flex-shrink-0"
          >
            Search
          </button>
        </div>
      </div>

      {/* Right Column: z-10 keeps it above the background leaves */}
      <div className="lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0 z-10">
        <img src="src/assets/img1.png" alt="Plate of food" className="w-full max-w-lg" />
        
        {/* Updated badge to include the checkmark icon */}
        <div className="absolute top-4 left-4 sm:left-10 bg-white p-3 rounded-full shadow-lg flex items-center gap-2">
          <span className="text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </span>
          <div>
            <span className="text-xl font-bold text-orange-500">200k+</span>
            <p className="text-sm text-gray-600 leading-tight">People Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;