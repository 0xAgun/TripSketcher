"use client";
import React from "react";
import Image from "next/image";

const Dashboard = () => {
  const recentTrip = {
    title: "Trip to Dhaka City",
    image: "/cities/dhaka.jpg", // You'll need to add this image to your public folder
    date: "Jan 1 - 3 days ago"
  };

  const popularDestinations = [
    {
      title: "What to See in Taupo: A S...",
      image: "/destinations/taupo.jpg",
      description: "We visited Taupo in 2025. My trip plan looking for...",
      author: {
        name: "Roberto",
        avatar: "/avatars/roberto.jpg"
      },
      stats: { likes: 1, views: 203 }
    },
    {
      title: "Harpers Ferry, WV Guide",
      image: "/destinations/harpers-ferry.jpg",
      description: "Visited on a Saturday and Sunday 👍 ✨",
      author: {
        name: "kate colb",
        avatar: "/avatars/kate.jpg"
      },
      stats: { likes: 3, views: 295 }
    },
    {
      title: "From PH: ODSN Taipei Gui...",
      image: "/destinations/taipei.jpg",
      description: "I've traveled Taipei last April 2023, and here's how it went!",
      author: {
        name: "Cath A.",
        avatar: "/avatars/cath.jpg"
      },
      stats: { likes: 1, views: 194 }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="h-16"></div> {/* Spacer for navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recently viewed section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently viewed and upcoming</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-500">No recent trips</p>
          </div>
            <div className="w-16 h-16 relative overflow-hidden rounded-lg">
              <Image
                src={recentTrip.image}
                alt={recentTrip.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{recentTrip.title}</h3>
              <p className="text-sm text-gray-500">{recentTrip.date}</p>
            </div>
          </div>
        </div>

        {/* Hotel Search Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need a place to stay?</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your destination"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8">
          <div className="bg-gray-50 rounded-lg p-4 h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Map loading ...</p>
          </div>
        </div>

        {/* Trips and Guides Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your trips</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Plan new trip
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative overflow-hidden rounded-lg">
                  <Image
                    src={recentTrip.image}
                    alt={recentTrip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{recentTrip.title}</h3>
                  <p className="text-sm text-gray-500">{recentTrip.date}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your guides</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Create new guide
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <p className="text-gray-500 text-sm">You don't have any guides yet. Create a new guide.</p>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore</h2>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Popular destinations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] mb-3">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-200 rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">{destination.title}</h4>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{destination.date}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>�</span>
                      <span>{destination.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{destination.stats.saves}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
