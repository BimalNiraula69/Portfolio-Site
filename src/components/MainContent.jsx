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
        classNameName="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      >
        <source src={assets.animated_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation */}
      <nav class="absolute top-0 left-0 w-full bg-transparent z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-center items-center py-4">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
          <li><a href="#" className="nav-item text-white hover:text-[#149ddd] transition duration-300">About</a></li>
          <li><a href="#" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Resume</a></li>
          <li><a href="#" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Portfolio</a></li>
          <li><a href="#" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Services</a></li>
          <li><a href="#" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Contact</a></li>
        </ul>
      </div>
    </div>
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
          <span className='underline-custom'>{text}</span>
          <span><Cursor cursorStyle='|' /></span>
        </p>
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
          bottom: -10px;
          width: 100%;
          height: 3px;
          background-color: #149ddd;
        }
          .nav-item:hover {
      text-decoration: underline;
      text-decoration-color: #149ddd;
      text-underline-offset: 8px;
    }
      `}</style>
    </div>
  );
}

export default MainContent;