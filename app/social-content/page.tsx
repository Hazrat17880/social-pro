"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import html2canvas from "html2canvas"

export default function UrduCardPage() {
  const [input, setInput] = useState("")
  const [cardText, setCardText] = useState("")
  const [cardStyle, setCardStyle] = useState("floral")
  const [textColor, setTextColor] = useState("#1F2937")

  const cardRef = useRef(null)

  const handleUpdate = () => {
    setCardText(input)
  }

  const handleDownload = async () => {
    if (!cardRef.current) {
      alert("Card not ready")
      return
    }

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, // HD quality
        useCORS: true,
        backgroundColor: null,
      })

      const image = canvas.toDataURL("image/png")

      const link = document.createElement("a")
      link.href = image
      link.download = "urdu-card.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error("Download error:", err)
      alert("Download failed")
    }
  }

 const cardBackgrounds = {
  floral: "linear-gradient(135deg, #FEF3C7, #FFEDD5)",
  elegant: "linear-gradient(135deg, #F8FAFC, #E5E7EB)",
  vibrant: "linear-gradient(135deg, #FCE7F3, #E9D5FF)",
  nature: "linear-gradient(135deg, #DCFCE7, #D1FAE5)",
  ocean: "linear-gradient(135deg, #DBEAFE, #CFFAFE)",
}

  const cardPatterns = {
    floral: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23f59e0b\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
    elegant: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
    vibrant: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ec4899\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
    nature: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2310b981\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
    ocean: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2306b6d4\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')"
  }

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E0E7FF, #F3E8FF, #FCE7F3)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-15 blur-3xl"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mb-3">
            Urdu Card Generator
          </h1>
          <p className="text-gray-600 text-lg">Create beautiful Urdu poetry cards with custom designs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50"
          >
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Urdu Poetry Text
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="یہاں اردو شاعری پیسٹ کریں..."
                className="w-full h-40 p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                Card Style
              </label>
              <div className="flex gap-3 flex-wrap">
                {Object.keys(cardBackgrounds).map((style) => (
                  <button
                    key={style}
                    onClick={() => setCardStyle(style)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      cardStyle === style
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Text Color
              </label>
              <div className="flex gap-3">
                {["#1F2937", "#7C2D12", "#7E22CE", "#166534", "#1E40AF"].map(
                  (color) => (
                    <button
                      key={color}
                      onClick={() => setTextColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                        textColor === color ? "border-gray-800 scale-110 shadow-lg" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Update Card
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download Card
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50 flex justify-center items-center"
          >
            {cardText ? (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-80 h-80 rounded-3xl shadow-2xl p-8 flex items-center justify-center text-center relative overflow-hidden"
                style={{
                  background: cardBackgrounds[cardStyle],
                  backgroundImage: cardPatterns[cardStyle],
                  backgroundSize: 'cover'
                }}
                dir="rtl"
              >
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gray-300 opacity-50"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gray-300 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gray-300 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gray-300 opacity-50"></div>

                {/* Decorative circles */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20 blur-xl"></div>
                <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-pink-400 opacity-20 blur-xl"></div>
                <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 opacity-15 blur-xl"></div>

                <p
                  className="text-2xl font-bold leading-relaxed relative z-10"
                  style={{
                    color: textColor,
                    fontFamily: "'Noto Nastaliq Urdu', serif",
                    textShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {cardText}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
              </motion.div>
            ) : (
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <p className="text-gray-400 text-center font-medium">Your card preview will appear here</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}