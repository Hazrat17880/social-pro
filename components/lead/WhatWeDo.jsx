import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

// Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const WhatWeDo = () => {
  return (
    <section className="bg-gray-100 pt-10 flex flex-col items-center">
      
      {/* Header */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full bg-white">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <h1 className={`${roboto.className} text-lg text-gray-600`}>
            What We Do
          </h1>
        </div>
      </header>

      {/* Title & Description */}
      <div className="text-center max-w-3xl px-4">
        <h2
          className={`${roboto.className} text-2xl md:text-3xl font-semibold text-gray-900`}
        >
          How We Are Making Mental Health Support Accessible for All
        </h2>

        <p
          className={`${roboto.className} text-gray-500 mt-4 md:text-lg leading-relaxed`}
        >
          From awareness programs to personalized support, our initiatives are
          designed to touch lives, break stigma, and make mental well-being a
          community priority.
        </p>
      </div>

      {/* Images Section */}
  <div className="flex flex-col md:flex-row gap-6 my-10 w-full max-w-6xl px-4">

  {/* Image 1 */}
  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
    <Image
      src="/images/teaching.jpg"
      alt="Teaching"
      fill
      className="object-cover rounded-2xl"
    />

    {/* Card */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                    md:left-6 md:translate-x-0
                    w-[90%] md:w-[380px]
                    p-5 rounded-2xl
                    bg-black/60 backdrop-blur-md
                    border border-white/10
                    shadow-2xl text-white">
      
      <h2 className={`${roboto.className} text-lg md:text-xl font-semibold mb-2`}>
        Education & Awareness
      </h2>

      <p className={`${roboto.className} text-sm md:text-base text-gray-200 leading-relaxed`}>
        We host community talks, school programs, and social campaigns 
        that make mental health conversations normal and approachable.
      </p>

    </div>
  </div>


  {/* Image 2 */}
  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
    <Image
      src="/images/counseling.jpg"
      alt="Counseling"
      fill
      className="object-cover rounded-2xl"
    />

    {/* Card */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                    md:right-6 md:left-auto md:translate-x-0
                    w-[90%] md:w-[380px]
                    p-5 rounded-2xl
                    bg-black/60 backdrop-blur-md
                    border border-white/10
                    shadow-2xl text-white">
      
      <h2 className={`${roboto.className} text-lg md:text-xl font-semibold mb-2`}>
        Counseling & Support
      </h2>

      <p className={`${roboto.className} text-sm md:text-base text-gray-200 leading-relaxed`}>
        Our safe spaces and peer counseling help individuals 
        navigate anxiety and emotional stress with empathy 
        and understanding.
      </p>

    </div>
  </div>

</div>
    </section>
  );
};

export default WhatWeDo;