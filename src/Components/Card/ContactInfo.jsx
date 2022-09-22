import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

const ContactInfo = ({icon, title, desc}) => {
  return (
    <div className='text-black mt-3 p-2'>
        <div className="flex">
            <FaLocationArrow className='text-xl text-slate-200'/>
            <h1 className='text-green-700 font-bold ml-4 text-lg'>{title}</h1>
        </div>
        <p className='text-slate-100'>{desc}</p>
    </div>
  )
}

export default ContactInfo
