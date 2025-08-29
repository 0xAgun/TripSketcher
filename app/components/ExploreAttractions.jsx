"use client"
import { useState, useEffect, useRef } from "react"
import { FiSearch, FiMapPin, FiStar, FiClock, FiInfo } from "react-icons/fi"
import gsap from "gsap"

const ExploreAttractions = () => {
  const [searchValue, setSearchValue] = useState("")
  const contentRef = useRef(null)
  const searchRef = useRef(null)
  const resultsRef = useRef(null)

  useEffect(() => {
    // Initial animation setup
    gsap.set([contentRef.current, searchRef.current], {
      opacity: 0,
      y: 20,
    })

    gsap.set(resultsRef.current?.children, {
      opacity: 0,
      y: 15,
      scale: 0.98,
    })

    // Create timeline for animations
    const timeline = gsap.timeline({
      defaults: { ease: "power2.out" }
    })

    // Animate content and search
    timeline
      .to([contentRef.current, searchRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
      })
      .to(resultsRef.current.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
      })
  }, [])

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div ref={contentRef} className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            See top attractions and restaurants
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Get recommended the top places to visit and the best restaurants. Get ratings for top attractions.
          </p>
        </div>

        {/* Search section */}
        <div ref={searchRef} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for attractions or restaurants..."
              className="block w-full pl-12 pr-4 py-4 text-base bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {[
              "American restaurants",
              "Parks",
              "Neighborhoods",
              "Science & space museums",
              "Drinks"
            ].map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results section */}
        <div ref={resultsRef} className="space-y-6">
          {/* Space Needle Card */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-72 h-48 sm:h-auto relative">
                <img
                  src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                  alt="Space Needle"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <FiStar className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Space Needle</h3>
                    <div className="mt-1 flex items-center gap-1">
                      <div className="flex items-center">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">4.4</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">$$</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">Observation deck</span>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Show times</button>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">400 Broad St, Seattle, WA 98109, United States</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">8:00 AM - 10:30 PM today</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiInfo className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">People typically spent 2 hrs here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chihuly Garden Card */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-72 h-48 sm:h-auto relative">
                <img
                  src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                  alt="Chihuly Garden and Glass"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <FiStar className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Chihuly Garden and Glass</h3>
                    <div className="mt-1 flex items-center gap-1">
                      <div className="flex items-center">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">4.7</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">$$$</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">Art museum</span>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Show times</button>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">305 Harrison St, Seattle, WA 98109, United States</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">9:00 AM - 7:00 PM today</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiInfo className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">People typically spent 1.5 hrs here</span>
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
  )
}

export default ExploreAttractions
