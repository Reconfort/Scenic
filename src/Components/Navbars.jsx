import React from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (    
      <ul className='gap-6 hidden text-white text-sm
      sm:hidden
      md:hidden
      lg:flex
      xl:flex'>
        <Link to="/" className='hover:text-green-500 hover:scale-110 duration-500 cursor-pointer'>Home</Link>
        <Link to="/Services" className='hover:text-green-500 hover:scale-110 duration-500 cursor-pointer'>Services</Link>
        <Link to="/Works" className='hover:text-green-500 hover:scale-110 duration-500 cursor-pointer'>Our works</Link>
        <Link to="/Company" className='hover:text-green-500 hover:scale-110 duration-500 cursor-pointer'>Company</Link>
      </ul>
  )
}

export default Navbars