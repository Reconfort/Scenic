import React from 'react'
import ProcessWay from '../Components/ProcessWay'

const Process = () => {
  return (
    <div className='bg-black w-screen px-8 py-2 pt-10 pb-8
    sm:px-5 sm:py-3 sm:pb-8
    md:px-6 md:py-3 md:pb-16
    lg:px-10 lg:py-8 lg:pb-24
    xl:px-10 xl:py-8 xl:pb-28'>
        <div className=" 
        sm:w-full
        md:w-full
        lg:w-1/2
        xl:w-1/2">
            <h1 className='text-5xl w-full text-slate-300
            sm:w-full
            md:w-full
            lg:w-4/5
            xl:w-3/5'>Reasons to <span className='text-green-500'>choose</span> Scenic</h1>
        </div>
        <div>
            <ProcessWay/>
        </div>
    </div>
  )
}

export default Process
