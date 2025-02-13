import React from 'react'
import { FaBehance, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Contact = () => {
  return (
      <div className="min-h-screen w-full bg-gray-900 px-4">
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
      <h2 className="flex justify-center text-4xl font-bold text-gray-800 top-5 relative"><span class="underline-custom">Conta</span>ct</h2>
      <div className="flex justify-center flex-col items-center mt-20 ml-90 h-125 w-150 bg-white shadow-lg rounded-lg text-center">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-brown-700 mb-4">Get in Touch</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 text-[#C9A27E] text-2xl mb-6">
          <FaBehance />
          <FaLinkedin />
          <FaTwitter />
          <FaDribbble />
        </div>

        {/* Form */}
        <form className="space-y-4">
<div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="Name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
</div>
<div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="Email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
</div>
<div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="Message" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
</div>

          {/* Send Button */}
          <button className="mt-4 bg-[#E2B887] text-brown-800 font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-xl transition">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact