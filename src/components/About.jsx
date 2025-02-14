import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div className='bg-[#F5F3FF] relative w-screen h-auto flex flex-col items-center justify-start p-4 sm:p-8'>
      {/* Title positioned same as Resume */}
      <h2 className="text-4xl font-bold text-gray-800 mt-8 sm:mt-12">
        <span className="underline-custom">Abo</span>ut
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
          bottom: -10px;
          width: 100%;
          height: 3px;
          background-color: #149ddd;
        }
      `}</style>

      {/* Content Container - Adjusted to avoid overlapping */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-5xl bg-white shadow-2xl rounded-lg p-6 mt-10 sm:mt-12">
        <img
          className="h-32 w-32 sm:h-64 sm:w-64 rounded-full object-cover mx-auto sm:mr-8"
          src={assets.bimal}
          alt="Profile"
        />
        <div className="flex flex-col justify-between w-full sm:w-3/5 text-center sm:text-left mt-6 sm:mt-0">
          <div>
            <h1 className="text-xl font-bold">UI/UX Designer & Web Developer</h1>
            <p className="text-sm text-gray-600 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <p className="text-gray-800"><strong>➤ Birthday:</strong> 1 May 1995</p>
            <p className="text-gray-800"><strong>➤ Age:</strong> 30</p>
            <p className="text-gray-800"><strong>➤ Website:</strong> www.example.com</p>
            <p className="text-gray-800"><strong>➤ Degree:</strong> Master</p>
            <p className="text-gray-800"><strong>➤ Phone:</strong> +123 456 7890</p>
            <p className="text-gray-800"><strong>➤ Email:</strong> email@example.com</p>
            <p className="text-gray-800"><strong>➤ City:</strong> New York, USA</p>
            <p className="text-gray-800"><strong>➤ Freelance:</strong> Available</p>
          </div>

          <p className="text-gray-600 mt-5">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
