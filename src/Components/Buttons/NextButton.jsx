import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const NextButton = () => {
  return (
    <button className='flex justify-center items-center py-1 px-4 rounded-full border-solid border-2 border-slate-800 bg-slate-800 hover:bg-transparent duration-500 text-slate-300 hover:scale-105'>
        Learn more 
        <FaArrowRight className=' animate-bounce ml-4'/>
    </button>
  )
}

export default NextButton