"use client";
import { useState, useEffect, useRef } from "react";
import { FiStar, FiMapPin, FiClock, FiGlobe } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PlaceBlog = () => {
  const [searchValue, setSearchValue] = useState("");
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const searchRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !contentRef.current || !searchRef.current || !cardsRef.current) return;

    // Initial animations setup
    const elements = [titleRef.current, contentRef.current, searchRef.current];
    const cards = Array.from(cardsRef.current.children);
    
    // Set initial states
    gsap.set(elements, {
      opacity: 0,
      y: 20,
    });

    gsap.set(cards, {
      opacity: 0,
      y: 30,
    });

    // Create timeline for smooth animations
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    // Animate title, content and search
    timeline
      .to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      })
      .to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
      });
  }, []);

  return (
    <div className="bg-[#f8fafc] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={contentRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            See top attractions and restaurants
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Get recommended the top places to visit and the best restaurants. Get ratings for top attractions.
          </p>

          {/* Search Bar */}
          <div ref={searchRef} className="w-full max-w-2xl mx-auto mt-8">
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center">
                  <MdSearch className="w-6 h-6 text-gray-300" />
                </span>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for attractions or restaurants..."
                  className="block w-full pl-14 pr-32 py-3.5 text-base bg-white backdrop-blur-sm border border-gray-100 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1),0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_4px_10px_-3px_rgba(0,0,0,0.05)] focus:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_4px_10px_-3px_rgba(0,0,0,0.05)] focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none transition-all duration-300 ease-in-out text-gray-900"
                />
                <div className="absolute inset-y-1.5 right-1.5 flex items-center">
                  <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl font-medium transition-colors duration-300">
                    <MdSearch className="h-6 w-6 block md:hidden text-white" />
                    <span className="hidden md:block text-sm">Search</span>
                  </button>
                </div>
              </div>
          </div>

          {/* Categories */}
          <div className="w-full max-w-2xl mx-auto mt-6 py-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: "Restaurants", icon: "🍽️" },
                { name: "Parks", icon: "🌳" },
                { name: "Museums", icon: "🏛️" },
                { name: "Entertainment", icon: "🎭" },
              ].map((category, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog-style cards */}
        <div ref={cardsRef} className="space-y-12">
          {/* Space Needle */}
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1
              bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md
              hover:from-white/60 hover:to-white/40
              border border-white/50
              shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img
                  src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                  alt="Space Needle"
                  className="w-full h-[300px] lg:h-[320px] object-cover"
                />
              </div>
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Space Needle
                      </h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Show times
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          4.4
                        </span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">$$</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        Observation deck
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      The Space Needle is a renowned observation tower located
                      at the Seattle Center. It features a rotating restaurant
                      and an observation deck that offers panoramic views of
                      Downtown Seattle, Mount Rainier, and Elliott Bay.
                    </p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        400 Broad St, Seattle, WA 98109, United States
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiClock className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">8:00 AM - 10:30 PM today</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        People typically spent 2 hrs here
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pike Place Market */}
          <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1
              bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-md
              hover:from-white/60 hover:to-white/40
              border border-white/50
              shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img
                  src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                  alt="Pike Place Market"
                  className="w-full h-[300px] lg:h-[320px] object-cover"
                />
              </div>
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Pike Place Market
                      </h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Show times
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          4.7
                        </span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">$</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        Farmers Market
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Pike Place Market is a public market overlooking the
                      Elliott Bay waterfront. The Market opened in 1907 and is
                      one of the oldest continuously operated public farmers'
                      markets in the United States.
                    </p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        85 Pike Street, Seattle, WA 98101, United States
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiClock className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">9:00 AM - 5:00 PM today</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        People typically spent 1.5 hrs here
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load more button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 text-sm text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            Load more results
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceBlog;
