import React from 'react'
// import Mbwira from '../Components/Buttons/Mbwira'
import Creative from '../Components/Creative'
import Process from '../Section/Process'
import WhyChooseUs from '../Components/WhyChooseUs'
import Footer from '../Section/Footer'
import NextButton from '../Components/Buttons/NextButton'


const Welcome = () => {
  return (
    <div className="">
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
        xl:text-8xl xl:w-2/3'>Our services</h1>
        <p className='text-slate-400 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic illo rerum libero ullam autem! Harum a consectetur, voluptatem sunt unde error magni dolorum fugit ipsum sapiente soluta et, voluptatibus non.</p>
        <button className="my-10"><NextButton/></button>
//         <Mbwira/>
        </div>
        <Creative/>
        <Process/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default Welcome
