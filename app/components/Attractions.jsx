"use client"
import { useState, useEffect, useRef } from "react"
import { FiStar, FiMapPin, FiClock, FiExternalLink, FiPhone, FiGlobe } from "react-icons/fi"
import gsap from "gsap"

const Attractions = () => {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const cardsRef = useRef(null)
  const categoryRef = useRef(null)

  useEffect(() => {
    // Initial animations setup
    gsap.set([titleRef.current, descRef.current], {
      opacity: 0,
      y: 20,
    })

    gsap.set(categoryRef.current?.children, {
      opacity: 0,
      y: 15,
      scale: 0.95,
    })

    gsap.set(cardsRef.current?.children, {
      opacity: 0,
      y: 30,
      scale: 0.95,
    })

    // Create timeline for smooth animations
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    })

    // Animate title and description
    timeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.6"
      )

    // Animate categories with stagger
    const categoryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: categoryRef.current,
        start: "top 80%",
      },
    })

    categoryTimeline.to(categoryRef.current.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: {
        each: 0.1,
        ease: "power2.out",
      },
    })

    // Animate cards with stagger
    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    })

    cardsTimeline.to(cardsRef.current.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: {
        each: 0.2,
        ease: "power2.out",
      },
    })
  }, [])

  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            See top attractions and restaurants
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get recommended the top places to visit and the best restaurants. Get ratings for top attractions, check their opening hours, and access links to official websites.
          </p>
        </div>

        {/* Categories */}
        <div ref={categoryRef} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { name: "Restaurants", icon: "🍽️" },
            { name: "Parks", icon: "🌳" },
            { name: "Museums", icon: "🏛️" },
            { name: "Entertainment", icon: "🎭" },
            { name: "Shopping", icon: "🛍️" },
          ].map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Attraction cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Space Needle */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                alt="Space Needle"
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                <FiStar className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Space Needle</h3>
                <div className="flex items-center gap-1">
                  <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">4.6</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">400 Broad St, Seattle, WA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span className="text-sm">Open until 10:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(206) 905-2100</span>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pike Place Market */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://wanderlog.com/p/images/66bbe6567bd929243d8b0886_img_travel_guides-3.jpg"
                alt="Pike Place Market"
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                <FiStar className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Pike Place Market</h3>
                <div className="flex items-center gap-1">
                  <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">4.8</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">85 Pike St, Seattle, WA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span className="text-sm">Open until 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(206) 682-7453</span>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chihuly Garden */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src="https://source.unsplash.com/800x600/?glass-art"
                alt="Chihuly Garden and Glass"
                className="object-cover w-full h-full"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                <FiStar className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Chihuly Garden</h3>
                <div className="flex items-center gap-1">
                  <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">4.7</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">305 Harrison St, Seattle, WA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span className="text-sm">Open until 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(206) 753-4940</span>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View more button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            View More Places
            <FiExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Attractions
