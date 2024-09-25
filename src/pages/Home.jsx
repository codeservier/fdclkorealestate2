import { Link } from "react-scroll";
import HeroCard from "../components/heroCard";
import Stats from "../components/Stats";
import FeaturedProperty from "../components/Featured";
import Newsletter from "../components/Newsletter";
import Contact from "./Contact";

import img from "../assets/home/home_bg.jpg";
import Testimonial from "./Testomonials";

export default function CallToActionWithVideo({
  listing,
  updateListings,
  setListings,
}) {
  const handleClick = () => {
    const element = document.getElementById("featured");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden">
      <div className="pb-3 pt-2">
        <div className="mx-auto relative h-[90vh]">
          <img
            src={img}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center">
            <div className="pt-36 mb-36">
              <h1 className="text-white font-semibold text-4xl sm:text-4xl lg:text-6xl leading-tight">
                <span className="relative inline-block">
                  Discover Your,
                  <span className="absolute inset-x-0 bottom-1 h-1 bg-white opacity-30"></span>
                </span>
                <br />
                <span className="text-white">Dream Family Home</span>
              </h1>
              <p className="text-gray-200 mt-4">
                Explore a vast selection of over 1 million rental options,
                including apartments, houses, and townhomes!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/AllListings"
                  className="inline-flex justify-center w-fit shadow-sm px-4 py-3 border border-[#095c41] text-md font-medium text-gray-50 hover:text-gray-900 bg-[#095c41] hover:bg-white hover:font-bold rounded-full transition-all"
                >
                  Get started &rarr;
                </Link>
                <button
                  className="rounded-full bg-white text-[#095c41] font-normal px-6 py-2 transition-all"
                  onClick={handleClick}
                >
                  How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
        <HeroCard />
      </div>
      <Stats />
      <div className="px-2 rounded-xl">
        <FeaturedProperty />
      </div>
      <Newsletter />
      <Testimonial />
      <Contact />
    </div>
  );
}
