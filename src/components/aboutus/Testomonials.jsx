import React from "react";

const testimonials = [
  {
    name: "Selly Thomas",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Anselmo",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    name: "Melissa O’Barry",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    imgSrc: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="pb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Testimonials</h2>
          <span className="block w-16 h-1 mx-auto bg-orange-500 mb-4"></span>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] bg-cyan-500 text-white rounded-lg p-6 shadow-md">
              <figure className="flex justify-center mb-4">
                <img
                  className="w-20 h-20 rounded-full border-4 border-white"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                />
              </figure>
              <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
              <hr className="my-2 border-white" />
              <p className="text-center">{testimonial.text}</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star text-yellow-300"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
