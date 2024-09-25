import React, { useEffect, useState } from "react";
import { FaClipboardList, FaSmile, FaUsers, FaTrophy } from "react-icons/fa";

import { FaCheckSquare, FaPaperPlane, FaCogs } from "react-icons/fa"; // Importing the icons
import OurHistory from "../components/aboutus/OurHistory";
import OurTeam from "../components/aboutus/OurtTeam";
import Testimonials from "../components/aboutus/Testomonials";
import BackgroundImage from "../assets/about/about.jpg";
import SideImage from "../assets/about/17511.jpg";

const About = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      count: 3562,
      label: "Total Projects",
      icon: <FaClipboardList className="text-4xl text-green-600" />,
    },
    {
      id: 2,
      count: 1054,
      label: "Happy Clients",
      icon: <FaSmile className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      count: 400,
      label: "Active Members",
      icon: <FaUsers className="text-4xl text-green-600" />,
    },
    {
      id: 4,
      count: 67,
      label: "Won Awards",
      icon: <FaTrophy className="text-4xl text-green-600" />,
    },
  ]);
  return (
    <>
      <div className="relative mb-6">
        <img
          src={BackgroundImage}
          alt="Construction Services"
          className="w-full h-96 rounded-lg shadow-md object-cover"
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
              <h2 className="text-3xl font-bold mb-2 text-green-600">
                A Few Words About Us
              </h2>
              <span className="block w-16 h-1 mx-auto bg-green-600 mb-4"></span>
              <p className="text-lg">
                We are a dedicated real estate company offering a wide range of
                services, ready to assist you in finding the perfect home
                tailored to your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaCheckSquare className="text-green-600 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold text-green-600">
                Why Choose Us
              </h4>
              <p className="mt-2">
                Choose FDCLKO Construction for our unmatched quality, reliable
                timelines, and dedication to turning your vision into reality.
              </p>
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaPaperPlane className="text-green-600 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold text-green-600">
                Our Mission
              </h4>
              <p className="mt-2">
                Our mission is to deliver exceptional quality and innovative
                construction solutions while prioritizing client satisfaction
                and sustainability.
              </p>
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <FaCogs className="text-green-600 text-4xl" />
              </div>
              <h4 className="text-xl font-semibold text-green-600">
                What We Do
              </h4>
              <p className="mt-2">
                We provide comprehensive construction services, specializing in
                innovative design, project management, and sustainable building
                practices.
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
                <h3 className="text-3xl font-bold mt-16 mb-4 text-green-600">
                  The Company You Can Trust
                </h3>
                <p className="text-gray-700 mb-2">
                  At FDCLKO Construction, we are the trusted partner you can
                  rely on for all your construction needs. Our dedicated team
                  combines expertise and innovation to bring your vision to
                  life, ensuring each project is executed with precision and
                  excellence.
                </p>
                <p className="text-gray-700">
                  We value open communication and integrity, working
                  collaboratively to exceed your expectations. With a focus on
                  cutting-edge design and sustainable practices, we are
                  committed to delivering outstanding results that not only meet
                  your goals but also enhance the community we serve.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img
                src={SideImage} // Replace with your desired image URL
                alt="Company Trust"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="py-16 bg-gray-100"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counters.map((counter) => (
              <div
                key={counter.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">{counter.icon}</div>
                <span className="block text-3xl font-bold text-gray-800">
                  {counter.count}
                </span>
                <p className="text-gray-600">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurHistory />
      <OurTeam />
      <Testimonials />
    </>
  );
};

export default About;
