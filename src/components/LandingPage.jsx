import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textStructure mt-36 px-20">
            {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
                return <div key={index} className="masker">
                            <h1 className="uppercase text-8xl leading-[7vw] font-semibold font-['Test_Founders_Grotesk']">
                                {item}
                            </h1>
                        </div>
            })}
            
        </div>
        <div className='border-t-[1px] mt-28 border-zinc-700 flex justify-between py-4 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index) =>(
                <p className='text-md font-light font-["Neue Montreal"]'>{item}</p>
            ))}
            <div className='font-["Test_Founders_Grotesk"]'>
                START THE PROJECT
            </div>
        </div>
    </div>
  )
}

export default LandingPage
