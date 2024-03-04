import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className="w-full px-14 border-b-[1px] border-zinc-600 pb-12">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
            Featured projects
        </h1>
      </div>
      <div className="px-14">
        <div className="cards w-full mt-12 flex gap-8">
            <div className="cardContainer w-1/2 h-[80vh] relative">
                <h1 className="absolute z-[9] text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
                    {"FYDE".split("").map((item,index)=>(
                        <span key={index}>{item}</span>
                    ))}
                </h1>
                <div className="w-full h-full bg-zinc-500 rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className="cardContainer relative w-1/2 h-[80vh]">
            <h1 className="absolute z-[9] right-full top-1/2 text-[#CDEA68] translate-x-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
                {"VISE".split("").map((item,index)=>(
                    <span key={index}>{item}</span>
                ))}
            </h1>
                <div className="w-full h-full bg-zinc-500 rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured
