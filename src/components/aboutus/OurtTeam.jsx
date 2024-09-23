import React from "react";

const OurTeam = () => {
  const teamMembers = [
    { name: "Danny Burton", role: "Engineer", imgSrc: "https://via.placeholder.com/150" },
    { name: "Jane Doe", role: "Designer", imgSrc: "https://via.placeholder.com/150" },
    { name: "John Smith", role: "Developer", imgSrc: "https://via.placeholder.com/150" },
    { name: "Emily Johnson", role: "Manager", imgSrc: "https://via.placeholder.com/150" },
  ];

  return (
    <section id="team_about" className="py-16">
      <div className="container mx-auto">
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <span className="block w-16 h-1 mx-auto bg-green-600 mb-4"></span>
          <p className="text-lg">
          Our team at FDCLKO Construction is a diverse group of skilled professionals dedicated to excellence, collaboration, and bringing your vision to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <figure className="hover:scale-105 transition-transform duration-300">
                  <img src={member.imgSrc} alt={member.name} className="w-full h-48 object-cover" />
                </figure>
                <div className="text-center p-4">
                  <strong className="block text-xl">{member.name}</strong>
                  <span className="text-gray-600">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
