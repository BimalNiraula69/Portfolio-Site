import React from 'react';
import assets from "../assets/assets";
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const MainContent = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Freelancer', 'Designer'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
        <div className="ml-64 flex-1 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${assets.dragon})` }}>
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-5">
            <h1 className="text-white text-5xl font-bold">Bimal Niraula</h1>
            <p className="text-white text-xl mt-2">I'm a {' '}<span>{text}</span><span><Cursor cursorStyle='|'/></span></p>
          </div>
        </div>
  );
}

export default MainContent;
