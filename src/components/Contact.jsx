import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5F3FF] px-6">
      <h2 className="flex justify-center text-4xl font-bold text-gray-800 top-5 relative">
        <span className="underline-custom">Conta</span>ct
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
      <div className="max-w-7xl mt-10 w-full grid md:grid-cols-2 gap-10 p-4 md:p-10 bg-white shadow-lg rounded-2xl">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Let's chat.<br /> Tell me about your project.
          </h2>
          <p className="text-gray-600">Let's create something together ✨</p>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <span className="text-gray-600">📩</span>
            <p className="ml-3 text-gray-800 font-medium">Mail me at</p>
            <a href="mailto:bimalniraula69@gmail.com" className="ml-2 text-blue-600 font-semibold">bimalniraula69@gmail.com</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Send us a message 🚀</h3>
          <form className="mt-4 space-y-4">
            <div className="relative z-0">
              <input type="text" id="fullname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Full Name" />
              <label htmlFor="fullname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
            </div>
            <div className="relative z-0">
              <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" />
              <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0">
              <input type="text" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Subject" />
              <label htmlFor="subject" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
            </div>
            <div className="relative z-0">
              <textarea placeholder="Tell us more about your project*" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
              <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;