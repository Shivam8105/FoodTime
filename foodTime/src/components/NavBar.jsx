import React from "react";
import "../index.css";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-[#6b914237] relative transition-all z-20">
      <img src="src/assets/FoodTime.png" alt="foodTime" />
      <div className="hidden sm:flex items-center gap-8">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About us</a>
        <a href="#">
          EN
          <img
            className="w-3 inline-block ml-1 mb-1"
            src="src/assets/arrow-down.png"
            alt="arrow-down"
          />
        </a>

        <button className="cursor-pointer px-8 py-2 hover:bg-indigo-600 transition text-white rounded-full bg-[#396C03]">
          Login
        </button>
        <div className="relative cursor-pointer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            className="bg-[#396C03] rounded-full w-9 h-9 p-1 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="#fff"
              strokeWidth="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-yellow-500 w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>
      </div>
      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          Blog
        </a>
        <a href="#" className="block">
          About us
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
