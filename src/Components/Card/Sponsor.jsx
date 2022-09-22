import React from 'react'

const Sponsor = ({title}) => {
  return (
    <div className=' bg-gray-900 w-36 h-36 flex justify-center items-center rounded-2xl shadow-inner shadow-green-500 scale-95 hover:scale-110 duration-500 hover:z-40'>
        <h2 className=' rotate-0
        sm:rotate-0
        md:-rotate-45
        lg:-rotate-45
        xl:-rotate-45'>{title}</h2>
    </div>
  )
}

export default Sponsor
