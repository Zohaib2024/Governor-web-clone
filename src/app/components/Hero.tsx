import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className="relative w-full h-full">
    {/* Background Image */}
    <div className="opacity-20 mw-full h-full">
      <Image
        src="/bg_house.jpg"
        width={1000}
        height={760}
        alt="Background Image"
      className="w-full h-full "
      />
    </div>

    {/* Overlay Image */}
    <div className="absolute top-0 left-0   w-full h-550px flex flex-row  space-x-20 ">
<div className='w-1/12'></div>
      <div className="flex  flex-col  justify-center items-start sm:items-center md:items-center md:mb-10 lg:items-start space-y-3   w-5/12 ">
      <h1 className="font-extrabold  text-6xl mb-2 text-blue-900">Governor Sindh</h1>
      <h3 className="text-4xl   " >Kamran Khan Tessori</h3>
      <h1 className="font-extrabold  text-5xl text-sky-500">Certified CloudApplied <br /> Generative AI <br />Engineer (GenEng)</h1>
<h4 className="font-bold text-3xl ">Earn up to $5,000 / month</h4>
<h4 className="font-bold text-3xl ">Now admissions are open in <br />Hyderabad</h4>
<div className="flex w-full">
<div className='w-5/12'
><button className=" bg-blue-800 rounded-xl w-48 h-14 text-lg text-white font-bold m-3  hover:translate-y-3 transition duration-500 ease-in-out"><a href="https://www.governorsindh.com/apply">Apply Now</a></button></div>
<div className="flex flex-col md:flex-col justify-center items-center text-center  w-12/12  "><h1 className="text-2xl font-bold">562,143</h1>Accepted Applications </div>
</div>
      </div>
      <div className=" flex flex-1 justify-center items-start   w-5/12 ">
      <Image
        src="/governor.png"
        width={580}
        height={0}
        alt="Governor Sindh Logo"
       className='hidden lg:block'
      />
      </div>
    
    </div>
  </div>
  </div>
  )
}

export default Hero