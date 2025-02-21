import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import assets from "../assets/assets";

const Portfolio = () => {
  const images = [
    { src: assets.a, title: "slide label", text: "Some representative placeholder content for the slide." },
    { src: "/image1.jpg", title: "slide label", text: "Some representative placeholder content for the slide." },
    { src: "/image1.jpg", title: "slide label", text: "Some representative placeholder content for the slide." },
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
      <div className="bg-[#F5F3FF] h-auto w-full flex flex-col items-center justify-center overflow-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        <span className="underline-custom">Port</span>folio
      </h2>
      <div className="relative w-full max-w-5xl h-[75vh] flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden p-6">
        {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index === current ? 0 : 100 }}
          animate={{ opacity: index === current ? 1 : 0, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center ${index === current ? "block" : "hidden"}`}
        >
          <img src={image.src} alt={image.title} className="w-full h-[500px] object-cover rounded-lg"/>
          <div className="absolute bottom-10 text-center text-Black bg-opacity-50 px-4 py-2 rounded">
          <h5 className="text-lg font-bold hover:cursor-pointer">{image.title}</h5>
          <p className="text-sm hover:cursor-pointer">{image.text}</p>
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition hover:cursor-pointer"
        >
        <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition hover:cursor-pointer"
        >
        <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style jsx>{`
        .underline-custom {
        position: relative;
        display: inline-block;
        }
        .underline-custom::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 3px;
        background-color: #149ddd;
        }
      `}</style>
      </div>
    );
  };

  return <Carousel />;
};

export default Portfolio;
