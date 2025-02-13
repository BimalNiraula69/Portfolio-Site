import React from 'react';

const Posts = () => {
  return (
    <div className='relative w-screen h-screen'>
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
      <h2 className="mt-5 ml-4 text-2xl font-semibold"><span class="underline-custom">Pos</span>ts</h2>
    </div>
  )
}

export default Posts