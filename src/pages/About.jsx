import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-black mb-16">
          About Us
        </h1>

        {/* Our History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Our History</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a passion for exploration and adventure, Trippy has
            been helping travelers discover amazing destinations since our
            inception. What started as a small team of travel enthusiasts has
            grown into a comprehensive platform serving thousands of adventurers
            worldwide. Our journey has been marked by continuous innovation and
            a commitment to making travel planning seamless and enjoyable for
            everyone.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to inspire and empower people to explore the world
            with confidence. We strive to provide the best travel planning
            tools, curated destination guides, and personalized recommendations
            that make every trip unforgettable. We believe that travel enriches
            lives, broadens perspectives, and creates lasting memories. Through
            our platform, we aim to make these experiences accessible to
            everyone.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a world where travel is effortless, sustainable, and
            enriching for all. Our goal is to become the world's most trusted
            travel companion, offering innovative solutions that connect
            travelers with authentic experiences. We're committed to promoting
            responsible tourism and supporting local communities while
            continuously evolving our platform to meet the changing needs of
            modern explorers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
