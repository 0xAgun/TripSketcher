"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import gsap from 'gsap';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const searchRef = useRef(null);
  const citiesRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate main title
    timeline.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    })
    // Animate description
    .from(descRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5")
    // Animate search bar
    .from(searchRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5")
    // Animate popular cities
    .from(citiesRef.current.children, {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4")
    // Animate stats
    .from(statsRef.current.children, {
      y: 20,
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.1,
    }, "-=0.2");
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-[#f8fafc] pt-28 pb-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-16 flex flex-col items-center text-center max-w-5xl">
        {/* Text content */}
        <div className="space-y-6 mb-12">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Plan your perfect trip
          </h1>
          <p ref={descRef} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Organize your travel itinerary, discover amazing places, and collaborate with friends all in one place.
          </p>
          
          {/* Search Bar */}
          <div ref={searchRef} className="w-full max-w-2xl mx-auto mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Where do you want to go?"
                className="block w-full pl-12 pr-24 py-4 text-lg bg-white border border-gray-200 rounded-full shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="px-3 py-3 md:px-6 md:py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                  <FiSearch className="h-5 w-5 block md:hidden" />
                  <span className="hidden md:block text-base whitespace-nowrap">Start Planning</span>
                </button>
              </div>
            </div>
          </div>

          {/* Popular Cities */}
          <div ref={citiesRef} className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-4 w-full">
            <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <FiMapPin className="h-4 w-4 mr-2" />
              Paris
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <FiMapPin className="h-4 w-4 mr-2" />
              Tokyo
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <FiMapPin className="h-4 w-4 mr-2" />
              New York
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <FiMapPin className="h-4 w-4 mr-2" />
              London
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "10M+", label: "Happy Travelers" },
              { number: "500+", label: "Destinations" },
              { number: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
