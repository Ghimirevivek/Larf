import React from 'react'

function Comp1() {
  return (
    <div className='w-full h-[calc(100vh-(80px))] bg-researchandinnovation-background bg-cover flex flex-col items-center justify-center space-y-12 px-4 Tablet:px-0'>
        <p className='text-[#1B2D37] font-poppins font-semibold text-3xl Tablet:text-5xl'>Research and Innovation</p>
        <p className='text-[#3b3d44] font-poppins font-medium text-xl Tablet:text-2xl'>Our experienced experts help you advance  <br/>towards your desired outcomes.</p>
       <div className='flex flex-row items-center justify-around h-auto w-auto p-6 space-x-2 border-2 border-[#E0D5BE] border-opacity-20 bg-[#000000] bg-opacity-40 '>
       <button className='text-[#FFFFFF] font-poppins font-medium text-lg Tablet:text-2xl'>Learn More</button>
        <img  src="/ResearchAndInnovationImages/Arrow.svg" alt="arrow"/>
       </div>
    </div>
  )
}

export default Comp1