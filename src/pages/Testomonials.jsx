import React from 'react';

const Testimonial = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              What people <br /> are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            {[
              {
                name: 'Kenzie Edgar',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.',
                imgSrc: 'https://i.pravatar.cc/100?img=1',
              },
              {
                name: 'Stevie Tifft',
                quote: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.',
                imgSrc: 'https://i.pravatar.cc/100?img=2',
              },
              {
                name: 'Tommie Ewart',
                quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.',
                imgSrc: 'https://i.pravatar.cc/100?img=3',
              },
              {
                name: 'Charlie Howse',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.',
                imgSrc: 'https://i.pravatar.cc/100?img=4',
              },
              {
                name: 'Nevada Herbertson',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!',
                imgSrc: 'https://i.pravatar.cc/100?img=5',
              },
              {
                name: 'Kris Stanton',
                quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!',
                imgSrc: 'https://i.pravatar.cc/100?img=6',
              },
            ].map((testimonial, index) => (
              <div key={index} className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={testimonial.imgSrc} alt={testimonial.name} />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">{testimonial.name}.</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                      {testimonial.quote}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Buy me a beer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
