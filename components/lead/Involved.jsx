"use client";

import React from "react";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faBuilding,
  faGlobeAsia,
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Involved = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 px-4">
      
      {/* Badge */}
      <div className="flex items-center border rounded-full gap-3 px-5 py-2 shadow-sm bg-white">
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        <h1 className={`${inter.className} text-lg font-medium`}>
          Amount
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center mt-6">
        <h1 className={`${inter.className} text-3xl md:text-4xl font-semibold py-4`}>
          Every Number Represents a Life Touched
        </h1>

        <p className="max-w-2xl text-gray-500 text-base leading-relaxed">
          Behind every statistic is a real person whose story has been impacted
          through care, support, and dedication. Our mission is to create
          meaningful change that extends far beyond the numbers.
        </p>
      </div>

      {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
  
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md h-[120px] px-5 flex justify-between items-center hover:shadow-xl transition duration-300">
    <div className="flex flex-col text-left">
      <h2 className="text-2xl font-bold text-gray-700">5000+</h2>
      <p className="text-gray-500 text-sm mt-1 text-shadow-md">
        People <br /> Educated
      </p>
    </div>
    <FontAwesomeIcon
      icon={faGraduationCap}
      className="text-[#22c55e] text-6xl"
    />
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md h-[120px] px-5 flex justify-between items-center hover:shadow-xl transition duration-300">
    <div className="flex flex-col text-left">
      <h2 className="text-2xl font-bold text-gray-700">150+</h2>
      <p className="text-gray-500 text-sm mt-1 text-shadow-md">
        Courses <br /> Supported
      </p>
    </div>
    <FontAwesomeIcon
      icon={faBookOpen}
      className="text-yellow-400 text-6xl"
    />
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md h-[120px] px-5 flex justify-between items-center hover:shadow-xl transition duration-300">
    <div className="flex flex-col text-left">
      <h2 className="text-2xl font-bold text-gray-700">100+</h2>
      <p className="text-gray-500 text-sm mt-1 text-shadow-md">
        Company <br /> Events
      </p>
    </div>
    <FontAwesomeIcon
      icon={faBuilding}
      className="text-orange-400 text-6xl"
    />
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl shadow-md h-[120px] px-5 flex justify-between items-center hover:shadow-xl transition duration-300">
    <div className="flex flex-col text-left">
      <h2 className="text-2xl font-bold text-gray-700">5+</h2>
      <p className="text-gray-500 text-sm mt-1 text-shadow-md">
        Asian <br /> Countries
      </p>
    </div>
    <FontAwesomeIcon
      icon={faGlobeAsia}
      className="text-blue-600 text-6xl"
    />
  </div>

</div>
    </div>
  );
};

export default Involved;