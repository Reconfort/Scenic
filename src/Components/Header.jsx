import React from 'react'
import Logo from '../Asset/Logo.svg'
import HeaderAccount from './Buttons/HeaderAccount'
import Navbars from './Navbars'
import Sidebars from './Sidebars'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center fixed right-0 px-8 top-0 mt-4 z-50'>
        <img src={Logo} alt="Scenic Logo" className='w-28'/>
        <Navbars/>
        <HeaderAccount/>
        <Sidebars/>
    </div>
  )
}

export default Header