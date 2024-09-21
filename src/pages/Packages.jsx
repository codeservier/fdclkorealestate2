import React, { useState } from "react";
import PackagesComponent from "../components/PackagesComponent";

const AccordionItem = () => {
  return (
    <div className="border-b border-gray-200 ">
      <div className="flex flex-col items-center text-center p-6 bg-gray-50 ">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Our Handcrafted Packages for you..
          </p>
        </div>
        <div className="mb-4">
          <p>Move the arrow to find the best home construction package.*</p>
        </div>
        <div className="mt-4">
          <a
            href="#abcd"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Download Package Details
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4">

        <PackagesComponent />
        <PackagesComponent />
        <PackagesComponent />
      </div>
    </div>
  );
};

export default AccordionItem;
