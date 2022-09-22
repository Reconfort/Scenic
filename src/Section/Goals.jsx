import React from 'react'
import Sponsors from '../Components/Sponsors'
import Norp from '../Components/Card/Norp'
import NextButton from '../Components/Buttons/NextButton'
import ContactInfo from '../Components/Card/ContactInfo'
import AchieveCard from '../Components/Card/AchieveCard'

const Goals = () => {
  return (
    <div className='TestimonyBg w-screen px-8 py-2 pt-10 pb-8 text-slate-300
    sm:px-5 sm:py-3 sm:pb-8
    md:px-6 md:py-3 md:pb-16
    lg:px-10 lg:py-8 lg:pb-24
    xl:px-10 xl:py-8 xl:pb-28
    '>
      <div className="flex flex-col w-full h-full pt-10 justify-between
      sm:
      md:flex-row
      lg:
      xl:
      ">
        <div className=' w-full
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-2/5
        xl:w-2/5'>
            <h1 className='text-5xl'>Our <span className='text-green-500'> achivements</span></h1>
            <p className=' text-md my-4 mt-8'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            
            
        </div>
        <div className='w-full flex items-center justify-center
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-2/5
        xl:w-2/5'>
                <AchieveCard/>
        </div>
      </div>

    </div>
  )
}

export default Goals
