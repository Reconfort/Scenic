import React from 'react'

const Mbwira = () => {
  return (
    <div className='bg-green-600 fixed bottom-0 right-0 mb-10 mr-10 py-2 px-6 rounded-full z-50'>
        <h1 className='block sm:hidden md:hidden lg:hidden xl:hidden'>Xsmall</h1>
        <h1 className='hidden sm:block md:hidden lg:hidden xl:hidden'>Small</h1>
        <h1 className='hidden sm:hidden md:block lg:hidden xl:hidden'>Medium</h1>
        <h1 className='hidden sm:hidden md:hidden lg:block xl:hidden'>Large</h1>
        <h1 className='hidden sm:hidden md:hidden lg:hidden xl:block'>XLarge</h1>
    </div>
  )
}

export default Mbwira