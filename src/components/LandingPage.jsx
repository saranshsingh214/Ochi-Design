import React from 'react'
import { BsArrowUpRightCircle, BsFillLightbulbFill, BsLightbulb } from "react-icons/bs";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textStructure mt-36 px-20">
            {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
                return <div key={index} className="masker">
                            <div className="flex items-end  w-fit">
                            {index ===1 && (<div className=' mr-[1vw] w-[8vw] rounded-md bg-red-900 h-[5.7vw] relative -top-[1.2vw] overflow-hidden'>
                                <img className='bg-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </div>)}
                                <h1 className="uppercase h-full text-[9vw] -mb-[1vw] pt-[2vw] leading-[.75]  font-medium font-['Founders_Grotesk_X']">
                                    {item}
                                </h1>
                            </div>
                        </div>
            })}
            
        </div>
        <div className='border-t-[1px] mt-20 border-zinc-700 flex justify-between py-4 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index) =>(
                <p className='text-md font-light font-["Neue Montreal"]'>{item}</p>
            ))}
            <div className='font-["Test_Founders_Grotesk"] flex items-center justify-center gap-1'>
                <div className="px-4 py-1 border-[2px] font-light text-md rounded-full cursor-pointer">START THE PROJECT</div>
                <div className="arrow"><BsArrowUpRightCircle size={30}/>
</div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
