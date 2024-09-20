import React from 'react';
import BackgroundImage from '../assets/services/bg_71.jpg';
import Img1 from '../assets/services/img_1.jpg';
import Img2 from '../assets/services/img_2.jpg';
import Img3 from '../assets/services/img_3.jpg';
import Img4 from '../assets/services/img_4.jpg';
import Img5 from '../assets/services/img_5.jpg';
import Img6 from '../assets/services/img_6.jpg';
import ServiceCard from '../components/card/ServiceCard';

function Services() {
  const services = [
    {
      imageSrc: Img1,
      title: 'Residential Construction',
      description: 'High-quality residential construction services.',
    },
    {
      imageSrc: Img2,
      title: 'Commercial Construction',
      description: 'Expert commercial building solutions.',
    },
    {
      imageSrc: Img3,
      title: 'Renovations and Remodeling',
      description: 'Transform your space with our remodeling services.',
    },
    {
      imageSrc: Img4,
      title: 'Site Preparation',
      description: 'Complete site preparation and grading services.',
    },
    {
      imageSrc: Img5,
      title: 'Project Management',
      description: 'Efficient project management for seamless execution.',
    },
    {
      imageSrc: Img6,
      title: 'Custom Home Builds',
      description: 'Build your dream home with our expert team.',
    },
  ];

  return (
    <>
      <div className="relative mb-6">
        <img 
          src={BackgroundImage}
          alt="Construction Services"
          className="w-full h-96 rounded-lg shadow-md"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="bg-black bg-opacity-40 w-80 rounded-xl p-6 flex flex-col items-center">
            <h1 data-title="Services" className="text-4xl font-bold mb-2">
              <span>Services</span>
            </h1>
            <div className="page-breadcrumb">
              <a href="/" className="hover:underline">Home</a> / <span className='text-green-700'>Services</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-center"><span className='text-green-700'>Our</span> Services</h2>
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
