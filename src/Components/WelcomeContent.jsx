import React from 'react'
import WelcomeCard from './Card/WelcomeCard'
import LeftContent from './LeftContent'

const WelcomeContent = () => {
  return (
    <div className='flex justify-between mt-16'>
       <div className="left">
        <LeftContent/>
       </div>
       <div className="hidden
       sm:hidden
       md:block
       lg:block
       xl:block">
        <WelcomeCard/>
        <WelcomeCard/>
        <WelcomeCard/>
       </div>
    </div>
  )
}

export default WelcomeContent