import React from 'react';
import {assets} from "../assets"
import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
<div>
    <div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col items-center">
      <img src={bimal} alt="Profile" className="w-30 h-30 rounded-full" />
      <h2 className="text-xl font-bold mt-2">Bimal Niraula</h2>
      <div className="flex gap-3 my-3">
        <FaFacebookF className="cursor-pointer w-6 h-6" />
        <FaInstagram className="cursor-pointer w-6 h-6" />
        <FaSkype className="cursor-pointer w-6 h-6" />
        <FaLinkedinIn className="cursor-pointer w-6 h-6" />
      </div>
      <nav className="w-full mt-5">
        <ul className="space-y-8">
            <div className="hover:text-blue-400 cursor-pointer">
             <img src={assets.home}></img>
             <li>Home</li>
            </div>
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Resume</li>
          <li className="hover:text-blue-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Dropdown</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
</div>
  )
}

export default Home