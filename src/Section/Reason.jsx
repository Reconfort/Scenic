import React from 'react'
import { FaGlobe, FaGoogle, FaLaptopCode, FaMobile } from 'react-icons/fa'
import NextButton from '../Components/Buttons/NextButton'

const Reason = () => {
  return (
    <div className='ReasonBg h-screen w-screen text-slate-300 px-4 py-2
    sm:px-5 sm:py-3
    md:px-6 md:py-3
    lg:px-10 lg:py-4
    xl:px-10 xl:py-4
    '>
      <div className="flex flex-col w-full h-full pt-10 justify-between
      sm:
      md:flex-row
      lg:
      xl:
      ">
        <div className=' w-full
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-2/5
        xl:w-2/5'>
            <h1 className='text-5xl w-3/4'>Reasons to <span className='text-green-500'>choose</span> Scenic</h1>
            <p className=' text-sm my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique magnam nesciunt earum officia ex asperiores harum consequatur porro praesentium, esse deserunt velit officiis alias optio blanditiis ipsa a iure?
            Cum iste maxime dignissimos hic sed libero voluptatum alias quas, fugit eos porro eligendi odit? Nam, tenetur quis? Quos accusantium velit doloremque, eius consequatur ab modi recusandae beatae blanditiis sint?</p>
            <NextButton/>
        </div>
        <div className="w-full rounded-2xl grid grid-cols-2 h-full p-4 bg-slate-400/20 backdrop-blur-sm     transform scale-90
        sm:grid-cols-2
        md:grid-cols-1 md:w-2/4 md:h-4/5
        lg:grid-cols-2
        xl:grid-cols-2">
            <div className="bg-blue-500/80 rounded-tl-2xl flex flex-col justify-center items-center -mt-4 -ml-4 mb-4 mr-4
            sm:rounded-tl-2xl
            md:rounder-t-2xl md:m-0 md:mt-1
            lg:rounded-none lg:rounded-tl-2xl lg:-mt-4 lg:-ml-4 lg:mb-4 lg:mr-4
            xl:rounded-tl-2xl xl:-mt-4 xl:-ml-4 xl:mb-4 xl:mr-4">
                <FaLaptopCode className='text-black text-6xl mb-3'/>
                <h1>Project Discovery</h1>
            </div>
            <div className="bg-black rounded-tr-2xl flex flex-col justify-center items-center
            sm:rounded-tr-2xl
            md:rounder-none md:mt-1
            lg:rounded-tr-2xl
            xl:rounded-tr-2xl
            md:rounded-none ">
                <FaMobile className='text-slate-300 text-6xl mb-3'/>
                <h1>Mobile Apps</h1>
            </div>
            <div className="bg-black rounded-bl-2xl flex flex-col justify-center items-center
            sm:rounded-bl-2xl
            md:rounder-none md:mt-1
            lg:rounded-bl-2xl
            xl:rounded-bl-2xl
            md:rounded-none ">
                <FaGlobe className='text-slate-300 text-6xl mb-3'/>
                <h1>Web & DashBoard</h1>
            </div>
            <div className="bg-blue-500/80 rounded-br-2xl flex flex-col justify-center items-center  -mb-4 -mr-4 mt-4 ml-4
            sm:rounded-br-2xl
            md:rounded-b-2xl md:m-0 md:mt-1
            lg:rounded-none lg:rounded-br-2xl lg:-mb-4 lg:-mr-4 lg:mt-4 lg:ml-4
            xl:rounded-br-2xl xl:-mb-4 xl:-mr-4 xl:mt-4 xl:ml-4">
                <FaGoogle className='text-black text-6xl mb-3'/>
                <h1>Search Engine Opt</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reason
