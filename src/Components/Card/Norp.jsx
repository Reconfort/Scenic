import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Norp = () => {
  return (
    <div className='mt-5 flex justify-between items-center'>
      <FaArrowLeft className='bg-gray-900 w-10 h-10 rounded-full p-2 hover:bg-green-500 hover:scale-150 cursor-pointer duration-500'/>
        <h2 className='text-3xl text-slate-200 mt-3'>David Lois</h2>
      <FaArrowRight className='bg-gray-900 w-10 h-10 rounded-full p-2 hover:bg-green-500 hover:scale-150 cursor-pointer duration-500'/>
    </div>
  )
}

export default Norp
