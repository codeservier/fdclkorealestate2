import React from 'react';

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden mb-6 group">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-72 h-72 object-cover" 
      />
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 hover:bottom-0">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 pl-4">{description}</p>
        <a 
          href="#!" 
          className="text-blue-400 hover:underline mt-2 block"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
