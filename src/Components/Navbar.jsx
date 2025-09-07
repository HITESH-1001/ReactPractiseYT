import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'

const Navbar = () => {
    const [isClick, setIsClick] = useState(false)
    useGSAP(()=>{
        if(isClick){
            gsap.to(".img-wrapper img",{
                scale:1.2,
                stagger:0.2,
                ease:"power3.inOut"
            })
        }
    })

  return (
    <nav className=' fixed w-full p-6 z-40 bg-gray-800 flex items-center justify-between'>
        <h1 className='bg-red-600 text-3xl font-bold '>Navbar</h1>
        <div onClick={()=>{setIsClick(!isClick)}} className='bg-blue-500 cursor-pointer relative z-50'>
            {isClick?"close":"menu"}
        </div>
        <div className={`${isClick?"h-full":"h-0"} bg-neutral-900 fixed inset-0 overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className='bg-red-300 flex justify-between p-20'>
 <div className='p-20 w-1/2 text-3xl space-y-5'>
                <p className='cursor-pointer  bg-red-600'>Home</p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Contact</p>
            </div>
            <div className='img-wrapper flex flex-wrap gap-10'>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF2YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='w-40 h-40 object-cover'/>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF2YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='w-40 h-40 object-cover'/>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF2YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className='w-40 h-40 object-cover'/>

           </div>
        </div>
           
        </div>
    </nav>
  )
}

export default Navbar