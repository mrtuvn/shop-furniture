import HeroSlider from "@/components/slider/HeroSlider";
import React from "react";
const Homepage: React.FC = () => {
  return (
    <>
      <div>
        <HeroSlider />
      </div>

      <div className="container mx-auto flex flex-col">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Homepage
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
