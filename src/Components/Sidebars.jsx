import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Sidebars = () => {

  const [hamburger, setHamburger] = useState(true)
  return (
    <div className='block
    sm:block
    md:block
    lg:hidden
    xl:hidden
    '>
      <button className="bg-slate-300 text-slate-900 p-2 rounded-full relative z-20" onClick={() => setHamburger(!hamburger)}>
        {
          hamburger ?
          <FaBars className='text-lg'/>
          :
          <FaTimes className='text-lg'/>
        }
      </button>
      {!hamburger &&
        <div className="bg-slate-900 absolute h-screen w-screen left-0 top-0 z-10 flex justify-center items-center opacity-90 text-slate-300">
          <ul className='flex flex-col gap-y-3 justify-center items-center'>
            <Link to="/" onClick={() => setHamburger(!hamburger)}className='hover:scale-150 hover:text-green-600 duration-1000 cursor-pointer'>Home</Link>
            <Link to="/Services" onClick={() => setHamburger(!hamburger)}className='hover:scale-150 hover:text-green-600 duration-1000 cursor-pointer'>Services</Link>
            <Link to="/Works" onClick={() => setHamburger(!hamburger)}className='hover:scale-150 hover:text-green-600 duration-1000 cursor-pointer'>Our works</Link>
            <Link to="/Company" onClick={() => setHamburger(!hamburger)}className='hover:scale-150 hover:text-green-600 duration-1000 cursor-pointer'>Company</Link>
            <button className=' bg-slate-300 text-slate-900 py-1 px-20 rounded-full border-1 border-2 hover:bg-transparent hover:text-slate-300 duration-700 absolute bottom-0 mb-10'
              onClick={() => setHamburger(!hamburger)}>
              Contact Us
            </button>
          </ul>
        </div>
      }
    </div>
  )
}

export default Sidebars