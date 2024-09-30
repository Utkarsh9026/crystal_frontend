import React from "react";
import bgimage from "../assets/img.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen bg-gradient-to-r from-[#01F0FF] via-[#FA7FFD] to-[#01F0FF] px-4 sm:px-8 gap-8 lg:gap-0">
      {/* Left Section: Text */}
      <div className="flex flex-col space-y-4 mt-9 lg:mt-0 sm:space-y-6 max-w-full lg:max-w-lg">
        <h1 className="text-4xl md:text-6xl text-white">
          <span className="text-4xl text-white">Welcome to</span> <br />
          <span className="whitespace-nowrap text-white font-normal">
            Pop Rock Crystal Shop!
          </span>
        </h1>
        <p className="text-black text-base sm:text-lg md:text-lg">
          Here you will find unique phone accessories, crystals, jewelry, and
          more. Free shipping inside the U.S., and our phone grips come with a
          limited warranty. Enjoy!
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 sm:space-x-6">
          <button className="bg-white text-[#317189] font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-blue-100 transition">
            SHOP NOW
          </button>
          <button className="text-white hover:underline">about us</button>
        </div>
      </div>

      {/* Right Section: Product Display */}
      <div className="relative w-full lg:w-96 h-64 lg:h-96 bg-white rounded-3xl shadow-lg p-4 sm:p-6 mt-8 mb-8 lg:mt-0">
        <span className="absolute top-4 left-4 bg-[#8A93E5] text-white text-sm px-2 sm:px-3 py-1 rounded-full">
          New lot
        </span>
        <img
          src={bgimage}
          alt="Crystal Agate Phone Grip"
          className="w-full h-full object-contain"
        />
        <div className="text-center">
          <p className="text-[#317189] font-sans font-semibold">
            CRYSTAL AGATE PHONE GRIP -
            <span className="text-blue-600">18.99$</span>
          </p>
        </div>

        <div className="absolute lg:static bottom-8 lg:bottom-0 right-8 lg:right-0 flex justify-center items-center space-x-2 mt-6 lg:mt-4">
          <button className="bg-purple-500 text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3 h-3"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-1">
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 1 ? "bg-purple-500" : "bg-purple-200"
                }`}
              />
            ))}
          </div>
          <button className="bg-purple-500 text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-3 h-3"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
