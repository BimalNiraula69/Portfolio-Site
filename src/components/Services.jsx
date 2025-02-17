import React from 'react';
import assets from '../assets/assets';

const Services = () => {
  const services = [
    {
      title: "WEB DESIGN",
      description:
        "Crafting stunning and functional websites tailored to your brand’s needs. Our web design services blend creativity with user experience to deliver captivating online experiences.",
      image: assets.web_design,
    },
    {
      title: "LOGO DESIGN",
      description:
        "Crafting memorable brand identities through timeless logo design. I specialize in creating logos that resonate with your audience and represent your brand.",
      image: assets.logo,
    },
    {
      title: "PRODUCT DESIGN",
      description:
        "Innovative product design solutions that marry form with function. From concept to prototype, we bring your ideas to life with precision and creativity.",
      image: assets.product,
    },
    {
      title: "Web Development",
      description:
        "Cutting-edge web development solutions that blend aesthetics with performance. From sleek user interfaces to seamless functionality, we craft websites and applications that engage, convert, and inspire.",
      image: assets.web_development,
    },
    {
      title: "Dabtabase Administration",
      description:
        "Reliable and efficient database administration services that ensure data integrity, security, and performance. From optimization to backup strategies, we manage your databases with precision and expertise.",
      image: assets.database_management,
    },
    {
      title: "Software Testing",
      description:
        "Reliable and efficient software testing solutions to ensure flawless performance. From functional testing to automation, we help deliver high-quality, bug-free software with precision and expertise.",
      image: assets.testing,
    },
  ];

  return (
    <div className='bg-[#F5F3FF] relative w-screen min-h-screen flex flex-col justify-between items-center overflow-x-hidden'>
      <h2 className="text-4xl font-bold text-gray-800 h-full flex items-center mb-4">
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

      <div className="text-white flex flex-wrap justify-center w-full h-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none bg-gray-900 m-2 p-2 rounded-xl border border-gray-700 shadow-lg text-center flex flex-col items-center w-11/12 sm:w-5/12 md:w-1/3 lg:w-1/4 h-80"
          >
            <h2 className="text-xl font-bold text-lime-400">{service.title}</h2>
            <div className="w-32 h-32 my-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
