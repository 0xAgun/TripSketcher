"use client";
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PlanTripPage = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFormData(prev => ({
      ...prev,
      startDate: start,
      endDate: end
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const getDuration = () => {
    if (formData.startDate && formData.endDate) {
      const days = Math.ceil(
        (formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)
      );
      return `${days} ${days === 1 ? 'day' : 'days'}`;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light text-gray-900 tracking-tight">
            Plan a <span className="font-semibold">new trip</span>
          </h1>
          <p className="mt-3 text-gray-600">
            Start planning your next adventure
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Destination Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Where to?
              </label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                placeholder="e.g. Paris, Hawaii, Japan"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#FF5A5F] transition-colors"
                required
              />
            </div>

            {/* Dates Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  When?
                </label>
                {(formData.startDate || formData.endDate) && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, startDate: null, endDate: null }))}
                    className="text-sm text-[#FF5A5F] hover:underline"
                  >
                    Clear dates
                  </button>
                )}
              </div>

              {/* Calendar */}
              <div className="mt-2">
                <DatePicker
                  selected={formData.startDate}
                  onChange={handleDateChange}
                  startDate={formData.startDate}
                  endDate={formData.endDate}
                  selectsRange
                  inline
                  monthsShown={2}
                  minDate={new Date()}
                />
              </div>

              {/* Duration Display */}
              {getDuration() && (
                <p className="text-sm font-medium text-[#FF5A5F]">
                  {getDuration()} trip
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#FF5A5F] text-white font-medium tracking-wide hover:bg-[#FF4448] transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start planning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanTripPage;
