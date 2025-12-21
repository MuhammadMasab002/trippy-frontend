import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import RecentTrips from "../components/RecentTrips";

const destinationContent = [
  {
    id: 1,
    title: "Popular Destinations",
    description:
      "Explore breathtaking places around the world. From vibrant cityscapes to tranquil beaches, find your next adventure and make memories that last a lifetime.",
    buttonText: "Explore Trips",
    image1:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    image2:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
  },
  {
    id: 2,
    title: "Hidden Gems Await",
    description:
      "Discover lesser-known destinations that offer authentic experiences and untouched natural beauty. Perfect for travelers seeking unique adventures off the beaten path.",
    buttonText: "Discover Now",
    image1:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    image2:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600",
  },
];

function Home() {
  return (
    <div className="w-full">
      <Hero
      page="home"
        title="Your Journey Your Story"
        heroImage="url('/src/assets/12.jpg')"
      />
      <div className="container w-full max-w-7xl mx-auto px-4 my-6">
        <div className="w-full py-10">
          <div className="w-full py-6 text-center space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Popular Destinations
            </h1>
            <h1 className="text-base lg:text-lg font-normal text-gray-600">
              Tours give you the best experience and memories that last a
              lifetime
            </h1>
          </div>
          <Destination destinationContent={destinationContent[0]} />
          <Destination
            destinationContent={destinationContent[1]}
            isReverse={true}
          />
        </div>
        <RecentTrips />
      </div>
    </div>
  );
}

export default Home;
