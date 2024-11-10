import React from 'react'
import Corecolcard from './Corecolcard'



const Corecoldata =[
    {
 
        img:"/core 1.jpg",
        name:'Programming Fundamentals',
       
    },
    {
        
        img:"/core 2.jpg",
        name:'Web 3 using Nextjs',
       
    },
    {
        img:"/core 3.jpg",
        name:'Earn as you learn',
        
    }
   
]
const Corecol = () => {
  return (
    <section id='Advcol'>
    <div className='container '>
    <h1 className=' mb-10 text-3xl ml-16 mt-20 font-bold text-blue-700'> Core Courses Sequence</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10 ml-10 ">
      {Corecoldata.map((item ,index) =>  ( <Corecolcard 
            key = {index} 
          
         
            img = {item.img}
            name={item.name} 
       
            
            />) )}
      </div>
    </div>
    </section>
  )
}

export default Corecol