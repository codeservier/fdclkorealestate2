import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { id: 1, name: "Apartment Sale", value: "100+" },
  { id: 2, name: "Completed Project", value: "60+" },
  { id: 3, name: "Happy Client", value: "500+" },
];

const Stats = () => {
  return (
    <>
      <div className="my-20 max-w-[1280px] mx-auto lg:px-10">
        <div className="max-w-full mx-6 lg:mx-10 lg:px-8">
          <div className="">
            <div>
              <div className="text-center">
                <h2 className="text-5xl font-semibold  text-gray-800">Discover More About Us</h2>
                <p className="mx-auto max-w-3xl mt-10 text-lg text-gray-400 mb-4 w-full">
                We are a dedicated real estate company offering a wide range of services, ready to assist you in finding the perfect home tailored to your needs.
                </p>
                <Link
                  to="/about"
                  className="transition-all inline-flex justify-center w-fit border border-[#095c41] shadow-sm px-4 py-3 text-md font-medium text-gray-50 hover:bg-white hover:text-gray-950  bg-[#095c41] hover:font-bold mb-10 rounded-2xl"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Read More &rarr;
                </Link>

                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col gap-y-4">
                      <dt className="leading-7 text-gray-400 text-md">{stat.name}</dt>
                      <dd className="order-first text-6xl font-bold text-[#095c41] first-line:sm:text-6xl">{stat.value}</dd>

                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
