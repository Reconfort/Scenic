import React from 'react'
import PortifolioCard from '../Components/Card/PortifolioCard'

const Portifolio = () => {
  return (
    <div className='bg-black w-screen px-4 py-2 overflow-hidden pt-3 grid grid-cols-1 gap-8
    sm:px-5 sm:py-3 sm:pt-4 sm:grid-cols-2
    md:px-6 md:py-3 md:pt-5 md:grid-cols-3
    lg:px-10 lg:py-4 lg:pt-6 lg:grid-cols-4
    xl:px-10 xl:py-4 xl:pt-8'>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
      <PortifolioCard/>
    </div>
  )
}

export default Portifolio
