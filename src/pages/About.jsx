import React, { useEffect, useState } from "react";
import { FaClipboardList, FaSmile, FaUsers, FaTrophy } from "react-icons/fa";

import { FaCheckSquare, FaPaperPlane, FaCogs } from "react-icons/fa"; // Importing the icons
import OurHistory from "../components/aboutus/OurHistory";
import OurTeam from "../components/aboutus/OurtTeam";
import Testimonials from "../components/aboutus/Testomonials";

const About = () => {
  const [counters, setCounters] = useState([
    { id: 1, count: 3562, label: "Total Projects", icon: <FaClipboardList className="text-4xl text-orange-500" /> },
    { id: 2, count: 1054, label: "Happy Clients", icon: <FaSmile className="text-4xl text-orange-500" /> },
    { id: 3, count: 400, label: "Active Members", icon: <FaUsers className="text-4xl text-orange-500" /> },
    { id: 4, count: 67, label: "Won Awards", icon: <FaTrophy className="text-4xl text-orange-500" /> },
  ]);
  return (
    <>
      <div className="relative mb-6">
        <img
          // src={BackgroundImage} // Uncomment and provide your image source
          alt="Construction Services"
          className="w-full h-96 rounded-lg shadow-md"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-black bg-opacity-40 w-80 rounded-xl p-6 flex flex-col items-center">
            <h1 data-title="Services" className="text-4xl font-bold mb-2">
              <span>Services</span>
            </h1>
            <div className="page-breadcrumb">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              / <span className="text-green-700">Services</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="container mx-auto">
          <div className="pb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">A Few Words About Us</h2>
              <span className="block w-16 h-1 mx-auto bg-orange-500 mb-4"></span>
              <p className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaCheckSquare className="text-orange-500 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold">Why Choose Us</h4>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaPaperPlane className="text-orange-500 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold">Our Mission</h4>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaCogs className="text-orange-500 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold">What We Do</h4>
              <p className="mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex items-center">
            <div>
              <h3 className="text-3xl font-bold mt-16 mb-4">
                The Company You Can Trust
              </h3>
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://via.placeholder.com/500" // Replace with your desired image URL
              alt="Company Trust"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>

    <div className="py-16 bg-gray-100" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")', backgroundSize: "cover", position: "relative" }}>
      <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter) => (
            <div key={counter.id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {counter.icon}
              </div>
              <span className="block text-3xl font-bold text-gray-800">{counter.count}</span>
              <p className="text-gray-600">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <OurHistory/>
    <OurTeam/>
    <Testimonials/>
    </>
  );
};

export default About;
