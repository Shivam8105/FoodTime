
import React from 'react';

function FoodAppPromo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#f9eeda] p-6 md:p-12 rounded-2xl shadow-lg">
      <div className="flex-1 w-full md:w-auto md:pr-12 mb-8 md:mb-0">
        <h2 className="text-green-800 text-2xl md:text-3xl font-bold mb-4">
          Put us in your pocket
        </h2>
        <p className="text-gray-700 text-base mb-8">
          Download our app from google play or app <br/>store and you don&apos;t have to be worry about <br/>your food anymore.
        </p>
        <div className="flex gap-6">
          <a href="#">
            <img src="src/assets/app.png" alt="App Store" className="w-40 rounded-lg shadow transition-transform hover:scale-105" />
          </a>
          <a href="#">
            <img src="src/assets/google.png" alt="Google Play" className="w-40 rounded-lg shadow transition-transform hover:scale-105" />
          </a>
        </div>
      </div>
      <div
        className="flex-1 w-full md:w-auto flex items-center justify-center min-h-[370px] rounded-2xl relative bg-cover bg-center"
        style={{ backgroundImage: `url('src/assets/foodPromo.png')` }}
      >
      </div>
    </div>
  );
}

export default FoodAppPromo;