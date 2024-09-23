import React from "react";

const OurHistory = () => {
  const historyItems = [
    {
      year: 2014,
      title: "Startup",
      description:
        "Founded in 2014, FDCLKO Construction has rapidly evolved from a startup into a trusted leader in the industry, committed to delivering quality and innovation in every project.",
    },
    {
      year: 2015,
      title: "Startup",
      description:
        "In 2015, FDCLKO Construction has swiftly established itself as a trusted leader in the industry, dedicated to delivering quality and innovative solutions on every project.",
    },
    {
      year: 2016,
      title: "Startup",
      description:
        "In 2016, FDCLKO Construction has quickly become a trusted industry leader, committed to delivering high-quality, innovative solutions on every project.",
    },
    {
      year: 2017,
      title: "Startup",
      description:
        "In 2017, FDCLKO Construction has rapidly become a trusted leader in the industry, dedicated to delivering exceptional quality and innovative solutions on every project.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <span className="block w-16 h-1 mx-auto bg-green-600 mb-4"></span>
          <p className="text-lg">
            FDCLKO Construction was founded with a vision to
            redefine the construction landscape. Established over a decade ago,
            we began as a small team driven by passion and integrity. Through
            hard work and dedication, we’ve grown into a trusted name in the
            industry, delivering innovative solutions and quality craftsmanship
            on every project. Our journey is marked by successful
            collaborations, lasting relationships, and a commitment to
            excellence that continues to shape our future.
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          {historyItems.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-5 relative">
                <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <strong className="text-lg">{item.year}</strong>
                </div>
                <strong className="block mb-2 text-gray-800">
                  {item.title}
                </strong>
                <div className="hover:opacity-100 transition-opacity">
                  {/* <h3 className="text-lg font-semibold">{item.title}</h3> */}
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
