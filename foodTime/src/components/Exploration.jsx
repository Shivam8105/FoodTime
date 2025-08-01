import React from 'react';
import "../index.css"; 

const Exploration = () => {
  return (
    <div className='w-full px-6 md:px-16 lg:px-24 py-16 bg-[#F9F5F0] flex flex-col md:flex-row items-center justify-between gap-12'>
      <div className='md:w-1/2'>
        <h2 className='primary-text text-4xl lg:text-5xl text-[#396C03] leading-tight'>
          Explore your <br /> favourite city's food.
        </h2>
        <p className='mt-4 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident, iure quam, voluptates tempora culpa nostrum, amet facere mollitia facilis aliquid. Ratione saepe facilis alias porro explicabo.
        </p>
        <button className='mt-8 bg-[#4A7A0A] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#396C03] transition-colors'>
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
      <div className='md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-auto h-[300px] md:h-[400px] bg-[#F9F5F0]' src="src/assets/cycle.png" alt="Delivery person on a bicycle in a city" />
      </div>

    </div>
  );
};

export default Exploration;