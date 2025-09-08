"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for handling scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Add styles to lock scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Remove scroll lock
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "My Trips", href: "#" },
    { name: "Explore", href: "#" },
    { name: "Pro", href: "#" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-8 py-4 h-16 bg-white ${
      mobileMenuOpen 
        ? "shadow-sm" 
        : isScrolled 
          ? "shadow-sm backdrop-blur-md" 
          : ""
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a href="/login">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#000000" />
              </svg>
            </a>
            <a href="/signup">
              <span className="font-semibold text-xl transition-colors duration-200 text-gray-900">
                TripSketcher
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center m-0 p-0 list-none">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-semibold text-[15px] no-underline transition-colors duration-200 text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="#"
            className="font-medium text-[15px] no-underline transition-colors duration-200 text-gray-900 hover:text-gray-600"
          >
            Sign In
          </a>
          <button className="bg-black text-white hover:bg-gray-900 px-6 py-2.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 cursor-pointer z-[101]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-600 my-0.5 transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-600 my-0.5 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-600 my-0.5 transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[100] transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-lg font-medium text-gray-900 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </a>
            <button
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
