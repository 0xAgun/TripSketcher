'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import default styles

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative">
      <input
        value={value}
        ref={ref}
        onClick={onClick}
        readOnly
        className="pl-12 pr-4 py-3 rounded-lg border border-gray-200 
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
          transition-all outline-none text-gray-600 min-w-[200px] 
          bg-white shadow-sm"
        placeholder="Select date"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            d="M8 2v3m8-3v3m-9 1h10M4 7h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z"
          />
          <path 
            strokeLinecap="round" 
            strokeWidth="1.5" 
            d="M7 14h2m4 0h2m4 0h2M7 17h2m4 0h2m4 0h2" 
          />
        </svg>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-30">
        {/* Recently viewed section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recently viewed and upcoming
          </h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-500">No recent trips</p>
          </div>
        </div>

        {/* Need a place to stay section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need a place to stay?
          </h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4 items-center">
              {/* Destination input */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-3-2v4M8 2v4m-5 4h18"
                    />
                    <rect x="4" y="11" width="16" height="8" rx="1" strokeWidth="1.5" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your destination"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                    transition-all outline-none text-gray-600 placeholder-gray-400"
                />
              </div>

              {/* Modern Date Picker */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInput />}
                dateFormat="MM/dd/yyyy"
              />

              {/* Search button */}
              <button
                className="bg-black text-white px-6 py-3 rounded-lg font-medium 
                  hover:bg-gray-900 transition-colors focus:ring-2 
                  focus:ring-black/20 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-[400px] bg-gray-100">
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Map loading...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your trips + guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Your trips</h2>
              <button className="text-blue-600 hover:text-blue-700">
                Plan new trip
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">No trips planned yet</p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Your guides</h2>
              <button className="text-blue-600 hover:text-blue-700">
                Create new guide
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">You don't have any guides yet</p>
            </div>
          </div>
        </div>

        {/* Popular destinations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-6">
            Popular destinations
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                title: "What to See in Taupo: A S...",
                image: "/destinations/taupo.jpg",
                description: "We visited Taupo in 2025. My trip plan looking for...",
                author: "Roberto",
                views: 203,
                likes: 1,
              },
              {
                title: "Harpers Ferry, WV Guide",
                image: "/destinations/harpers-ferry.jpg",
                description: "Visited on a Saturday and Sunday 👍 ✨",
                author: "kate colb",
                views: 295,
                likes: 3,
              },
              {
                title: "From PH: ODSN Taipei Gui...",
                image: "/destinations/taipei.jpg",
                description:
                  "I've traveled Taipei last April 2023, and here's how it went!",
                author: "Cath A.",
                views: 194,
                likes: 1,
              },
            ].map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/2] mb-3">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-200 rounded-2xl"></div>
                  <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {destination.title}
                  </h4>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {destination.author}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <span>♥</span>
                        <span>{destination.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👁</span>
                        <span>{destination.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
