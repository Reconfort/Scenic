import React from 'react'
import Sponsor from './Card/Sponsor'

const Sponsors = () => {
  return (
    <div className='grid grid-cols-4 p-2 gap-2 rounded-2xl rotate-0 mr-10 scale-75 -mt-10
    sm:rotate-0 sm:grid-cols-4
    md:gap-x-28 md:rotate-45 md:grid-cols-3
    lg:gap-x-24 lg:rotate-45 lg:grid-cols-3
    xl:rotate-45 xl:grid-cols-3'>
      <Sponsor title="Azubi"/>
      <Sponsor title="Uzuri"/>
      <Sponsor title="Andela"/>
      <Sponsor title="Microverse"/>
      <Sponsor title="Jasiri"/>
      <Sponsor title="AIPI"/>
      <Sponsor title="Grun"/>
      <Sponsor title="Frexxter"/>
      <span className="hidden sm:hidden md:block lg:block xl:block">
      <Sponsor title="Nova"/>
      </span>
    </div>
  )
}

export default Sponsors
