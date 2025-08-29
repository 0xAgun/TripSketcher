"use client";

import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl shadow-md mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">
            Join <span className="font-semibold">TripSketcher</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 tracking-wide">
            Create your account and start planning
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 ${isFocused.name || formData.name ? 'top-1 text-xs text-gray-500' : 'top-3.5 text-sm text-gray-400'}`}
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className="w-full pt-5 pb-2 px-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 ${isFocused.email || formData.email ? 'top-1 text-xs text-gray-500' : 'top-3.5 text-sm text-gray-400'}`}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className="w-full pt-5 pb-2 px-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-300 ${isFocused.password || formData.password ? 'top-1 text-xs text-gray-500' : 'top-3.5 text-sm text-gray-400'}`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              className="w-full pt-5 pb-2 px-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className={`absolute left-4 transition-all duration-300 ${isFocused.confirmPassword || formData.confirmPassword ? 'top-1 text-xs text-gray-500' : 'top-3.5 text-sm text-gray-400'}`}
            >
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={() => handleBlur('confirmPassword')}
              className="w-full pt-5 pb-2 px-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>

          {/* Fixed the checkbox to ensure it is clickable by restructuring the label */}
          <div className="flex items-start text-sm pt-2">
            <div className="relative flex items-center h-5 mt-0.5">
              <input
                id="agree"
                type="checkbox"
                className="absolute opacity-0 h-0 w-0 peer"
                required
              />
              <label
                htmlFor="agree"
                className="w-4 h-4 flex items-center justify-center border border-gray-300 rounded-sm mr-3 cursor-pointer peer-checked:bg-black peer-checked:border-black"
              >
                <svg
                  className="w-3 h-3 text-white hidden peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </label>
            </div>
            <span className="text-gray-600 text-sm">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-black font-medium hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-black font-medium hover:underline"
              >
                Privacy Policy
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-black text-white font-medium tracking-wide hover:bg-gray-900 transition-all duration-300 rounded-xl shadow hover:shadow-lg mt-4"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-xs text-gray-500 font-medium">OR SIGN UP WITH</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Signup */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 border border-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-700 hover:border-gray-300 transition-all duration-300 hover:shadow-sm bg-white">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            Google
          </button>
          <button className="py-3 border border-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-700 hover:border-gray-300 transition-all duration-300 hover:shadow-sm bg-white">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        {/* Login link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-black font-medium hover:underline transition-all duration-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;