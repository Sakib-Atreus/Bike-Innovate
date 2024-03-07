import React from "react";
import latestBike1 from "@/assets/latest bike/latest1.png";
import latestBike2 from "@/assets/latest bike/latest2.png";
import latestBike3 from "@/assets/latest bike/latest3.png";
import Image from "next/image";

const LatestBikeUpdate = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-semibold mt-36">Latest News</h1>
      <div className="flex justify-center gap-6 my-24">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={latestBike1} alt="Bike" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-2xl mb-4">Ducati XDIAVEL S-73</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline bg-blue-500 text-white text-xl mt-12">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={latestBike2} alt="Bike" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-2xl mb-4">Motorcycles & Scooters</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline text-blue-500 text-xl mt-12">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={latestBike3} alt="Bike" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-2xl mb-4">2021 Honda CBR500R</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline text-blue-500 text-xl mt-12">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBikeUpdate;
