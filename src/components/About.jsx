import React from 'react'
import assets from '../assets/assets'

const About = () => {
  return (
    <div>
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
        }`}</style>
      <div className="relative w-full min-h-screen p-4 sm:p-8 bg-[#F5F3FF]">
        <h2 className="flex justify-center text-4xl font-bold text-gray-800 mb-8 relative top-5"><span className="underline-custom">Abo</span>ut</h2>
        <p className='mt-5 sm:mt-10'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="sm:flex sm:items-center mt-10 flex-wrap">
            <img className="h-60 w-60 sm:h-80 sm:w-80 mx-auto sm:mx-0 sm:mr-4 mb-10 sm:mb-0" src={assets.bimal} alt="Profile Picture"/>
            <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-5">
                    <h1 className="text-xl leading-tight font-bold">UI/UX Designer & Web Developer</h1>
                    <p className="text-sm text-gray-600 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 mt-5">
                        <p className="text-gray-800 mb-5"><strong>➤ Birthday:</strong> 1 May 1995</p>
                        <p className="text-gray-800 mb-5"><strong>➤ Website:</strong> www.example.com</p>
                        <p className="text-gray-800 mb-5"><strong>➤ Phone:</strong> +123 456 7890</p>
                        <p className="text-gray-800 mb-5"><strong>➤ City:</strong> New York, USA</p>
                    </div>
                    <div className="w-full sm:w-1/2 mt-5">
                        <p className="text-gray-800 mb-5"><strong>➤ Age:</strong> 30</p>
                        <p className="text-gray-800 mb-5"><strong>➤ Degree:</strong> Master</p>
                        <p className="text-gray-800 mb-5"><strong>➤ Email:</strong> email@example.com</p>
                        <p className="text-gray-800 mb-5"><strong>➤ Freelance:</strong> Available</p>
                    </div>
                    <p className="text-gray-600 mt-5 sm:mt-10 w-full">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quia sed. Sed et consectetur qui quia repellendus itaque neque.</p>
                </div>
            </div>
        </div>   
      </div>
    </div>
  )
}

export default About
