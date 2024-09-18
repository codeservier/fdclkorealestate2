import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function FeaturedProperty() {
  return (
    <div
      className="max-w-[1440px] mx-auto lg:p-20 pb-2 pt-2 px-2"
      id="featured"
    >
      <div className="lg:p-10 pl-10 pr-10 lg:rounded-3xl bg-white shadow-xl py-0">
        <h2 className="mb-3 font-semibold lg:text-[48px] text-3xl text-center lg:text-left">
          Featured Property
        </h2>
        <p className="text-center lg:text-left text-gray-400 sm:mb-12 mb-10">
          Let's find you a comfortable place
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Rent Section */}
          <div className="flex flex-col items-center lg:items-start lg:ml-4">
            <div className="image-container mb-4">
              <img
                src={require("../components/featured/rent.jpeg")}
                alt="rent"
                className="image rounded-xl"
              />
            </div>
            <div className="image-content text-center lg:text-left lg:ml-4">
              <h3 className="text-3xl font-semibold mb-2">Rent</h3>
              <p className="text-gray-400">
                We are creating a seamless online experience from shopping on
                the largest rental network, to applying, to paying rent.
              </p>
              <Link
                to="/AllListings#rentalProperties"
                className="btn btn-rent bg-[#095c41] border border-[#095c41] hover:bg-white hover:text-black"
              >
                See Rentals
              </Link>
            </div>
          </div>

          {/* Buy Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="image-container mb-4">
              <img
                src={require("../components/featured/buy.jpeg")}
                alt="buy"
                className="image rounded-xl"
              />
            </div>
            <div className="image-content text-center lg:text-left lg:mr-4 lg:ml-4">
              <h3 className="text-3xl font-semibold mb-2">Buy</h3>
              <p className="text-gray-400">
                Find your place with an immersive photo experience and the most
                listings, including things you won't find elsewhere.
              </p>
              <Link
                to="/AllListings"
                className="btn btn-buy bg-[#095c41] border border-[#095c41] hover:bg-white hover:text-black"
              >
                See Options
              </Link>
            </div>
          </div>

          {/* Sell Section */}
          <div className="flex flex-col items-center lg:items-start ">
            <div className="image-container mb-4">
              <img
                src={require("../components/featured/sell.jpeg")}
                alt="sell"
                className="image rounded-xl object-cover w-full h-auto" // Use w-full to make it full width and h-auto to maintain aspect ratio
              />
            </div>

            <div className="image-content text-center lg:text-left lg:mr-4">
              <h3 className="text-3xl font-semibold mb-2">Sell</h3>
              <p className="text-gray-400">
                No matter what path you take to sell your home, we can help you
                navigate a successful sale and with the best practice and safety
                in mind.
              </p>
              <Link
                to="/profile"
                className="btn btn-sell bg-[#095c41] border border-[#095c41] hover:bg-white hover:text-black"
              >
                Sell a Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
