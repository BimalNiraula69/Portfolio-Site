import React from 'react';
import assets from "../assets/assets";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const MainContent = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Freelancer', 'Designer'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="relative w-screen h-screen">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      >
        <source src={assets.animated_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation */}
      <nav className="absolute top-0 w-full flex flex-wrap justify-center items-center bg-transparent p-4 space-x-2 md:space-x-4 lg:space-x-6">
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Resume</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Portfolio</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Services</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Posts</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">About</a>
        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">Contact</a>
      </nav>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-5">
        <img src={assets.bimal} alt="Profile" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-4" />
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 my-3">
          <FaLinkedinIn className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
          <FaGithub className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
          <FaFacebookF className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Bimal Niraula</h1>
        <p className="text-white text-lg sm:text-xl mt-2">
          I'm a {' '}
          <span>{text}</span>
          <span><Cursor cursorStyle='|' /></span>
        </p>
      </div>
    </div>
  );
}

export default MainContent;
