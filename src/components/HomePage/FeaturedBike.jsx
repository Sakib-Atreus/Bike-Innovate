import React from "react";
import featureBike from "@/assets/feature-bike.png";
import Image from "next/image";

const FeaturedBike = () => {
  return (
    <div className=" mt-16 mb-16">
      <h1 className="text-5xl font-semibold text-center mb-4">
        Featured Bikes In This Year
      </h1>
      <div className="text-center mb-24">
        <p className="text-lg font-medium text-orange-500">
          Best Bike Collection
        </p>
        <hr className="border-2 border-orange-400 w-20 mx-auto" />
      </div>
      <div className="flex justify-around">
        <Image src={featureBike} alt=""></Image>
        <Image src={featureBike} alt=""></Image>
        <Image src={featureBike} alt=""></Image>
      </div>
    </div>
  );
};

export default FeaturedBike;
