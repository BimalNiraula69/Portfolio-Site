
import React from 'react'
import dragon from "../assets/dragon.jpg";

const MainContent = () => {
  return (
<div>
    <div className="flex-1 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${dragon})` }}>
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-20">
        <h1 className="text-white text-5xl font-bold">Bimal Niraula</h1>
        <p className="text-white text-xl mt-2">I'm a Freelancer</p>
      </div>
    </div>
    <div className="flex-1 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${dragon})` }}>
    <div className="absolute inset-0 flex flex-col justify-center items-start pl-20">
      <h1 className="text-white text-5xl font-bold">Bimal Niraula</h1>
      <p className="text-white text-xl mt-2">I'm a Freelancer</p>
    </div>
  </div>
  <div className="flex-1 h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${dragon})` }}>
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-20">
        <h1 className="text-white text-5xl font-bold">Bimal Niraula</h1>
        <p className="text-white text-xl mt-2">I'm a Freelancer</p>
      </div>
    </div>
</div>
  )
}

export default MainContent