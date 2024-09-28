import React, { useEffect, useState } from "react";
import { db } from '../firebase'; // Import your initialized Firebase instance
import BackgroundImage from '../assets/services/bg_72.jpg';
import PackageCard from '../components/card/PackageCard'; // Ensure this component exists
import { collection, getDocs } from "firebase/firestore";

const AccordionItem = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(db, "products");
      const servicesSnapshot = await getDocs(servicesCollection);
      const servicesList = servicesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServices(servicesList);
    };

    fetchServices();
  }, []);

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="relative mb-6">
          <img 
            src={BackgroundImage}
            alt="Construction Services"
            className="w-full h-96 shadow-md object-cover opacity-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="bg-black bg-opacity-40 w-80 rounded-xl p-6 flex flex-col items-center">
              <h1 data-title="Services" className="text-4xl font-bold mb-2">
                <span>Packages</span>
              </h1>
              <div className="page-breadcrumb mb-4">
                <a href="/" className="hover:underline">Home</a> / <span className='text-green-700'>Packages</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className='text-green-700'>Our</span> Packages
        </h2>
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <PackageCard
              key={service.id}
              imageSrc={service.imageUrl} // Ensure this matches your Firestore field
              title={service.title}
              description={service.description}
              price={service.price} // If you want to display price as well
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
