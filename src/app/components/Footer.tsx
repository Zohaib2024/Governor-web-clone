import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
            <Link href="https://www.facebook.com/TeamKTessori" >
    <Image
      src="/Facebook logo.png"
      width={50}
      height={50}
      alt="Facebook"
      className="rounded-full"
    />
  </Link>
       <Link href="https://www.youtube.com/@KamranTessorikk" >
  <Image
    src="/Youtube logo.png"
    width={60}
    height={50}
    alt="Web 2 Using Next.js"
    className="rounded-full"
  />

</Link>
<Link href="/" >
    <Image
      src="/Twitter logo.png"
      width={50}
      height={50}
      alt="Twitter"
      className="rounded-full"
    />
  </Link>
  <Link href="https://instagram.com/KamranTessoriPk/" >
    <Image
      src="/insta logo.png"
      width={60}
      height={50}
      alt="Instagram"
      className="rounded-full"
    />
  </Link>
  <Link href="https://www.tiktok.com/@YourTikTokHandle" >
    <Image
      src="/tiktok logo.png"
      width={44}
      height={40}
      alt="TikTok"
      className="rounded-full"
    />
  </Link>
          
            </div>
<div className='flex flex-row gap-2 '>
            <Image
            src="/Email logo.png"
            width={25}
            height={40}
            alt="Web 2 Using Next.js"   
            className='rounded-full'         
          />
<Link className='text-sky-500 underline-offset-4' href="education@governorsindh.com">education@governorsindh.com</Link>

</div>
        </div>
        </div>

  )
}

export default Footer