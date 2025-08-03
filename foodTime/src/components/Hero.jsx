import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#6b914237] relative flex flex-col lg:flex-row items-center justify-center min-h-screen h-full px-6 md:px-16 lg:px-24 py-10 overflow-hidden">
      <img
        src="src/assets/img3.png"
        alt="leaf background"
        className="absolute top-10 left-0 w-48 opacity-60 -z-0"
      />
      <img
        src="src/assets/img2.png"
        alt="leaf background"
        className="hidden lg:block absolute top-10 right-0 w-48 opacity-60 -z-0"
      />

      <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start z-10">
        <h2 className="text-5xl lg:text-6xl font-serif text-[#396C03] font-medium leading-tight primary-text">
          Order food online
          <br /> from your favourite <br /> local restaurants.
        </h2>
        <p className="text-gray-600">
          Freshly made food delivered to your door.
        </p>
        <div className="flex items-center h-14 w-full max-w-md bg-white border border-green-300 rounded-full shadow-sm">
          <span className="pl-4 pr-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <circle cx="12" cy="12" r="8"></circle>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2"></path>
            </svg>
          </span>

          <input
            class="w-full h-full flex-grow bg-transparent text-gray-700 placeholder-gray-500 outline-none"
            type="text"
            placeholder="Enter your location"
          />

          <button
            type="button"
            class="h-full w-30 bg-[#4A7A0A] px-5 text-white font-semibold flex items-center gap-2 flex-shrink-0 hover:bg-[#396C03] transition-colors text-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0 z-10 blur-m">
        <img
          src="src/assets/img1.png"
          alt="Plate of food"
          className="w-full max-w-lg"
        />
        <div className="absolute top-7 right-0.5  p-4 rounded-2xl bg-white/30 shadow-lg backdrop-blur-xs flex items-center gap-4">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Text Content */}
          <div>
            <span className="block text-2xl font-bold text-orange-500">
              200k+
            </span>
            <p className="text-sm text-slate-700">People Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
