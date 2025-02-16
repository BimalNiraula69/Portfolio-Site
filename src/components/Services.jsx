import React from 'react';

const Services = () => {
  const services = [
    {
      title: "WEB DESIGN",
      description:
        "Crafting stunning and functional websites tailored to your brand’s needs. Our web design services blend creativity with user experience to deliver captivating online experiences.",
      image: "/web-design.png",
    },
    {
      title: "LOGO DESIGN",
      description:
        "Crafting memorable brand identities through timeless logo design. I specialize in creating logos that resonate with your audience and represent your brand.",
      image: "/logo-design.png",
    },
    {
      title: "PRODUCT DESIGN",
      description:
        "Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.",
      image: "/product-design.png",
    },
    {
      title: "PRODUCT DESIGN",
      description:
        "Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.",
      image: "/product-design.png",
    },
    {
      title: "PRODUCT DESIGN",
      description:
        "Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.",
      image: "/product-design.png",
    },
    {
      title: "PRODUCT DESIGN",
      description:
        "Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.",
      image: "/product-design.png",
    },
  ];

  return (
    <div className='bg-[#F5F3FF] relative w-screen min-h-screen flex flex-col justify-between items-center'>
      <h2 className="text-4xl font-bold text-gray-800 h-full flex items-center">
        <span className="underline-custom">Servi</span>ces
      </h2>
      <style jsx>{`
        .underline-custom {
          position: relative;
          display: inline-block;
        }
        .underline-custom::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px; /* Adjust the position of the line */
          width: 100%;
          height: 3px; /* Adjust the thickness of the line */
          background-color: #149ddd; /* Change the color of the line */
        }
      `}</style>

      <div className="text-white flex flex-wrap justify-center w-full h-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none bg-gray-900 m-4 p-4 mt-6 pb-6 rounded-xl border border-gray-700 shadow-lg text-center flex flex-col items-center w-11/12 sm:w-5/12 md:w-1/3 lg:w-1/4 h-80"
          >
            <h2 className="text-xl font-bold text-lime-400">{service.title}</h2>
            <div className="w-32 h-32 my-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">{service.description}</p>
            <div className="absolute bottom-2 right-4 text-lime-400 text-xl">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
