import React from 'react'
import Profile from '../../Asset/ayo.jpg'

const TeamCard = () => {
  return (
    <div className="w-full bg-slate-900/50 p-4 rounded-full flex group hover:bg-slate-900">
        <img src={Profile} alt="Member" className=' w-44 h-44 rounded-full rounded-tr-none border-solid border-green-700 border-4 group-hover:rounded-full group-hover:rounded-br-none duration-300'/>
        <div className="flex flex-col pl-4 justify-center">
            <h1 className='text-4xl pb-4 group-hover:text-green-500'>Mireille Kyrislivie</h1>
            <p>CEO, Founder & Developer</p>
        </div>
    </div>
  )
}

export default TeamCard