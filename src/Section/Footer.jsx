import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Logo from '../Asset/Logo.svg'

const Footer = () => {
  return (
    <div className='bg-black w-screen text-slate-300 p-8
    sm:px-5 sm:py-3 sm:pb-8
    md:px-6 md:py-3 md:pb-16
    lg:px-10 lg:py-8 lg:pb-24
    xl:px-10 xl:py-8 xl:pb-28'>
      <center>
        <button className='absolute -mt-4 bg-slate-200 w-10 h-10 rounded-full text-black'> 
          <center><FaArrowUp/></center>
        </button>
      </center>
      <div className="rounded-2xl flex flex-col border-solid border border-slate-300 h-full">
        <div className="flex justify-between w-full px-8 pt-4 flex-col h-full text-slate-300
        sm:flex-row sm:px-12
        md:flex-row md:px-20
        lg:flex-row lg:px-32
        xl:flex-row xl:px-32">
          <ul className='w-full h-full py-2
          sm:py-4 sm:w-full
          md:py-8 md:w-1/3
          lg:py-8 lg:w-1/3
          xl:py-12 xl:w-1/3'>
            <h1 className='text-2xl text-green-600 mb-8'>Menu</h1>
            <li>Portifolio</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Career</li>
          </ul>
          <ul className='w-full h-full py-2
          sm:py-4 sm:w-full
          md:py-8 md:w-1/3
          lg:py-8 lg:w-1/3
          xl:py-12 xl:w-1/3'>
            <h1 className='text-2xl text-green-600 mb-8'>Social</h1>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Upwork</li>
            <li>Youtube</li>
          </ul>
          <ul  className='w-full  h-full py-2
          sm:py-4 sm:w-full
          md:py-8 md:w-1/3
          lg:py-8 lg:w-1/3
          xl:py-12 xl:w-1/3'>
            <h1 className='text-2xl text-green-600 mb-8'>Contact us</h1>
            <li>Kigali - Kacyiru</li>
            <li>kg 655 st ave Kigali - Kacyiru near Kigali height</li>
          </ul>
        </div>
        <div className='flex bg-slate-500 w-full rounded-b-2xl justify-between items-center px-6'>
          <img src={Logo} alt="Scenic Logo" className=' w-40 py-8'/>
          <p className='text-green-500'>2022- All right reserved</p>
          <ul className='hidden gap-4
          sm:hidden
          md:flex
          lg:flex
          xl:flex'>
            <li>Date privacy</li>
            <li>Legal notice</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
