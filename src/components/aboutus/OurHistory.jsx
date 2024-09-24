import React from "react";

const OurHistory = () => {
  const historyItems = [
    {
      year: 2014,
      title: "Founding Year",
      description:
        "Founded in 2014, FDCLKO Construction began as a small team with a vision to innovate the construction industry through integrity and quality.",
    },
    {
      year: 2015,
      title: "First Major Project",
      description:
        "In 2015, we completed our first major project, establishing our reputation for reliability and excellence in construction.",
    },
    {
      year: 2016,
      title: "Expansion of Services",
      description:
        "By 2016, we expanded our services, incorporating advanced techniques and technologies to meet diverse client needs.",
    },
    {
      year: 2017,
      title: "Industry Recognition",
      description:
        "In 2017, FDCLKO Construction received industry awards for our commitment to quality and customer satisfaction, solidifying our place as a leader.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <span className="block w-16 h-1 mx-auto bg-green-600 mb-4"></span>
          <p className="text-lg px-4 md:px-0">
            FDCLKO Construction was founded with a vision to redefine the
            construction landscape. Established over a decade ago, we began as a
            small team driven by passion and integrity. Through hard work and
            dedication, we’ve grown into a trusted name in the industry,
            delivering innovative solutions and quality craftsmanship on every
            project. Our journey is marked by successful collaborations, lasting
            relationships, and a commitment to excellence that continues to
            shape our future.
          </p>
        </div>

        <div className="flex flex-wrap justify-center pl-16 pr-16">
          {historyItems.map((item, index) => (
             <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-md p-5 relative">
                <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <strong className="text-sm">{item.year}</strong>
                </div>
                <strong className="block mb-2 text-gray-800">
                  {item.title}
                </strong>
                <div className="hover:opacity-100 transition-opacity">
                  <p className="text-gray-600 pl-6">{item.description}</p>
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
