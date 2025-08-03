import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#244208] py-14 px-4 md:px-0 text-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Description */}
        <div className="md:w-1/3">
          {/* Use your logo image here: */}
          <div className="mb-3">
            <img
              src="src/assets/Group 1.png" 
              alt="FoodTime Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-300 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
          </p>
        </div>
        {/* Quick Links, About, Social */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h4 className="font-semibold text-white mb-3">Quick links</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white">Browse Foodtime</a></li>
              <li><a href="#" className="hover:text-white">Browse Food tim</a></li>
              <li><a href="#" className="hover:text-white">Registrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">About</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Minssion</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Social</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer base */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © 2023 Shivam Kumar ❤️ | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
