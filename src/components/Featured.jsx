import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {

    const cards=[useAnimation(),useAnimation()]
    
    const handleHover=(index)=>{
        cards[index].start({y:"0",width:"50%"})
    }
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%",width:"100%"})
    }

  return (
    <div className='w-full py-20'>
      <div className="w-full px-14 border-b-[1px] border-zinc-600 pb-12">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
            Featured projects
        </h1>
      </div>
      <div className="px-14">
        <div className="cards w-full mt-12 flex gap-8">
            <motion.div
            onHoverStart={()=>handleHover(0)}
            onHoverEnd={()=>handleHoverEnd(0)}
            className="cardContainer w-1/2 h-[80vh] relative">
                <h1 className="absolute flex overflow-hidden z-[9] text-[#8ba628] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
                    {"FYDE".split("").map((item,index)=>(
                        <motion.span 
                        initial={{y:'100%'}} 
                        animate={cards[0]} 
                        transition={{ease:[0.64, 0, 0.78, 0],delay:index*0.05}}
                        key={index}>{item}</motion.span>
                    ))}
                </h1>
                <div className="w-full h-full bg-zinc-500 rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer relative w-1/2 h-[80vh]">
            <h1 className="absolute z-[9] flex overflow-hidden right-full top-1/2 text-[#8ba628] translate-x-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
                {"VISE".split("").map((item,index)=>(
                    <motion.span 
                        initial={{y:'100%'}} 
                        animate={cards[1]} 
                        transition={{ease:[0.64, 0, 0.78, 0],delay:index*0.05}}
                        key={index}>{item}</motion.span>
                ))}
            </h1>
                <div className="w-full h-full bg-zinc-500 rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Featured
