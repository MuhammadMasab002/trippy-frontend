import React from "react";
import CustomButton, {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./common/buttons/CustomButton";

const Destination = ({ destinationContent, isReverse = false }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10 w-full py-6 ${
        isReverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Left: Content */}
      <div
        className={`space-y-4 lg:text-left text-center px-4 ${
          isReverse ? "order-1 lg:order-2" : "order-1 lg:order-1"
        }`}
      >
        <h2 className="text-lg md:text-xxl font-bold text-foreground">
          {destinationContent.title}
        </h2>
        <p className="text-gray-600 text-base lg:text-lg">
          {destinationContent.description}
        </p>
        <div className="pt-2 max-w-xs mx-auto lg:mx-0">
          <CustomButton
            text={destinationContent.buttonText}
            size={BUTTON_SIZES.MD}
            variant={BUTTON_VARIANTS.PRIMARY}
            fullWidth={false}
            ariaLabel={destinationContent.buttonText}
          />
        </div>
      </div>

      {/* Right: Images (2 side by side) */}
      <div
        className={`grid grid-cols-2 gap-4 ${
          isReverse ? "order-0 lg:order-1" : "order-0 lg:order-2"
        }`}
      >
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={destinationContent.image1}
            alt="Scenic destination view"
            className="w-full h-48 md:h-56 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={destinationContent.image2}
            alt="Beachside destination view"
            className="w-full h-48 md:h-56 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
