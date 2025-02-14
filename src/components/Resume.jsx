import React from 'react';

const Resume = () => {
  return (
    <div className="bg-[#F5F3FF] h-auto w-full flex flex-col items-center justify-center overflow-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        <span className="underline-custom">Resu</span>me
      </h2>
      <div className="max-w-5xl w-full h-auto bg-white rounded-lg shadow-2xl flex flex-col">
        <div className="p-6 flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-sm text-gray-600">Senior Software Engineer</p>
            </div>
            <div className="text-sm text-gray-600 mt-4 sm:mt-0">
              <p>Phone: (123) 456-7890</p>
              <p>Email: john.doe@example.com</p>
              <p>Location: San Francisco, CA</p>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-sm leading-relaxed">
              Results-oriented Senior Software Engineer with 20 years of experience designing, developing, and deploying
              complex software solutions. Proficient in a variety of programming languages and technologies. Proven track
              record of leading teams and delivering high-quality products.
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <div>
              <h4 className="text-md font-semibold">ABC Corporation</h4>
              <p className="text-sm text-gray-600">Senior Software Engineer | 2015 - Present</p>
              <ul className="list-disc list-inside text-sm">
                <li>Lead a team of developers in designing and implementing a scalable microservices architecture.</li>
                <li>Developed and maintained critical components of the company's flagship product.</li>
                <li>Collaborated with product managers to define project requirements and timelines.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold">XYZ Tech</h4>
              <p className="text-sm text-gray-600">Software Engineer | 2008 - 2015</p>
              <ul className="list-disc list-inside text-sm">
                <li>Contributed to the development of a cutting-edge mobile application, used by millions worldwide.</li>
                <li>Implemented CI/CD pipelines, improving team efficiency and product quality.</li>
                <li>Mentored junior engineers and conducted code reviews.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Java, Python, JavaScript</li>
              <li>Spring Boot, React, Angular</li>
              <li>MySQL, PostgreSQL, MongoDB</li>
              <li>AWS, Azure, Google Cloud Platform</li>
              <li>Scrum, Kanban</li>
              <li>Docker, Kubernetes, Jenkins</li>
            </ul>
          </div>
        </div>
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
          bottom: -5px;
          width: 100%;
          height: 3px;
          background-color: #149ddd;
        }
      `}</style>
    </div>
  );
};

export default Resume;
