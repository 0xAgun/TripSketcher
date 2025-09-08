'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityGrid from "../components/CityGrid";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-14 sm:px-6 lg:px-18 py-8">
        {/* Recently viewed section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recently viewed and upcoming</h2>
          <div className="bg-white rounded-lg shadow p-6">
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Explore</h2>
          <h3 className="text-lg text-gray-700 mb-4">Popular destinations</h3>
          {/* <CityGrid /> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
