'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-30">
        {/* Recently viewed section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently viewed and upcoming</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-500">No recent trips</p>
          </div>
        </div>

        {/* Need a place to stay section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need a place to stay?</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex gap-4 items-center">
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="flex-1 p-2 border rounded"
              />
              <input 
                type="date" 
                className="p-2 border rounded"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-[400px] bg-gray-100">
              {/* Map will go here */}
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Map loading...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your trips section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Your trips</h2>
              <button className="text-blue-600 hover:text-blue-700">Plan new trip</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">No trips planned yet</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Your guides</h2>
              <button className="text-blue-600 hover:text-blue-700">Create new guide</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">You don't have any guides yet</p>
            </div>
          </div>
        </div>

        {/* Popular destinations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-6">Popular destinations</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                title: "What to See in Taupo: A S...",
                image: "/destinations/taupo.jpg",
                description: "We visited Taupo in 2025. My trip plan looking for...",
                author: "Roberto",
                views: 203,
                likes: 1
              },
              {
                title: "Harpers Ferry, WV Guide",
                image: "/destinations/harpers-ferry.jpg",
                description: "Visited on a Saturday and Sunday 👍 ✨",
                author: "kate colb",
                views: 295,
                likes: 3
              },
              {
                title: "From PH: ODSN Taipei Gui...",
                image: "/destinations/taipei.jpg",
                description: "I've traveled Taipei last April 2023, and here's how it went!",
                author: "Cath A.",
                views: 194,
                likes: 1
              }
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
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">{destination.title}</h4>
                  <p className="text-gray-600 mb-3 line-clamp-2">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{destination.author}</span>
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
