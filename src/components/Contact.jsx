import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F5F3FF] w-screen h-auto flex flex-col items-center justify-center p-4">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        <span className="underline-custom">Cont</span>act
      </h2>

      {/* Main Contact Container */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let's chat. <br /> Tell me about your project.
          </h2>
          <p className="text-gray-600">Let's create something together ✨</p>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg">
            <span className="text-gray-600">📩</span>
            <p className="ml-2 text-gray-800 font-medium">Mail me at</p>
            <a href="mailto:bimalniraula69@gmail.com" className="ml-2 text-blue-600 font-semibold">bimalniraula69@gmail.com</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white w-full md:w-1/2 p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Send us a message 🚀</h3>
          <form className="mt-4 space-y-4">
            <div className="relative">
              <input type="text" id="fullname" className="input-field" placeholder="Full Name" required />
              <label htmlFor="fullname" className="input-label">Full Name</label>
            </div>
            <div className="relative">
              <input type="email" id="email" className="input-field" placeholder="Email" required />
              <label htmlFor="email" className="input-label">Email</label>
            </div>
            <div className="relative">
              <input type="text" id="subject" className="input-field" placeholder="Subject" required />
              <label htmlFor="subject" className="input-label">Subject</label>
            </div>
            <div className="relative">
              <textarea id="message" className="input-field" placeholder="Tell us more about your project*" required></textarea>
              <label htmlFor="message" className="input-label">Message</label>
            </div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
              Send message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border-color 0.3s ease;
        }

        .input-label {
          position: absolute;
          top: 10px;
          left: 10px;
          pointer-events: none;
          transition: 0.2s ease all;
          color: #999;
        }

        .input-field:focus + .input-label,
        .input-field:valid + .input-label {
          top: -5px;
          font-size: 12px;
          background-color: white;
          padding: 0 5px;
          color: #333;
        }
        .input-field:focus {
          border-color: #149ddd;
          outline: none;
        }
        .underline-custom {
          position: relative;
          display: inline-block;
        }
        .underline-custom::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 3px;
          background-color: #149ddd;
        }
      `}</style>
    </div>
  );
}

export default Contact;
