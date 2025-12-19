import React from "react";
import CustomButton, {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "../components/common/buttons/CustomButton";

function Home() {
  return (
    <div className="w-full bg-[url('/src/assets/12.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bggray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-background transition-all duration-500">
          Your Journey Your Story
        </h1>

        <div className="max-w-md transition-all duration-700 md:pt-4">
          <p className="md:text-xl lg:text-2xl text-background text-center">
            Choose your favorite destination to travel
          </p>
        </div>
        <div className="mt-6">
          <CustomButton
            text={"Travel plan"}
            variant={BUTTON_VARIANTS.SECONDARY}
            size={BUTTON_SIZES.LG}
            className="px-10 cursor-pointer"
            type="button"
            buttonText="Explore Now"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
