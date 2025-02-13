import React from 'react'

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
  ];
  return (
    <div className='flex relative w-screen h-screen bg-gray-300'>
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
        }`}
      </style>
      <h2 className="mt-5 ml-4 text-2xl font-semibold"><span class="underline-custom">Servic</span>es</h2>
      <div className="min-h-screen text-white flex flex-col justify-center items-center p-6">
      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg text-center flex flex-col items-center"
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-lime-400">{service.title}</h2>

            {/* Image */}
            <div className="w-40 h-40 my-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm">{service.description}</p>

            {/* Arrow Indicator */}
            <div className="absolute bottom-2 right-4 text-lime-400 text-xl">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services