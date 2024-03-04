import React, { useEffect, useState } from 'react'

function Eyes() {
    
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
      });




  return (
    <div className='w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-0.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute gap-10 flex top-[18vw] left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="bg-zinc-100 flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg`}} className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                        <div className="bg-zinc-100 w-6 h-6 rounded-full">
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-100 flex items-center justify-center w-[15vw] h-[15vw] rounded-full">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg`}} className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                        <div className="bg-zinc-100 w-6 h-6 rounded-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
