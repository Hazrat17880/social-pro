"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import html2canvas from "html2canvas"

export default function UrduCardPage() {
  const [input, setInput] = useState("")
  const [cardText, setCardText] = useState("")
  const [cardStyle, setCardStyle] = useState("floral")
  const [textColor, setTextColor] = useState("#1F2937")
  const [isDownloading, setIsDownloading] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleUpdate = () => {
    setCardText(input)
  }

  const handleDownload = async () => {
  if (!cardRef.current) return alert("Card not ready")

  setIsDownloading(true)

  // Temporarily replace gradient text with solid color
  const footerText = cardRef.current.querySelector("p") // adjust selector if needed
  const originalColor = footerText?.style.background
  if (footerText) {
    footerText.style.background = "none"
    footerText.style.color = "#a855f7" // fallback solid color
    footerText.style.WebkitBackgroundClip = "unset"
    footerText.style.WebkitTextFillColor = "unset"
  }

  try {
    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      allowTaint: true,
      scrollY: -window.scrollY,
    })

    const image = canvas.toDataURL("image/png", 1.0)
    const link = document.createElement("a")
    link.href = image
    link.download = "urdu-card.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (err) {
    console.error(err)
    alert("Download failed")
  } finally {
    // Restore gradient
    if (footerText && originalColor) footerText.style.background = originalColor
    setIsDownloading(false)
  }
}

  const cardBackgrounds = {
    floral: "#fef3c7",
    elegant: "#f8fafc",
    vibrant: "#fce7f3",
    nature: "#dcfce7",
    ocean: "#dbeafe",
  }

  const cardGradients = {
    floral: "linear-gradient(135deg, #fef3c7, #ffedd5)",
    elegant: "linear-gradient(135deg, #f8fafc, #e5e7eb)",
    vibrant: "linear-gradient(135deg, #fce7f3, #e9d5ff)",
    nature: "linear-gradient(135deg, #dcfce7, #d1fae5)",
    ocean: "linear-gradient(135deg, #dbeafe, #cffafe)",
  }

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #e0e7ff, #f3e8ff, #fce7f3)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
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
          {/* LEFT SIDE: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50"
          >
            {/* Text Input */}
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

            {/* Card Style */}
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

            {/* Text Color */}
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

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Update Card
              </button>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`flex-1 py-3 px-4 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isDownloading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700"
                }`}
              >
                {isDownloading ? "Downloading..." : "Download Card"}
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 flex justify-center items-center"
          >
            {cardText ? (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-[560px] h-[400px] rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                style={{ background: cardGradients[cardStyle] }}
                dir="rtl"
              >
                {/* Urdu Text */}
                <p
                  className="text-2xl font-bold leading-relaxed relative z-10 mb-8"
                  style={{
                    color: textColor,
                    fontFamily: "'Noto Nastaliq Urdu', serif",
                    textShadow: "0px 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  {cardText}
                </p>

                {/* Stylish footer with decorative borders */}
                <div className="relative z-10 w-full mt-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 opacity-50"></div>
                    <p
                      className="relative z-10 text-gray-700 text-sm font-semibold tracking-wider uppercase px-2"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        background: "linear-gradient(90deg, #a855f7, #ec4899)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Silient Words
                    </p>
                    <div className="flex-1 h-[1px] bg-gradient-to-l from-purple-400 to-pink-400 opacity-50"></div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <p className="text-gray-400 text-center font-medium">
                  Your card preview will appear here
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}