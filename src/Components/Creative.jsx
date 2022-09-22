import React from 'react'
import CreativeCard from './Card/CreativeCard'
import CreativeCardContainer from './Card/CreativeCardContainer'

const Creative = () => {
  return (
    <div className='bg-black text-slate-300 w-screen py-4 px-4
    sm:px-5
    md:px-6
    lg:px-10
    xl:px-12'>
        <h1 className='text-5xl w-full text-slate-300 py-12
            sm:w-full
            md:w-full
            lg:w-4/5
            xl:w-3/5'>
                A creative digital  <span className='text-green-500'> agency </span> with excellence services
        </h1>
        <div className=" w-full -mt-4 flex flex-col
        sm:flex-col
        md:flex-row
        lg:flex-row
        xl:flex-row">
          <div className=" w-full grid grid-cols-3 justify-center items-center gap-4 p-4
          sm:grid-cols-3 sm:full
          md:grid-cols-2 sm:full md:w-2/4">
            <CreativeCard/>
            <CreativeCard/>
            <CreativeCard/>
            <CreativeCard/>
            <CreativeCard/> 
            <CreativeCard/> 
          </div>
          <div className=" w-full p-4"><CreativeCardContainer/></div>
        </div>
    </div>
  )
}

export default Creative
