import React from 'react';
import { useNavigate } from 'react-router-dom';

function PackageCard({ imageSrc, title, description, price }) {
    const navigate = useNavigate();
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden mb-6 group">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-72 object-cover" 
      />
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 transform translate-y-full transition-transform duration-300 group-hover:translate-y-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 pl-4">{description}</p>
        <p className="text-gray-200 pl-4">{price}</p>

        <a 
          onClick={()=>{
            navigate("/PackagesComponent");
          }}
          className="text-blue-400 hover:underline mt-2 mb-2 block"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default PackageCard;
