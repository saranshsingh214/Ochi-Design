import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-speed="0.1" data-scroll-section className='w-full rounded-t-3xl py-20 bg-[#004D43]'>
      <div className="text border-y-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[24vw] leading-none font-semibold pr-16 -mb-[6vw] pt-9 font-["Founders_Grotesk_X"] uppercase'>We are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[24vw] leading-none font-semibold pr-16 -mb-[6vw] pt-9 font-["Founders_Grotesk_X"] uppercase'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
