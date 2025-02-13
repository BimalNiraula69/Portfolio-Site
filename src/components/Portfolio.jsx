import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import assets from '../assets/assets'

const Portfolio = () => {
  const images = [
    { src: "/image1.jpg", title: "First slide label", text: "Some representative placeholder content for the first slide." },
    { src: "/image2.jpg", title: "Second slide label", text: "Some representative placeholder content for the second slide." },
    { src: "/image3.jpg", title: "Third slide label", text: "Some representative placeholder content for the third slide." },
  ];

  const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-500">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8 relative">
          <span className="relative">
            Portfo<span className="text-blue-500">lio</span>
            <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-blue-500"></span>
          </span>
        </h2>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] overflow-hidden rounded-lg shadow-lg">
          {/* Slides */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === current ? 0 : 100 }}
              animate={{ opacity: index === current ? 1 : 0, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 w-full h-full ${index === current ? "block" : "hidden"}`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-4 rounded-md">
                <h5 className="text-lg font-bold">{image.title}</h5>
                <p className="text-sm">{image.text}</p>
              </div>
            </motion.div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-blue-500 scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  return <Carousel />;
};

export default Portfolio;
