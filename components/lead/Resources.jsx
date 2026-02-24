"use client";
import React, { useState, useRef } from "react";
import { Inter, Cabin, DM_Serif_Display } from "next/font/google";
import { faSearch, faArrowRight, faPlay, faBookOpen, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

const cards = [
  {
    type: "video",
    image: "/images/card1.jpg",
    videoSrc: "/videos/cardVideo.mp4",
    tag: "Video",
    duration: "8 min",
    title: "Understanding Therapy: Will it Work for Me?",
    description: "Watch this video to learn how therapy can help you gain clarity and mental strength.",
  },
  {
    type: "post",
    image: "/images/card2.jpg",
    tag: "Article",
    readTime: "5 min read",
    title: "Breaking the Stigma: Real Talk on Mental Health",
    description: "Read our insightful article exploring mental health challenges and solutions.",
  },
  {
    type: "post",
    image: "/images/card3.jpg",
    tag: "Article",
    readTime: "4 min read",
    title: "Young People as Agents of Change",
    description: "Discover how youth are driving positive changes in society and mental wellness.",
  },
  {
    type: "video",
    image: "/images/card4.jpg",
    videoSrc: "/videos/cardVideo.mp4",
    tag: "Video",
    duration: "12 min",
    title: "Mindfulness Practices for Daily Life",
    description: "Watch this video to practice mindfulness and reduce stress effectively.",
  },
  {
    type: "post",
    image: "/images/card5.jpg",
    tag: "Article",
    readTime: "6 min read",
    title: "Nutrition and Mental Health",
    description: "Read about how your diet can impact your mood and mental well-being.",
  },
  {
    type: "post",
    image: "/images/card1.jpg",
    tag: "Article",
    readTime: "7 min read",
    title: "Coping with Anxiety",
    description: "Explore tips and strategies for managing anxiety in daily life.",
  },
];

function VideoCard({ card }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
      {/* Video Wrapper */}
      <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
        <video
          ref={videoRef}
          src={card.videoSrc}
          poster={card.image}
          controls={playing}
          className="w-full h-full object-cover"
          onPause={() => setPlaying(false)}
        />
        {/* Overlay when not playing */}
        {!playing && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-between p-4">
            {/* Top badge */}
            <div className="flex justify-between items-start">
              <span className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <FontAwesomeIcon icon={faVideo} className="text-[10px]" />
                {card.tag}
              </span>
              <span className="bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                {card.duration}
              </span>
            </div>
            {/* Play button */}
            <div className="flex items-center justify-center">
              <button
                onClick={handlePlay}
                className="w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-110 hover:bg-emerald-500 hover:text-white text-emerald-600 transition-all duration-300 group/btn"
                aria-label="Play video"
              >
                <FontAwesomeIcon icon={faPlay} className="text-lg ml-0.5" />
              </button>
            </div>
            <div /> {/* spacer */}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`${dmSerif.className} text-xl text-gray-900 leading-snug`}>
          {card.title}
        </h3>
        <p className={`${cabin.className} text-gray-500 text-sm mt-2 leading-relaxed flex-1`}>
          {card.description}
        </p>
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
          >
            Watch Now
            <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </span>
          </button>
          <span className="text-xs text-gray-400">{card.duration}</span>
        </div>
      </div>
    </div>
  );
}

function PostCard({ card }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Top badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          <FontAwesomeIcon icon={faBookOpen} className="text-emerald-500 text-[10px]" />
          {card.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`${dmSerif.className} text-xl text-gray-900 leading-snug`}>
          {card.title}
        </h3>
        <p className={`${cabin.className} text-gray-500 text-sm mt-2 leading-relaxed flex-1`}>
          {card.description}
        </p>
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <button className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
            Read Article
            <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </span>
          </button>
          <span className="text-xs text-gray-400">{card.readTime}</span>
        </div>
      </div>
    </div>
  );
}

const Resources = () => {
  const [query, setQuery] = useState("");

  const filtered = cards.filter(
    (c) =>
      query === "" ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={`${inter.className} relative bg-[#F8FAF9] py-20 px-4 overflow-hidden`}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Tag */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">Resources</span>
        </div>

        {/* Heading */}
        <h1 className={`${dmSerif.className} mt-5 text-4xl md:text-5xl text-gray-900 text-center leading-tight max-w-2xl`}>
          Learn, Grow, and Take Care of Your Mind
        </h1>

        {/* Description */}
        <p className={`${cabin.className} mt-4 text-center text-gray-500 text-base md:text-lg leading-relaxed max-w-xl`}>
          Empower yourself with knowledge and tools to build a healthier, more balanced life. Start your journey today.
        </p>

        {/* Divider */}
        <div className="mt-8 flex items-center gap-3 w-full max-w-sm">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300" />
          <span className="text-gray-300 text-sm">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300" />
        </div>

        {/* Search */}
        <div className="mt-8 w-full max-w-lg">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, videos, or topics…"
              className="w-full pl-11 pr-5 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-all duration-300 text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Filter pills */}
        <div className="mt-5 flex gap-2 flex-wrap justify-center">
          {["All", "Videos", "Articles"].map((f) => (
            <button
              key={f}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-200 bg-white text-gray-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
          {filtered.map((card, idx) =>
            card.type === "video" ? (
              <VideoCard key={idx} card={card} />
            ) : (
              <PostCard key={idx} card={card} />
            )
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <p className={`${cabin.className} text-gray-500 text-sm mb-3`}>
            Looking for something specific?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-900 text-white text-sm font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-sm">
            Browse All Resources <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;