import React from 'react'

import TeamCard from '../Components/Card/TeamCard'

const Team = () => {
  return (
    <div className='bg-black w-screen px-8 py-2 pt-10 pb-8 text-slate-300
    sm:px-5 sm:py-3 sm:pb-8
    md:px-6 md:py-3 md:pb-16
    lg:px-10 lg:py-8 lg:pb-24
    xl:px-10 xl:py-8 xl:pb-28
    '>
      <div className="flex flex-col w-full h-full pt-10 justify-between
      sm:
      md:flex-row
      lg:
      xl:
      ">
        <div className=' w-full
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-2/5
        xl:w-2/5'>
            <h1 className='text-5xl'>Our <span className='text-green-500'>Team</span></h1>
            <p className=' text-md my-4 mt-8'>
            Deseigner and developers
            </p>
            
        </div>
        
      </div>
            <div className="grid grid-cols-1 p-4 gap-4 w-full
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-2">
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
            </div>
    </div>
  )
}

export default Team
