import React from 'react';
import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from "react-icons/fa";
import assets from "../assets/assets";

const NavBar = () => {
  return (
    <div>
      <div className="w-75 h-screen bg-gray-900 text-white p-5 flex flex-col items-center fixed">
        <img src={assets.bimal} alt="Profile" className="w-30 h-30 rounded-full mr-10" />
        <h2 className="text-xl font-bold mt-2 mr-10">Bimal Niraula</h2>
        <div className="flex gap-5 my-3 mr-10">
          <FaFacebookF className="cursor-pointer w-6 h-6" />
          <FaInstagram className="cursor-pointer w-6 h-6" />
          <FaSkype className="cursor-pointer w-6 h-6" />
          <FaLinkedinIn className="cursor-pointer w-6 h-6" />
        </div>
        <nav className="w-full mt-5">
          <ul className="ml-15 space-y-8">
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.home} alt="Home Icon" />
              <span className="px-2 text-black font-bold">Home</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.information_button} alt="About Icon" />
              <span className="px-2 text-black font-bold">About</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.resume} alt="Resume Icon" />
              <span className="px-2 text-black font-bold">Resume</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.portfolio} alt="Portfolio Icon" />
              <span className="px-2 text-black font-bold">Portfolio</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.responsible} alt="Services Icon" />
              <span className="px-2 text-black font-bold">Services</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.post} alt="Posts Icon" />
              <span className="px-2 text-black font-bold">Posts</span>
            </li>
            <li className="hover:text-blue-400 cursor-pointer flex items-center">
              <img className="w-6 h-6" src={assets.contact_us} alt="Contact Icon" />
              <span className="px-2 text-black font-bold">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
