import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#244208] py-10 px-4 md:px-0 text-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-10">
        {/* Brand Section */}
        <div className="md:w-1/3 max-w-full flex flex-col items-start mb-6 md:mb-0">
          <div className="mb-4">
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
        {/* Links Section */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h4 className="font-semibold text-white mb-3">Quick links</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Browse Foodtime</a></li>
              <li><a href="#" className="hover:text-white transition">Browse Food tim</a></li>
              <li><a href="#" className="hover:text-white transition">Registrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">About</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">Minssion</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Social</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-8">
        © 2023 Shivam Kumar ❤️ | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
