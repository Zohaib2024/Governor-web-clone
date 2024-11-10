import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div> 
        <div className=" flex flex-row  w-screen h-20 bg-blue-900 ">
<div className='w-1/12'>

</div>

    <div className="  mt-4 w-1/12 sm:w-20 md:w-40 " >
    <Image
     src="/sindh_logo.png"
     width={100}
     height={78}
     alt="Governor sindh logo"
   />
    </div>
    <div className='w-1/12'>

</div>
    <div className="text-white flex justify-center  items-center w-5/12">
   <span className=" font-semibold hidden lg:block"   style={{ fontSize: "20px" }}> Tuition Free Education Program on Latest Technologies</span> 
     </div>
<div className='w-1/12'>

</div>
<div className="text-white flex flex-row  md:mr-10 md:gap-10 sm:gap-5  list-none   justify-center  items-center
w-3/12">
 <li className=" hover:cursor-pointer w-1/5"><a href="/">Home</a></li>
 <li className="hover:cursor-pointer w-1/5">
  <Link href="https://www.governorsindh.com/apply">Apply</Link>
</li>
<li className="hover:cursor-pointer w-1/5">
 <Link href="https://www.governorsindh.com/jobs">jobs</Link> 
</li>
<li className="hover:cursor-pointer w-1/5">
  <Link href="https://www.governorsindh.com/result" >Result</Link>
</li>
<li className="hover:cursor-pointer w-1/5">
  <Link href="/" >Courses</Link>
</li>
</div>
<div className='w-1/12'></div>
     </div>
     </div>
  )
}

export default Navbar
