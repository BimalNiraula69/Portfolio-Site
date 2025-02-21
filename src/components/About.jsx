import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
  <div className='bg-[#F5F3FF] relative w-screen h-auto flex flex-col items-center justify-start p-6'>
      {/* Title positioned same as Resume */}
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
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
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-5xl bg-white shadow-2xl rounded-lg p-6">
        <img
          className="h-full w-full sm:h-64 sm:w-64 object-content object-cover mx-auto sm:mr-8"
          src={assets.bimal}
          alt="Profile"
        />
        <div className="flex flex-col justify-between w-full sm:w-3/5 text-center sm:text-left mt-6 sm:mt-0">
          <div>
            <h1 className="text-xl font-bold">UI/UX Designer & Web Developer</h1>
            <p className="text-sm text-gray-600 mt-3">
            As a passionate Web Developer and UI/UX Designer, I create visually stunning and user-friendly digital experiences that seamlessly blend functionality with aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <p className="text-gray-800"><strong>➤ Birthday:</strong> 15 August 2001</p>
            <p className="text-gray-800"><strong>➤ Age:</strong> 23</p>
            <p className="text-gray-800"><strong>➤ Website:</strong> www.example.com</p>
            <p className="text-gray-800"><strong>➤ Degree:</strong> Bachelor</p>
            <p className="text-gray-800"><strong>➤ Phone:</strong> +977 9804354440</p>
            <p className="text-gray-800"><strong>➤ Email:</strong> bimalniraula69@gmail.com</p>
            <p className="text-gray-800"><strong>➤ City:</strong> Itahari, Nepal</p>
            <p className="text-gray-800"><strong>➤ Freelance:</strong> Available</p>
          </div>

          <p className="text-gray-600 mt-5">
          With a strong focus on responsive design, performance, and intuitive user interactions, I craft websites that not only look great but also enhance user engagement and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
