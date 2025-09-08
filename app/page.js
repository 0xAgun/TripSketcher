import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import PlaceBlog from "./components/PlaceBlog";
import Attractions from "./components/Attractions";
import ExploreAttractions from "./components/ExploreAttractions";
import FeatureSection from "./components/FeatureLayout";
import FeatureSectionReverse from "./components/FeatureSectionReverse";
import CityGrid from "./components/CityGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <PlaceBlog />
      <FeatureSection
        title="Create a trip itinerary to see everything in one place"
        description="Add the attractions you want to visit and see how to go between them on a map. Check distances and travel times between locations and attractions, schedule specific times for your visits, and optimize your route so you can make the most of your trip. See your flights and hotels for the day to keep track of what's coming up."
        image="https://wanderlog.com/p/images/66eab414ce29e80afaca10ea_Hit%20the%20road.jpg"
      />
      <FeatureSectionReverse
        title="Create a trip itinerary to see everything in one place"
        description="Add the attractions you want to visit and see how to go between them on a map. Check distances and travel times between locations and attractions, schedule specific times for your visits, and optimize your route so you can make the most of your trip. See your flights and hotels for the day to keep track of what's coming up."
        image="https://wanderlog.com/p/images/66eab414ce29e80afaca10ea_Hit%20the%20road.jpg"
      />
      <FeatureSection
        title="Create a trip itinerary to see everything in one place"
        description="Add the attractions you want to visit and see how to go between them on a map. Check distances and travel times between locations and attractions, schedule specific times for your visits, and optimize your route so you can make the most of your trip. See your flights and hotels for the day to keep track of what's coming up."
        image="https://wanderlog.com/p/images/66eab414ce29e80afaca10ea_Hit%20the%20road.jpg"
      />
      <CityGrid />
      <Footer />
    </div>
  );
}
