import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-zinc-900'>
      <h1 className='wrap-nowrap font-["Neue_Montreal"] text-5xl leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great people.</h1>

      <div className="w-full flex justify-around border-t-[1px] border-zinc-500 mt-10 pt-4">
        <div className="w-1/2 font-['Neue_Montreal']">
          <h1 className='text-6xl'>Our approach:</h1>
          <button className="text-zinc-200 bg-zinc-950 px-6 py-4 mt-4 rounded-full flex items-center gap-8">READ MORE
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#a6c631] rounded-3xl"></div>
      </div>
    </div>
  )
}

export default About
