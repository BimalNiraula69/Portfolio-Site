import React from 'react';
import assets from "../assets/assets";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
      >
        <source src={assets.animated_video} type="video/mp4" />
        <div className='text-dark-700'>Your browser does not support the video tag.</div>
      </video>

      <nav className="absolute top-0 left-0 w-full bg-transparent z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            <ul className="flex flex-row space-x-4 text-center">
              <li><Link to="/about" className="nav-item text-white hover:text-[#149ddd] transition duration-300">About</Link></li>
              <li><Link to="/resume" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Resume</Link></li>
              <li><Link to="/portfolio" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Portfolio</Link></li>
              <li><Link to="/services" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Services</Link></li>
              <li><Link to="/contact" className="nav-item text-white hover:text-[#149ddd] transition duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-5">
        <img src={assets.bimalniraula} alt="Profile" className="w-26 h-26 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-1" />
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 my-3">
       <Link to="https://www.facebook.com/profile.php?id=61571313576365"><FaFacebookF className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" /></Link>
       <Link to="https://github.com/BimalNiraula69?tab=repositories"><FaGithub className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" /></Link>
       <Link to="https://www.linkedin.com/in/bimal-niraula-44573b351/"><FaLinkedinIn className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6" /></Link>
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