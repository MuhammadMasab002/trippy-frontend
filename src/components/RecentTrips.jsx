import React from "react";
import TripCard from "./TripCard";

const RecentTrips = () => {
  const trips = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500",
      title: "Paris, France",
      description:
        "Experience the city of lights with its iconic Eiffel Tower and charming cafes",
      price: "$1,299",
      duration: "7 Days",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500",
      title: "Seoul, South Korea",
      description:
        "Discover the perfect blend of ancient traditions and modern technology in this vibrant city",
      price: "$1,499",
      duration: "8 Days",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500",
      title: "Santorini, Greece",
      description:
        "Explore stunning white-washed buildings and breathtaking sunsets over the Aegean Sea",
      price: "$1,899",
      duration: "6 Days",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500",
      title: "Bali, Indonesia",
      description:
        "Relax on pristine beaches and immerse yourself in rich cultural heritage and temples",
      price: "$999",
      duration: "10 Days",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full py-6 text-center space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Recent Trips
        </h1>
        <h1 className="text-base lg:text-lg font-normal text-gray-600">
          Discover our recent trips and explore the world with us
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {trips?.map((trip) => (
          <TripCard
            key={trip.id}
            image={trip.image}
            title={trip.title}
            description={trip.description}
            price={trip.price}
            duration={trip.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTrips;
