import React, {useContext} from 'react'
import {TitleContext, DescContext } from '../Pages/Company'
// import {TitleContext, DescContext } from '../Pages/Services'
// import {TitleContext, DescContext } from '../Pages/Work'
const PageWelcomeContent = () => {
  const title =useContext(TitleContext)
  const desc = useContext(DescContext)
  return (
    <div className='flex justify-between mt-16'>
      <div className='pt-12
    sm:pr-9 sm:mr-0
    md:pr-9 md:mr-0
    lg:pr-9 lg:mr-0
    xl:pr-9 xl:mr-4'>
      <h1 className='text-slate-300 uppercase text-6xl
      sm:text-7xl
      md:text-7xl
      lg:text-7xl
      xl:text-8xl xl:w-2/3'>{title}</h1>
      <p className='text-slate-400 mt-5'>{desc}</p>
    </div>
    </div>
  )
}

export default PageWelcomeContent