import React from 'react'
import Sponsors from '../Components/Sponsors'
import Norp from '../Components/Card/Norp'
import NextButton from '../Components/Buttons/NextButton'
import ContactInfo from '../Components/Card/ContactInfo'

const WhyChooseUs = () => {
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
            <h1 className='text-5xl'>Why  <span className='text-green-500'>Choose</span> us</h1>
            <p className=' text-md my-4 mt-8'>
            Our sales team has hypnotizing powers and basically subconsciously convinces everybody to work with us. LOL just kidding!
            </p>
          <NextButton/>
            
        </div>
        <div className='w-full
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-3/5
        xl:w-2/5'>
                <div className="bg-slate-600/20 backdrop-blur-sm w-full p-4 rounded-2xl pl-10 mt-8
        sm:w-full
        md:w-full
        lg:w-full
        xl:w-full">
          <ContactInfo title="YOUNG AND CREATIVE" desc="Our team is young and full of spirit, it’s a breath of fresh air working with us."/>
          <ContactInfo title="APPEALING DESIGNS" desc="We care about your users' experience. That’s why we keep everything pretty and clean."/>
          <ContactInfo title="BRUTALLY SIMPLE" desc="We believe in simplicity and ease of use."/>
        </div>
        </div>
      </div>

      
    </div>
  )
}

export default WhyChooseUs
