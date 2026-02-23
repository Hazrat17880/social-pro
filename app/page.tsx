"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-200 transition">About</Link>
          <Link href="/services" className="hover:text-gray-200 transition">Services</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
          <Link href="/dashboard" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My Next.js App 🚀
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            This is your simple home page. From here you can navigate to
            different sections of your application.
          </p>

          <div className="space-x-4">
            <Link href="/services">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Explore Services
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-200 text-sm">
        © 2026 MyApp. All rights reserved.
      </footer>
    </div>
  );
}