import React from "react";
import Image from "next/image";
import { Inconsolata, Cabin, Roboto } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">

      {/* Top Content */}
      <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">

        {/* Badge */}
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src="/images/heroicon.png"
            alt="Hero Icon"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h2
            className={`text-sm md:text-base font-semibold text-gray-700 ${inconsolata.className}`}
          >
            Impacting lives across Africa
          </h2>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <h1
            className={`text-4xl md:text-6xl font-bold leading-tight text-gray-900 ${cabin.className}`}
          >
            Empowering Communities to
          </h1>
          <h1
            className={`text-4xl md:text-6xl font-bold leading-tight text-green-600 ${cabin.className}`}
          >
            Live Above Depression
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
          LEAD Community Foundation is creating awareness, educating
          communities, and offering support to those affected by depression
          and mental health challenges.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button
            className={`bg-green-600 w-[200px] hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-md transition duration-300 ${roboto.className}`}
          >
            Join Our Mission
          </button>

          <button
            className={`border border-gray-300 w-[200px] hover:bg-gray-100 px-8 py-3 rounded-full transition duration-300 ${roboto.className}`}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-16 w-full flex justify-center">
        <Image
          src="/images/hero.PNG"
          alt="Community Support"
          width={1000}
          height={600}
          className="rounded-2xl shadow-xl"
        />
      </div>

    </section>
  );
};

export default Hero;