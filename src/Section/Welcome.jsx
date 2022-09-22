import React from 'react'
import Mbwira from '../Components/Buttons/Mbwira'
import WelcomeContent from '../Components/WelcomeContent'

const Welcome = () => {
  return (
    <div className='HomewelcomeBg w-screen h-screen px-4 py-2 overflow-hidden
        sm:px-5 sm:py-3
        md:px-6 md:py-3
        lg:px-10 lg:py-4
        xl:px-10 xl:py-4
    '>
      {/* <Header/> */}
      <WelcomeContent/>
      <Mbwira/>
    </div>
  )
}

export default Welcome
