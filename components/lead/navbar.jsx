"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { Fjalla_One, Bricolage_Grotesque, Roboto } from "next/font/google";

const fjalla = Fjalla_One({ weight: "400", subsets: ["latin"] });
// Bricolage Grotesque supports weights 200–800
const bricolage = Bricolage_Grotesque({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"], // choose the weights you want
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  md:px-8">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/lead-logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col m-0 p-0">
            <Link
              href="/"
              className={`text-3xl font-bold ${bricolage.className} leading-none`} // remove extra line-height
              style={{
                color: "#22c55e",
                letterSpacing: "0.2em", // optional extra spacing
              }}
            >
              LEAD
            </Link>
            {/* <p className="m-0 p-0 leading-none">||||||||||||||||||||||</p> */}
  
<div className="flex gap-[3px] rounded-lg ">
  {/* 1 */}
  <div className="flex flex-col justify-end">
    <div className="h-[12px] w-[3px] bg-lime-400 rounded-sm animate-[flicker-1_0.5s_ease-in-out_infinite_alternate] shadow-[0_0_6px_#a3e635]"></div>
    <div className="h-[4px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_7s_ease-in-out_infinite]"></div>
  </div>

  {/* 2 */}
  <div className="flex flex-col justify-end">
    <div className="h-[6px] w-[3px] bg-green-400 rounded-sm animate-[flicker-2_0.3s_ease-in-out_infinite] shadow-[0_0_6px_#4ade80]"></div>
    <div className="h-[8px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_9s_ease-in-out_infinite_reverse]"></div>
  </div>

  {/* 3 */}
  <div className="flex flex-col justify-end">
    <div className="h-[10px] w-[3px] bg-lime-300 rounded-sm animate-[jitter_0.15s_linear_infinite] shadow-[0_0_5px_#bef264]"></div>
    <div className="h-[6px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_8s_ease-in-out_infinite]"></div>
  </div>

  {/* 4 */}
  <div className="flex flex-col justify-end">
    <div className="h-[5px] w-[3px] bg-green-500 rounded-sm animate-[flicker-1_0.6s_ease-in-out_infinite_alternate] shadow-[0_0_6px_#22c55e]"></div>
    <div className="h-[9px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_10s_ease-in-out_infinite]"></div>
  </div>

  {/* 5 */}
  <div className="flex flex-col justify-end">
    <div className="h-[14px] w-[3px] bg-lime-400 rounded-sm animate-[flicker-3_0.4s_ease-in-out_infinite] shadow-[0_0_8px_#a3e635]"></div>
    <div className="h-[2px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_6s_ease-in-out_infinite]"></div>
  </div>

  {/* 6 */}
  <div className="flex flex-col justify-end">
    <div className="h-[8px] w-[3px] bg-green-300 rounded-sm animate-[jitter_0.2s_linear_infinite] shadow-[0_0_5px_#86efac]"></div>
    <div className="h-[6px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_7.5s_ease-in-out_infinite_reverse]"></div>
  </div>

  {/* 7 */}
  <div className="flex flex-col justify-end">
    <div className="h-[11px] w-[3px] bg-lime-500 rounded-sm animate-[flicker-2_0.45s_ease-in-out_infinite] shadow-[0_0_7px_#84cc16]"></div>
    <div className="h-[3px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_8s_ease-in-out_infinite]"></div>
  </div>

  {/* 8 (center tallest) */}
  <div className="flex flex-col justify-end">
    <div className="h-[16px] w-[3px] bg-green-400 rounded-sm animate-[flicker-3_0.35s_ease-in-out_infinite] shadow-[0_0_9px_#4ade80]"></div>
    <div className="h-[2px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_5s_ease-in-out_infinite]"></div>
  </div>

  {/* 9 */}
  <div className="flex flex-col justify-end">
    <div className="h-[11px] w-[3px] bg-lime-400 rounded-sm animate-[flicker-1_0.5s_ease-in-out_infinite_alternate] shadow-[0_0_7px_#a3e635]"></div>
    <div className="h-[3px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_9s_ease-in-out_infinite_reverse]"></div>
  </div>

  {/* 10 */}
  <div className="flex flex-col justify-end">
    <div className="h-[7px] w-[3px] bg-green-500 rounded-sm animate-[jitter_0.12s_linear_infinite] shadow-[0_0_5px_#22c55e]"></div>
    <div className="h-[7px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_11s_ease-in-out_infinite]"></div>
  </div>

  {/* 11 */}
  <div className="flex flex-col justify-end">
    <div className="h-[13px] w-[3px] bg-lime-300 rounded-sm animate-[flicker-2_0.55s_ease-in-out_infinite] shadow-[0_0_8px_#bef264]"></div>
    <div className="h-[3px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_6.5s_ease-in-out_infinite]"></div>
  </div>

  {/* 12 */}
  <div className="flex flex-col justify-end">
    <div className="h-[6px] w-[3px] bg-green-400 rounded-sm animate-[flicker-3_0.4s_ease-in-out_infinite] shadow-[0_0_6px_#4ade80]"></div>
    <div className="h-[8px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_8s_ease-in-out_infinite_reverse]"></div>
  </div>

  {/* 13 */}
  <div className="flex flex-col justify-end">
    <div className="h-[9px] w-[3px] bg-lime-500 rounded-sm animate-[jitter_0.18s_linear_infinite] shadow-[0_0_6px_#84cc16]"></div>
    <div className="h-[5px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_7s_ease-in-out_infinite]"></div>
  </div>

  {/* 14 */}
  <div className="flex flex-col justify-end">
    <div className="h-[4px] w-[3px] bg-green-300 rounded-sm animate-[flicker-1_0.6s_ease-in-out_infinite_alternate] shadow-[0_0_5px_#86efac]"></div>
    <div className="h-[10px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_12s_ease-in-out_infinite]"></div>
  </div>

  {/* 15 */}
  <div className="flex flex-col justify-end">
    <div className="h-[12px] w-[3px] bg-lime-400 rounded-sm animate-[flicker-2_0.5s_ease-in-out_infinite] shadow-[0_0_7px_#a3e635]"></div>
    <div className="h-[4px] w-[3px] bg-zinc-900 rounded-sm animate-[melt_8s_ease-in-out_infinite_reverse]"></div>
  </div>
</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 font-medium">
          <Link
            href="/" 
            className={`transition bg-gray-50   rounded-full  px-4 py-2 ${roboto.className}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition hover:text-indigo-600 px-4 py-2 ${roboto.className}`}
          >
            What We Do
          </Link>
          <Link
            href="/services"
            className={`transition hover:text-indigo-600 px-4 py-2 ${roboto.className}`}
          >
            Get Involved
          </Link>
          <Link
            href="/services"
            className={`transition hover:text-indigo-600 px-4 py-2 ${roboto.className}`}
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className={`transition hover:text-indigo-600 px-4 py-2 ${roboto.className}`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className={`bg-[#22c55e] text-white px-8 py-4 rounded-[30px]  transition ${roboto.className}`}
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium noto-sans-400">
          <Link href="/" className="block hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-indigo-600">
            About
          </Link>
          <Link href="/services" className="block hover:text-indigo-600">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-indigo-600">
            Contact
          </Link>
          <button className="block bg-[#22c55e] w-full text-white text-center py-2 rounded-xl hover:bg-indigo-700 transition noto-sans-700">
            Donate Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
