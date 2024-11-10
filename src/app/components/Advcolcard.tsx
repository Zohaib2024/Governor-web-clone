import React from 'react'
import Image from 'next/image';

interface propsType {
   

    img:string;
    name:string;

}
const Advcolcard:React.FC<propsType> = ({ img, name}) => {
  return (
    <div>
        <div className="  flex flex-col justify-between" data-aos="zoom-in-up">
          
          
        
            <div className=" w-80 rounded-2xl shadow-2xl transform transition duration-200 hover:scale-105">
          <Image
            src={img}
            width={1200}
            height={760}
            alt="Programming Fundamentals"
            className="w-full h-60 rounded-2xl"
          />
          <p className="mt-4 mb-4 text-center font-semibold w-ful bg-slate-100 text-black  ">{name}</p>
        </div>
        <div className='w-1/12'></div>
        </div>
    </div>
  )
}

export default Advcolcard