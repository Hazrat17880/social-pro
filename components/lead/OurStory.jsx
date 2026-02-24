import React from "react";
import { Montserrat, Roboto } from "next/font/google";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

// Font configurations with optimized loading
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-roboto",
});

/**
 * OurStory component - Displays the foundation's story and mission
 *
 */
const OurStory = () => {
  return (
    <section
      className="flex flex-col items-center justify-center md:pt-12 px-4"
      aria-labelledby="our-story-heading"
    >
      {/* Section Header */}
      <header className="mb-6">
        <div
          className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-gray-600 rounded-[20px] bg-white"
          role="presentation"
        >
          <div
            className="w-3 h-3 bg-gray-600 rounded-full"
            aria-hidden="true"
          ></div>

          <h1
            id="our-story-heading"
            className={`${roboto.className} text-xl font-semibold text-gray-600 `}
            
          >
            Our Story
          </h1>
        </div>
      </header>
      {/* Section Content */}
      <div className="max-w-3xl mx-auto text-center">
        <p
          className={`${roboto.className} text-lg md:text-xl leading-relaxed px-12`}
        >
          Since 2016, LEAD Community Foundation has been dedicated to building
          mentally healthy communities
          <span className="mt-2 text-gray-400">
            by educating the public, challenging stigma, and connecting
            individuals facing depression
            <br /> and anxiety with supportive resources.
          </span>
        </p>
      </div>
      {/* the diary type style  */}

      <div className="flex flex-col md:flex-row gap-6 my-12 max-w-6xl mx-auto px-4">
        {/* Mission Card */}
        <div className="flex-1 bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              To educate, engage, and empower individuals and communities by
              raising awareness about depression, challenging misconceptions,
              and connecting people to accessible mental health support through
              advocacy, outreach, and education.
            </p>
          </div>

          {/* Bottom Design */}
          <div className="flex items-center justify-between mt-6">
            {/* Accent Corner */}
            <div className="w-16 h-16 border-l-4 border-b-4 border-blue-600 rounded-bl-xl"></div>

            {/* Image */}
            <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm">
              <Image
                src="/images/vission.png"
                alt="Mission Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="flex-1 bg-orange-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A world where everyone can seek mental health support without fear
              or judgment, where communities are informed, compassionate, and
              empowered to help individuals live healthier, happier lives.
            </p>
          </div>

          {/* Bottom Design */}
          <div className="flex items-center justify-between mt-6">
              {/* Image */}
            <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm">
              <Image
                src="/images/mission.png"
                alt="Vision Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            {/* Accent Corner */}
            <div className="w-16 h-16 border-r-4 border-b-4 border-orange-500 rounded-bl-xl"></div>

          
          </div>
        </div>
      </div>
      <div className="my-5">
        <button
          className={` cursor-pointer bg-[#22c45e] text-white px-8 py-4 rounded-[30px]  transition ${roboto.className}`}
        >
          Read More
        </button>
      </div>
      {/* Diary section is here  */}
<div className="hidden md:flex md:flex-col">


  
      <div className="hidden md:flex items-center relative bottom-[415px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>

        <div className="hidden md:flex items-center relative bottom-[405px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>

        <div className="hidden md:flex items-center relative bottom-[395px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>

        <div className="hidden md:flex items-center relative bottom-[385px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>
   
  <div className="hidden md:flex items-center relative bottom-[375px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>
      

       <div className="hidden md:flex items-center relative bottom-[365px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>
        <div className="hidden md:flex items-center relative bottom-[355px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>
        <div className="hidden md:flex items-center relative bottom-[345px] left-[-5px]">
        {/* left side  */}
        <div className="w-4 h-6 border border-4 relative top-0 left-3 rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>

        {/* center div  */}
        <div className="w-[45px] h-3 bg-gray-200  rounded-md"></div>
        <div className="w-4 h-6 border border-4 relative top-0 left-[-4] rounded-[30px] border-gray-200 bg-gray-200 border-0.5 "></div>
      </div>

      
</div>
    </section>
  );
};

export default OurStory;
