import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const ScrollImageReveal = () => {
    const data=[
//generate an array of 10 objects with title and image property using picsum.photos id also
        {id:1,title:"Service 1",image:"https://picsum.photos/id/1011/800/600"},
        {id:2, title:"Service 2",image:"https://picsum.photos/id/1012/800/600"},
        { id:3, title:"Service 3",image:"https://picsum.photos/id/1013/800/600"},

    ]
    useGSAP(()=>{
            gsap.registerPlugin(ScrollTrigger)

        gsap.utils.toArray('.slider .image').forEach((image,i)=>{
            gsap.fromTo(image,{clipPath:"inset(0% 100% 0% 0% round 25px)"},
                {clipPath:"inset(0% 0% 0% 0% round 25px)",
                    duration:1,
            ease:"none",

                    scrollTrigger:{
                trigger:image,
                start:"clamp(top bottom)",
                end:"clamp(top top)",
                scrub:true
            }})
        })
    })
  return (
    <div className='bg-neutral-900 text-white py-96'>
    {data.map((service,i)=>{
        return <div key={i} className='slider flex border-b border-white/25 p-3'>
          <div className='w-[40%] text-4xl self-end p-8'>
            <h1>{service.title}</h1>
          </div>
        <div className='w-[60%] h-68'>
            <div className='image w-full h-full bg-cover bg-left' style={{backgroundImage:`url(${service.image})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} ></div>
        </div>
        </div>
    })}

    </div>
  )
}

export default ScrollImageReveal