import React from "react";
import CustomButton, {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./common/buttons/CustomButton";

// Hero content data for different pages
export const HERO_DATA = {
  home: {
    title: "Your Journey Begins Here",
    description: "Choose your favorite destination to travel",
    buttonText: "Travel plan",
    bgImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  },
  about: {
    title: "About Trippy",
    description: "Learn more about our story and passion for travel",
    buttonText: "Our Story",
    bgImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  service: {
    title: "Our Services",
    description: "Discover the amazing services we offer for your travels",
    buttonText: "View Services",
    bgImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80",
  },
  contact: {
    title: "Get In Touch",
    description: "We'd love to hear from you and help plan your next adventure",
    buttonText: "Contact Us",
    bgImage:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1920&q=80",
  },
};

const Hero = ({ title, description, buttonText, bgImage, page = "home" }) => {
  // Use page data if no props provided
  const heroData = HERO_DATA[page] || HERO_DATA.home;
  const heroTitle = title || heroData.title;
  const heroDescription = description || heroData.description;
  const heroButtonText = buttonText || heroData.buttonText;
  const heroBgImage = bgImage || heroData.bgImage;

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${heroBgImage}')`,
        height: page === "home" ? "100vh" : "600px",
      }}
    >
      <div className="w-full h-full minh-screen flex flex-col justify-center items-center gap-4 bggray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-background transition-all duration-500">
          {heroTitle}
        </h1>

        <div className="max-w-md transition-all duration-700 md:pt-4">
          <p className="md:text-xl lg:text-2xl text-background text-center">
            {heroDescription}
          </p>
        </div>
        <div className="mt-6">
          <CustomButton
            text={heroButtonText}
            variant={BUTTON_VARIANTS.SECONDARY}
            size={BUTTON_SIZES.MD}
            className="px-6 cursor-pointer"
            type="button"
            buttonText="Explore Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
