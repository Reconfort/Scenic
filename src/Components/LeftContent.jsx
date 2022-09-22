import React from 'react'
import WelcomeInfo from './Card/WelcomeInfo'

const LeftContent = () => {
  return (
    <div className='pt-12
    sm:pr-9 sm:mr-0
    md:pr-9 md:mr-0
    lg:pr-9 lg:mr-0
    xl:pr-9 xl:mr-4'>
      <h1 className='text-slate-300 uppercase text-6xl
      sm:text-7xl
      md:text-7xl
      lg:text-7xl
      xl:text-8xl'>We' ll help to go deeper into your ideas.</h1>
      <p className='text-slate-400 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aspernatur!</p>
      <div className="flex mt-10 justify-between items-center
      sm:gap-1
      md:gap-1
      lg:gap-1
      xl:gap-1">
        <WelcomeInfo/>
        <WelcomeInfo/>
        <WelcomeInfo/>
      </div>
    </div>
  )
}

export default LeftContent
