import React from 'react'
import Image from 'next/image'

const Info = () => {
  return (
    <div>  
        <div className='flex space-y-10'>
          <div className='w-1/12 '></div>
            <div className='flex flex-col w-10/12 space-y-5'>
    <h1  className=" text-3xl font-bold    text-center"> Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
    <span className="font-sans text-xl">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</span>
    </div>    </div>
    <div className='w-1/12'></div>
    <div className="flex justify-center  ">
<div className="grid  gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center mt-20 mr-10 ml-10 ">

<div className="  h-80   rounded-2xl bg-black flex items-center justify-center text-white">
<Image
      src="/image 1.jpg"
      width={1000}
      height={760}
      alt="Background Image"
    className="w-full h-full  rounded-2xl "
    />
</div>

<div className=" h-80   rounded-2xl bg-black flex items-center justify-center text-white"><Image
      src="/image 2.jpg"
      width={1000}
      height={760}
      alt="Background Image"
    className="w-full h-full  rounded-2xl "
    /></div>

<div className=" h-80   rounded-2xl  bg-black flex items-center justify-center text-white"><Image
      src="/image 3.jpg"
      width={1000}
      height={760}
      alt="Background Image"
    className="w-full h-full rounded-2xl "
    /></div>
    
</div>
</div>
<div className="flex justify-center items-center    ">
  
  
<div className=" justify-center items-center w-full h-full mt-20 grid  gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mr-10 ml-10">

<div className=" h-[500px] rounded-2xl bg-black">
<Image
      src="/big image 1.jpg"
      width={1000}
      height={760}
      alt="Background Image"
    className=" h-full rounded-2xl " />
</div>

<div className="h-[500px] rounded-2xl bg-black">
<Image
      src="/big image 2.jpg"
      width={1000}
      height={760}
      alt="Background Image"
    className=" h-full rounded-2xl " />
</div>
<div className='w-1/12'></div>

</div>
</div>
<hr />

  </div>
  )
}

export default Info