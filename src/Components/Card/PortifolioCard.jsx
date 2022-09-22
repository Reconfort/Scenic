import React from 'react'
import ProjectImg from '../../Asset/Project.svg'
import { GoDiffAdded, GoHeart } from 'react-icons/go'

const PortifolioCard = () => {
  return (
    <div className='text-3xl rounded-xl p-2 flex flex-col group relative group duration-700 text-slate-300  hover:scale-105'>
      <div className="flex justify-center items-center">
        <img src={ProjectImg} alt="Project Image" />
        <div className="justify-center items-center absolute gap-2 p-2 rounded-2xl hidden group-hover:flex duration-500">
        <div className="bg-red-700/20 h-20 w-20 rounded-2xl flex justify-center items-center hover:bg-red-700 backdrop-blur-md text-red-600 hover:text-white hover:-translate-y-2 duration-1000">
          <GoHeart />
        </div>
        <div className="bg-green-600/20 h-20 w-20 rounded-2xl flex justify-center items-center hover:bg-green-700 backdrop-blur-md text-green-600 hover:text-white hover:-translate-y-2 duration-1000">
          <GoDiffAdded />
        </div>
      </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
            <img src={ProjectImg} alt=""  className='w-10 h-10 rounded-full'/>
            <p className='ml-2'>Unfold</p>
        </div>
        <div className="flex">
            <GoHeart/>
            <p className='ml-2'>12</p>
        </div>
      </div>
      
    </div>
  )
}

export default PortifolioCard
