"use client";

import React from "react";
import Image from "next/image";
import { Inter , Cabin } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const GetInvolved = () => {
  const cards = [
    {
      title: "Volunteer",
      description: "Join hands with us to create meaningful change in communities.",
      image: "/images/volunter.jpg",
    },
    {
      title: "Donate",
      description: "Support our mission financially to help us reach more people.",
      image: "/images/donate.jpg",
    },
    {
      title: "Events",
      description: "Participate in events that empower individuals and communities.",
      image: "/images/partner.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-16 bg-gray-100 py-16 px-4">
      
      {/* Header Badge */}
       <div className="flex items-center gap-3 border-l-3 border-r-3  rounded-full px-8 py-4 bg-white shadow-sm">
        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        <h2 className={`${inter.className} text-sm font-medium text-gray-700`}>
          Get Involved
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mt-8 max-w-3xl">
        <h1 className={`${inter.className} text-3xl md:text-4xl font-semibold text-gray-900`}>
          Join Us In Changing Lives
        </h1>
        <p className={`${inter.className} mt-4 text-gray-600 text-base leading-relaxed`}>
          Be part of a mission that creates lasting impact in communities. Together, 
          we can empower individuals and shape a brighter future.
        </p>
      </div>

      {/* Bottom Cards */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-full max-w-6xl">
  {cards.map((card, idx) => (
    <div
      key={idx}
      className="relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 blur-[1px]"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/80" />

      {/* Arrow Icon Top Right */}
      <div className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 group-hover:scale-110">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-orange-600 text-sm transition-transform duration-300 group-hover:-translate-y-1"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-6 z-10">
        <h2
          className={`${inter.className} text-2xl font-semibold text-white tracking-wide`}
        >
          {card.title}
        </h2>

        <p
          className={`${inter.className} text-white/90 mt-3 text-sm leading-relaxed`}
        >
          {card.description}
        </p>
      </div>
    </div>
  ))}
</div>

<div className="my-8 bg-[#22c55e] rounded-4xl inline-block">
  <button
    className={`${inter.className} px-6 py-4 text-white font-semibold tracking-wide cursor-pointer hover:bg-green-600 transition-all duration-300 rounded-3xl`}
  >
    Become a Part of Lead
  </button>
</div>
    </div>
  );
};

export default GetInvolved;