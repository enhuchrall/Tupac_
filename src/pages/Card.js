import React from 'react';

export default function Card({name,image,description}) {
  return (
    <div className="h-[40vh] w-[80vw] md:w-[25vw] lg:w-[25vw] xl:w-[25vw] 2xl:w-[25vw] border rounded-2xl">
      <img src={image} className='h-[60%] w-full rounded-2xl bg-center bg-cover bg-no-repeat'></img>
      <div className="h-[40%] w-full flex justify-center items-center flex-col">
        <p className="text-md text-white p-2 text-justify">
          {name}...
        </p>
        <p className="text-sm text-[#999] p-2 text-justify">
         {description}
        </p>
      </div>
    </div>
  );
}
