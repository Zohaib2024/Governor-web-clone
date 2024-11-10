import React from 'react'
import Advcolcard from './Advcolcard'


const Advcoldata =[
    {
 
        img:"/adv 1.jpg",
        name:'Artificial intelligence',
       
    },
    {
        
        img:"/adv 2.jpg",
        name:'Web 3 and Metaverse',
       
    },
    {
        img:"/adv 3.jpg",
        name:'Cloud-Native Computing',
        
    },
    {
        
      img:"/adv 4.jpg",
      name:'Ambient Computing and IOT',
     
  },
]
const Advcol = () => {
  return (
    <section id='Advcol'>
    <div className='container pt-32'>
  <h1 className=' mb-10 text-3xl ml-16 font-bold text-blue-700'>Advanced courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10 ml-10">
      {Advcoldata.map((item ,index) =>  ( <Advcolcard 
            key = {index} 
          
         
            img = {item.img}
            name={item.name} 
       
            
            />) )}
      </div>
    </div>
    </section>
  )
}

export default Advcol