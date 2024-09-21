import React from "react";

const OurHistory = () => {
  const historyItems = [
    { year: 2014, title: "Startup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { year: 2015, title: "Startup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { year: 2016, title: "Startup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { year: 2017, title: "Startup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <span className="block w-16 h-1 mx-auto bg-orange-500 mb-4"></span>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          {historyItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-5 relative">
                <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <strong className="text-lg">{item.year}</strong>
                </div>
                <strong className="block mb-2 text-gray-800">{item.title}</strong>
                <div className="hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
