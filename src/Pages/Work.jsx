import React from 'react'
// import Mbwira from '../Components/Buttons/Mbwira'
import Portifolio from '../Section/Portifolio'
import Testimony from '../Section/Testimony'
import Footer from '../Section/Footer'
import NextButton from '../Components/Buttons/NextButton'


const Work = () => {
  return (
    <div>
      <div className='PagewelcomeBg w-screen px-4 py-2 overflow-hidden pt-24
          sm:px-5 sm:py-3 sm:pt-32
          md:px-6 md:py-3 md:pt-40
          lg:px-10 lg:py-4 lg:pt-52
          xl:px-10 xl:py-4 xl:pt-64
      '>
          <h1 className='text-slate-300 uppercase text-6xl
        sm:text-7xl
        md:text-7xl
        lg:text-7xl
        xl:text-8xl xl:w-2/3'>We seek to earn love from our client</h1>
        <p className='text-slate-400 mt-5'>Here are few project  we've done for our Clients</p>
        <button className="my-10"><NextButton/></button>
//         <Mbwira/>
      </div>
      <Portifolio/>
      <Testimony/>
      <Footer/>
    </div>
  )
}

export default Work
