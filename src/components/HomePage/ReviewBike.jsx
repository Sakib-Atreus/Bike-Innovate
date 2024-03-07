import React from "react";
import user1 from "@/assets/users/user-1.png";
import user2 from "@/assets/users/user-2.png";
import user3 from "@/assets/users/user-3.png";
import faq from "@/assets/faq.png";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewBike = () => {
  return (
    <div className="text-center container mx-auto">
      <h1 className="text-6xl font-semibold mt-36">
        Happy <span className="text-blue-500">Clients says</span>
      </h1>
      <div className="flex justify-center gap-8 my-16">
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200">
          <figure className="px-10 pt-10">
            <Image src={user1} alt="user" className="rounded-xl w-40" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-gray-400">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="flex justify-center gap-1 text-2xl text-orange-500 my-2">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaRegStar />
              </p>
            </div>
            <h2 className="text-sky-400 text-xl font-semibold my-2">
              Regina Miles
            </h2>
            <h2 className="card-title font-semibold text-xl">Banker</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200">
          <figure className="px-10 pt-10">
            <Image src={user2} alt="user" className="rounded-xl w-40" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-gray-400">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="flex justify-center gap-1 text-2xl text-orange-500 my-2">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaRegStar />
              </p>
            </div>
            <h2 className="text-sky-400 text-xl font-semibold my-2">
              Regina Miles
            </h2>
            <h2 className="card-title font-semibold text-xl">Banker</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-gray-200">
          <figure className="px-10 pt-10">
            <Image src={user3} alt="user" className="rounded-xl w-40" />
          </figure>
          <div className="card-body items-center text-center">
            <p className="text-gray-400">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="flex justify-center gap-1 text-2xl text-orange-500 my-2">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaRegStar />
              </p>
            </div>
            <h2 className="text-sky-400 text-xl font-semibold my-2">
              Regina Miles
            </h2>
            <h2 className="card-title font-semibold text-xl">Banker</h2>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <h1 className="text-6xl font-semibold mt-36">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>
      <div className="grid grid-cols-2 text-left my-24">
        <div>
          <Image src={faq} alt="faq"></Image>
        </div>
        <div className="">
          <div className="collapse collapse-arrow bg-base-100 shadow-xl border-2 border-gray-200 p-2 mb-6">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-2xl font-medium">
              What are the most important things I should know about riding a
              bike?
            </div>
            <div className="collapse-content">
              <p className="text-gray-400">
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow-xl border-2 border-gray-200 p-2 mb-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-medium">
              How can I tell if my helmet is old and I need a new one?
            </div>
            <div className="collapse-content">
              <p className="text-gray-400">
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow-xl border-2 border-gray-200 p-2 mb-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-medium">
              My bike has been in storage is it safe to ride?
            </div>
            <div className="collapse-content">
              <p className="text-gray-400">
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow-xl border-2 border-gray-200 p-2 mb-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-2xl font-medium">
              What rules should I follow when riding my bike?
            </div>
            <div className="collapse-content">
              <p className="text-gray-400">
                Safety First! Always obey the rules of the road. Obey all
                traffic signals, signs, and laws. Get in the mindset of
                “driving” your bike—not just “riding” your bike. This will help
                you be a more focused and legally compliant bike rider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBike;
