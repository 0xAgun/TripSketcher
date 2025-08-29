"use client"
import { useState, useEffect, useRef } from "react"
import { FiSearch, FiMapPin, FiNavigation, FiCamera, FiMap, FiCompass, FiGlobe } from "react-icons/fi"
import gsap from "gsap"

const Hero = () => {
  const [searchValue, setSearchValue] = useState("")
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const searchRef = useRef(null)
  const citiesRef = useRef(null)
  const statsRef = useRef(null)
  const bgElements = useRef([])
  const floatingIcons = useRef([])
  const particles = useRef([])

  useEffect(() => {
    console.log("[v0] GSAP animations starting")

    // Set initial states
    gsap.set([titleRef.current, descRef.current, searchRef.current], {
      opacity: 0,
      y: 20,
    })
    gsap.set(citiesRef.current?.children, {
      opacity: 0,
      y: 15,
      scale: 0.95,
    })

    // Animate background elements with smoother transitions
    bgElements.current.forEach((element, index) => {
      if (!element) return

      gsap.set(element, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 0,
      })

      // Create smooth fade-in animation
      gsap.to(element, {
        opacity: 0.85,
        duration: 1.2,
        delay: index * 0.15,
        ease: "power2.inOut",
      })

      // Smoother floating animation with custom easing
      gsap.to(element, {
        x: "random(-25, 25)", // Reduced movement range for subtlety
        y: "random(-25, 25)", // Reduced movement range for subtlety
        rotation: "random(-15, 15)", // Reduced rotation for subtlety
        duration: "random(4, 6)", // Longer duration for smoother movement
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // Smoother easing function
        delay: index * 0.15,
      })
    })

    floatingIcons.current.forEach((icon, index) => {
      if (!icon) return

      gsap.set(icon, {
        opacity: 0,
        scale: 0.9,
        rotation: 0,
      })

      // Smooth fade in with subtle scale
      gsap.to(icon, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: index * 0.2,
        ease: "power2.out",
      })

      // Smoother floating animation with custom path
      gsap.to(icon, {
        x: "random(-30, 30)", // Reduced range for smoother movement
        y: "random(-35, 35)", // Slightly more vertical movement
        rotation: "random(-20, 20)", // Reduced rotation for subtlety
        duration: "random(5, 7)", // Longer duration for smoother movement
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // Smoother easing
        delay: index * 0.2,
      })

      // More subtle scale pulsing
      gsap.to(icon, {
        scale: "random(0.95, 1.05)", // Reduced scale variation
        duration: "random(3, 4)", // Longer duration
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      })
    })

    particles.current.forEach((particle, index) => {
      if (!particle) return

      gsap.set(particle, {
        opacity: 0,
        scale: 0.5,
      })

      // Smooth fade in with custom scale
      gsap.to(particle, {
        opacity: "random(0.7, 0.85)", // Subtle opacity variation
        scale: 1,
        duration: 1.8,
        delay: index * 0.15,
        ease: "power2.inOut",
      })

      // Smoother continuous movement
      gsap.to(particle, {
        x: "random(-50, 50)", // Reduced range for smoother movement
        y: "random(-60, 60)", // Reduced range for smoother movement
        duration: "random(8, 12)", // Longer duration for smoother movement
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // Smoother easing
        delay: index * 0.15,
      })

      // Smoother rotation animation
      gsap.to(particle, {
        rotation: 360,
        duration: "random(12, 15)", // Slower rotation
        repeat: -1,
        ease: "none",
        delay: index * 0.2,
      })
    })

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Main content animations with direct 'to' animations
    timeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.7",
      )
      .to(
        searchRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      )

    // Enhanced smooth cities animation with group timing
    const citiesTimeline = gsap.timeline({ 
      delay: 0.8,
      defaults: { ease: "back.out(1.2)" }  // Smooth back easing for natural motion
    })
    
    // Get city elements
    const cityElements = citiesRef.current.children
    const firstGroup = [cityElements[0], cityElements[1]]
    const secondGroup = [cityElements[2], cityElements[3]]
    
    // Initial state for all cities
    gsap.set([firstGroup, secondGroup], {
      opacity: 0,
      y: 15,
      scale: 0.9
    })
    
    // Animate first group of cities
    citiesTimeline.to(firstGroup, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: {
        amount: 0.1,
        ease: "power2.out"
      }
    })
    
    // Animate second group of cities slightly delayed
    citiesTimeline.to(secondGroup, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: {
        amount: 0.1,
        ease: "power2.out"
      }
    }, "-=0.3")

    // Stats animation
    timeline.from(
      statsRef.current.children,
      {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
      },
      "+=0.2",
    )
  }, [])

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-[#f8fafc] pt-24 sm:pt-28 pb-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-b from-blue-100/40 to-purple-100/40 rounded-full blur-[80px] sm:blur-3xl -z-10 transform translate-x-1/3 sm:translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-t from-blue-100/40 to-purple-100/40 rounded-full blur-[80px] sm:blur-3xl -z-10 transform -translate-x-1/3 sm:-translate-x-1/2 translate-y-1/2"></div>

        {/* Travel-themed elements */}
        <div
          ref={(el) => (bgElements.current[0] = el)}
          className="absolute top-20 left-[15%] p-6 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-8 h-8 text-blue-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 13L16 19H8L3 13M21 13L16 7M21 13H3M16 7H8L3 13M16 7L12 19M8 7L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[1] = el)}
          className="absolute top-40 right-[20%] p-5 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-10 h-10 text-purple-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[2] = el)}
          className="absolute bottom-32 left-[25%] p-4 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-8 h-8 text-emerald-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7M3 7H21M12 5V19M7 5L12 19M17 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[3] = el)}
          className="absolute top-[55%] right-[30%] p-5 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-9 h-9 text-amber-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V13M12 8L8 4M12 8L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13L8 17M12 13L16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[4] = el)}
          className="absolute bottom-24 right-[35%] p-4 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-7 h-7 text-cyan-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4 15C19.1277 15.6171 19.0641 16.2985 19.2153 16.9499C19.3666 17.6012 19.7261 18.1883 20.24 18.62L20.31 18.69C20.7261 19.1055 21.0553 19.5971 21.2816 20.1367C21.5079 20.6763 21.6276 21.2542 21.6353 21.8387C21.6429 22.4232 21.5384 23.0037 21.3265 23.549C21.1147 24.0943 20.7989 24.595 20.3935 25.0217C19.988 25.4484 19.5027 25.7881 18.9672 26.0257C18.4316 26.2633 17.8556 26.3948 17.2711 26.4142C16.6866 26.4336 16.1033 26.3406 15.5541 26.1405C15.0048 25.9404 14.4993 25.6367 14.07 25.24L14 25.17C13.5683 24.6561 12.9812 24.2966 12.3299 24.1453C11.6785 23.9941 10.9971 24.0577 10.38 24.33C9.77128 24.5946 9.27341 25.0494 8.94821 25.6278C8.62301 26.2061 8.48481 26.8769 8.55 27.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[5] = el)}
          className="absolute top-[35%] left-[40%] p-5 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-8 h-8 text-pink-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div
          ref={(el) => (bgElements.current[6] = el)}
          className="absolute bottom-[40%] left-[20%] p-5 bg-white/10 backdrop-blur-sm rounded-2xl z-0 border border-white/20 shadow-lg"
        >
          <svg className="w-9 h-9 text-indigo-500/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11H20M4 11C2.89543 11 2 10.1046 2 9V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9C22 10.1046 21.1046 11 20 11M4 11L4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11M12 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Modern floating icons with glass effect */}
        <div ref={(el) => (floatingIcons.current[0] = el)} className="absolute hidden sm:block top-32 left-[10%] p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiNavigation className="w-8 h-8 text-blue-500" />
        </div>
        <div ref={(el) => (floatingIcons.current[1] = el)} className="absolute top-[45%] right-[15%] p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiCamera className="w-6 h-6 text-purple-500" />
        </div>
        <div ref={(el) => (floatingIcons.current[2] = el)} className="absolute hidden sm:block bottom-40 left-[35%] p-3.5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiMap className="w-7 h-7 text-green-500" />
        </div>
        <div ref={(el) => (floatingIcons.current[3] = el)} className="absolute top-[25%] right-[40%] p-3 bg-white/15 backdrop-blur-md rounded-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiCompass className="w-6 h-6 text-orange-500" />
        </div>
        <div ref={(el) => (floatingIcons.current[4] = el)} className="absolute hidden sm:block bottom-[55%] right-[10%] p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiGlobe className="w-8 h-8 text-cyan-500" />
        </div>
        <div ref={(el) => (floatingIcons.current[5] = el)} className="absolute hidden sm:block top-[60%] left-[45%] p-2.5 bg-white/15 backdrop-blur-md rounded-lg border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -z-[1]">
          <FiMapPin className="w-5 h-5 text-pink-500" />
        </div>

        {/* Glowing particles */}
        <div
          ref={(el) => (particles.current[0] = el)}
          className="absolute hidden sm:block top-24 left-[20%] w-3 h-3 bg-blue-400/80 rounded-full -z-[1] shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[1] = el)}
          className="absolute top-[30%] right-[25%] w-4 h-4 bg-purple-400/80 rounded-full -z-[1] shadow-[0_0_20px_rgba(167,139,250,0.6)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[2] = el)}
          className="absolute hidden sm:block bottom-36 left-[30%] w-3 h-3 bg-green-400/80 rounded-full -z-[1] shadow-[0_0_20px_rgba(74,222,128,0.6)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[3] = el)}
          className="absolute top-[50%] left-[60%] w-2.5 h-2.5 bg-orange-400 rounded-full z-0 shadow-[0_0_15px_rgba(251,146,60,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[4] = el)}
          className="absolute bottom-[45%] right-[20%] w-3 h-3 bg-cyan-400 rounded-full z-0 shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[5] = el)}
          className="absolute top-[40%] left-[15%] w-3 h-3 bg-pink-400 rounded-full z-0 shadow-[0_0_15px_rgba(244,114,182,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[6] = el)}
          className="absolute bottom-28 right-[45%] w-2.5 h-2.5 bg-indigo-400 rounded-full z-0 shadow-[0_0_15px_rgba(129,140,248,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[7] = el)}
          className="absolute top-[65%] right-[35%] w-3 h-3 bg-teal-400 rounded-full z-0 shadow-[0_0_15px_rgba(45,212,191,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[8] = el)}
          className="absolute top-36 right-[50%] w-4 h-4 bg-amber-400 rounded-full z-0 shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-pulse"
        ></div>
        <div
          ref={(el) => (particles.current[9] = el)}
          className="absolute bottom-[60%] left-[50%] w-2.5 h-2.5 bg-rose-400 rounded-full z-0 shadow-[0_0_15px_rgba(251,113,133,0.5)] animate-pulse"
        ></div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-16 flex flex-col items-center text-center max-w-5xl z-10">
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
                className="block w-full pl-12 pr-24 py-4 text-lg bg-white border border-gray-200 rounded-full shadow-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-gray-900"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="px-3 py-3 md:px-6 md:py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 hover:scale-105 shadow hover:shadow-xl">
                  <FiSearch className="h-5 w-5 block md:hidden" />
                  <span className="hidden md:block text-base whitespace-nowrap">Start Planning</span>
                </button>
              </div>
            </div>
          </div>

          {/* Popular Cities */}
          <div className="relative w-full max-w-2xl mx-auto mt-8 py-4 z-10">
            <div ref={citiesRef} className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: "Paris", id: 1 },
                { name: "Tokyo", id: 2 },
                { name: "New York", id: 3 },
                { name: "London", id: 4 },
              ].map((city) => (
                <button
                  key={city.id}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100 hover:scale-105"
                >
                  <FiMapPin className="h-4 w-4" />
                  <span>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "10M+", label: "Happy Travelers" },
              { number: "500+", label: "Destinations" },
              { number: "99%", label: "Satisfaction" },
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
  )
}

export default Hero
