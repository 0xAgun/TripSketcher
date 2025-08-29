"use client";
import React from "react";

const FeatureGrid = () => {
  const features = [
    { icon: "�", title: "Trip Planner", desc: "Plan your next adventure with our interactive tools" },
    { icon: "📍", title: "Destinations", desc: "Explore popular places and hidden gems" },
    { icon: "🏨", title: "Accommodations", desc: "Find perfect stays for every budget" },
    { icon: "✈️", title: "Flights", desc: "Search and compare the best routes" },
    { icon: "🎯", title: "Experiences", desc: "Discover unique activities and tours" },
    { icon: "💰", title: "Budget Tools", desc: "Track and manage your travel expenses" },
  ];

  return (
    <section className="pt-0 pb-16 bg-[#f8f9fa]">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#f8f9fa] px-8 py-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Plan Your Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create unforgettable travel experiences, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 
              bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md
              hover:from-white/60 hover:to-white/40
              border border-white/50
              shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
          >
            <div>
              <span className="text-3xl mb-6 block bg-white/80 rounded-xl p-3 w-fit shadow-sm">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-xl mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end">
              <button className="text-sm text-gray-600 hover:text-gray-800 font-medium group-hover:translate-x-1 transition-all duration-200 flex items-center gap-1 cursor-pointer">
                Learn more <span className="text-gray-400 group-hover:text-gray-600 transition-colors">→</span>
              </button>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
