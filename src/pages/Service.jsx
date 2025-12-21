import React from "react";
import RecentTrips from "../components/RecentTrips";
import Hero from "../components/Hero";

const Service = () => {
  return (
    <div>
      <Hero page="service" />
      <div className="container max-w-7xl mx-auto px-4 py-6 mt-10">
        <RecentTrips />
      </div>
    </div>
  );
};

export default Service;
