import React from 'react'
import { FaUikit } from 'react-icons/fa'

const CreativeCardContainer = () => {
  return (
    <div className='bg-slate-700 w-full h-full p-6 text-2xl rounded-2xl overflow-hidden relative'>
      <div className="absolute -ml-16 -mt-16 rounded-xl bg-green-600 p-4 w-48 h-48 rotate-45 flex justify-center items-center">
       <h4 className=' -rotate-45 ml-6'>
        <FaUikit className=" text-6xl text-gray-700"/>
       </h4>
      </div>
       <h1 className=' text-right text-slate-300 text-5xl'>UI/UX</h1>
       <h3 className=' text-right text-green-500 uppercase text-lg mt-3'>Timeline</h3>
       <p className='text-right text-base'> 2 - 5 weeks</p>
       <h3 className=' text-right text-green-500 uppercase text-lg mt-3'>Who is involved</h3>
       <p className='text-right text-base'>Product managers and  UX experts</p>
       <h3 className=' text-right text-green-500 uppercase text-lg mt-3'>Delivarlable</h3>
       <p className='text-right text-base'>Product Field Map, User flows & emotion patterns, Scope, Project proposal, Timeline & Cost estimation.</p>
       <p className='text-base mt-3'>We take pride in our craft. Drawing on our deep expertise in product design, our Design team takes care of your user’s experience over the entire customer journey, at every touchpoint working hand in hand with your business team. We aim to achieve your strategic goals while delivering exceptional interactions with visual polish.</p>
       
    </div>
  )
}

export default CreativeCardContainer
