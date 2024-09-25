import React from "react";
import PackagesComponent from "../components/PackagesComponent";
import BackgroundImage from '../assets/services/bg_72.jpg';

const AccordionItem = () => {
  return (
    <div className="border-b border-gray-200 ">
      <div className="relative mb-6">
        <img 
          src={BackgroundImage}
          alt="Construction Services"
          className="w-full h-96 shadow-md object-cover opacity-75         "
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-black bg-opacity-40 w-80 rounded-xl p-6 flex flex-col items-center">
            <h1 data-title="Services" className="text-4xl font-bold mb-2">
              <span>Packages</span>
            </h1>
            <div className="page-breadcrumb">
              <a href="/" className="hover:underline">Home</a> / <span className='text-green-700'>Services</span>
            </div>
          </div>
        </div>
      </div>     
      <div className="flex w-full justify-center gap-4 flex-wrap">
        <PackagesComponent />
        <PackagesComponent />
        <PackagesComponent />
      </div>
    </div>
  );
};

export default AccordionItem;
