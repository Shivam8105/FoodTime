import React from "react";

const Features = () => {
  return (
  <div className="px-6 py-16 space-y-16">
    <div className="flex flex-col justify-center sm:flex-wrap items-center p-2 mb-35 md:flex-row md:justify-around gap-6 ">
      <div className="hover:bg-[#497a0a22] rounded-2xl h-[250px] p-6 w-[350px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="relative bottom-3 " width="50" height="50" fill="#4B5320">
          <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" />
        </svg>
        <h3 className="text-2xl font-bold">Wide selection of restaurants</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Qui voluptatum voluptates
        </p>
      </div>

      <div className="hover:bg-[#497a0a22] rounded-2xl h-[250px] p-6 w-[350px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="relative bottom-3 " width="50" height="50" fill="#4B5320"><path d="M144 128C144 92.7 172.7 64 208 64L432 64C467.3 64 496 92.7 496 128L496 512C496 547.3 467.3 576 432 576L208 576C172.7 576 144 547.3 144 512L144 128zM256 504C256 517.3 266.7 528 280 528L360 528C373.3 528 384 517.3 384 504C384 490.7 373.3 480 360 480L280 480C266.7 480 256 490.7 256 504zM432 128L208 128L208 432L432 432L432 128z"/></svg>
        <h3 className="text-2xl font-bold">Easy Ordering Process</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Qui voluptatum voluptates
        </p>
      </div>

      {/* Feature 3 */}
      <div className="hover:bg-[#497a0a22] rounded-2xl h-[250px] p-6 w-[350px]">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="relative bottom-3 " width="50" height="50" fill="#4B5320"><path d="M32 160C32 124.7 60.7 96 96 96L384 96C419.3 96 448 124.7 448 160L448 192L498.7 192C515.7 192 532 198.7 544 210.7L589.3 256C601.3 268 608 284.3 608 301.3L608 448C608 483.3 579.3 512 544 512L540.7 512C530.3 548.9 496.3 576 456 576C415.7 576 381.8 548.9 371.3 512L268.7 512C258.3 548.9 224.3 576 184 576C143.7 576 109.8 548.9 99.3 512L96 512C60.7 512 32 483.3 32 448L32 160zM544 352L544 301.3L498.7 256L448 256L448 352L544 352zM224 488C224 465.9 206.1 448 184 448C161.9 448 144 465.9 144 488C144 510.1 161.9 528 184 528C206.1 528 224 510.1 224 488zM456 528C478.1 528 496 510.1 496 488C496 465.9 478.1 448 456 448C433.9 448 416 465.9 416 488C416 510.1 433.9 528 456 528z"/></svg>
        <h3 className="text-2xl font-bold">Fast delivery within 20 min</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Qui voluptatum voluptates
        </p>
      </div>
    </div>
    <div className="rounded-3xl relative overflow-hidden">
      <img
        src="src/assets/image 3.png"
        alt="Kitchen background"
        className="w-[100%] md:w-[80%] h-[500px] object-cover rounded-3xl mx-auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 to-transparent rounded-3xl flex flex-col items-center justify-end p-10 w-[80%] mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 text-center">
          Want to be a part of Foodtime?
        </h2>
        <p className="text-white mb-4 text-center">
          List your restaurant or shop on foodtime.
        </p>
        <button className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
          Get started →
        </button>
      </div>
    </div>
    </div>
  );
};

export default Features;

