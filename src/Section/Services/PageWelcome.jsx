import React from 'react'
import Mbwira from '../../Components/Buttons/Mbwira'
import Header from '../../Components/Header'
import PageWelcomeContent from '../../Components/PageWelcomeContent'

const PageWelcome = () => {
  return (
    <div className='HomewelcomeBg w-screen px-4 py-4 overflow-hidden
        sm:px-5 sm:py-6
        md:px-6 md:py-6
        lg:px-10 lg:py-8
        xl:px-10 xl:py-10
    '>
      <Header/>
      <PageWelcomeContent/>
      <Mbwira/>
    </div>
  )
}

export default PageWelcome
