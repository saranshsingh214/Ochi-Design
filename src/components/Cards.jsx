import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 px-16 items-center'>
      <div className="Cardcontainer w-1/2 h-[55vh]">
        <div className="card relative w-full  h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className="absolute bottom-8 left-5 px-4 py-1 border-2 rounded-full border-lime-500 text-lime-500">&copy;2019-2022</div>
        </div>
      </div>
      <div className="Cardcontainer w-1/2 h-[55vh] flex gap-5">
        <div className="card w-1/2 h-full bg-[#09322c] flex items-center justify-center relative rounded-xl">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className="absolute bottom-8 left-5 px-4 py-1 border-2 rounded-full">RATING 5.0 ON CLUTCH</div>   
        </div>
        <div className="card w-1/2 h-full bg-[#09322c] flex items-center justify-center relative rounded-xl">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <div className="absolute bottom-8 left-5 px-4 py-1 border-2 rounded-full">BUSINESS BOOTCAMP ALUMINI</div>   
        </div>
      </div>
    </div>
  )
}

export default Cards
