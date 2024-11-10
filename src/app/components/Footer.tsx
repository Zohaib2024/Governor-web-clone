import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-row w-full shadow-2xl bg-gray-200 h-96 mt-10'>
    
        <div className='w-1/12'></div>
        <div className='w-3/12 mt-10 list-none space-y-1 m-5'>
            <h1 className='text-2xl font-bold mb-5'>Core Courses</h1>
            <li>Programming Fundamentals</li>
            <li>Web2 using Next Js</li>
            <li>Earn As you learn</li>
        </div>
        <div className='w-3/12 mt-10 list-none space-y-1 m-5'>
        <h1 className='text-2xl font-bold mb-5'>Advanced Courses</h1>
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial intelligence and Deep Learning</li>
            <li>Ambient computing and IOT</li>
            <li>Genomics and Bionomics</li>
            <li>Network programmability and Automation</li>
        </div>
        <div className='w-3/12 mt-10 space-y-1 m-5 '>
            <h1 className='text-2xl font-bold mb-5'>Social Links</h1>
            <div className='flex flex-row ml-1'>
            <a href="https://www.facebook.com/TeamKTessori" target="_blank" rel="noopener noreferrer">
    <Image
      src="/Facebook logo.png"
      width={50}
      height={50}
      alt="Facebook"
      className="rounded-full"
    />
  </a>
       <a href="https://www.youtube.com/@KamranTessorikk" target="_blank" rel="noopener noreferrer">
  <Image
    src="/Youtube logo.png"
    width={60}
    height={50}
    alt="Web 2 Using Next.js"
    className="rounded-full"
  />

</a>
<a href="/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/Twitter logo.png"
      width={50}
      height={50}
      alt="Twitter"
      className="rounded-full"
    />
  </a>
  <a href="https://instagram.com/KamranTessoriPk/" target="_blank" rel="noopener noreferrer">
    <Image
      src="/insta logo.png"
      width={60}
      height={50}
      alt="Instagram"
      className="rounded-full"
    />
  </a>
  <a href="https://www.tiktok.com/@YourTikTokHandle" target="_blank" rel="noopener noreferrer">
    <Image
      src="/tiktok logo.png"
      width={44}
      height={40}
      alt="TikTok"
      className="rounded-full"
    />
  </a>
          
            </div>
<div className='flex flex-row gap-2 '>
            <Image
            src="/Email logo.png"
            width={25}
            height={40}
            alt="Web 2 Using Next.js"   
            className='rounded-full'         
          />
<a className='text-sky-500 underline-offset-4' href="education@governorsindh.com">education@governorsindh.com</a>

</div>
        </div>
        </div>

  )
}

export default Footer