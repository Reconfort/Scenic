import React from 'react'
import Sponsors from '../Components/Sponsors'
import Norp from '../Components/Card/Norp'
import NextButton from '../Components/Buttons/NextButton'
import ContactInfo from '../Components/Card/ContactInfo'

const Testimony = () => {
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
            <h1 className='text-5xl'>Clients <span className='text-green-500'>Testimonial</span></h1>
            <p className=' text-md my-4 mt-8'>
            "Our first meeting wasn't about tech, it was about solving for the challenges of our market, about fieldwork, and about listening to our clients. That alignment was crucial and intuitive. Our partnership has been energizing and rewarding. I can't recommend the team at Awesomity Lab enough if you are looking for tech solutions in Rwanda."
            </p>
            <h3 className='text-sm text-white mt-2'>Former task force at <span>Awesamit Lab</span></h3>
            <Norp/>
            
        </div>
        <div className='w-full
        sm:w-full
        md:w-2/4 md:pr-4
        lg:w-2/5
        xl:w-2/5'>
                <Sponsors/>
        </div>
      </div>

      {/* Contact Form */}
      <div className='mt-8'>
        <h1 className='text-5xl'>Scenic <span className='text-green-500'>Contact</span> Form</h1>
        <div className="flex justify-between items-center flex-col
        sm:flex-col
        md:flex-row
        lg:flex-row
        xl:flex-row">
        <form action="" className='w-full p-4
        sm:w-full
        md:w-1/2
        lg:w-1/2
        xl:w-1/2'>
          <div className='flex gap-x-2 w-full'>
            <input type="text" className='w-1/2 p-2 outline-none mt-2 bg-transparent border-solid border-b border-slate-300' placeholder='John'/>
            <input type="text" className='w-1/2 p-2 outline-none mt-2 bg-transparent border-solid border-b border-slate-300' placeholder='John'/>
          </div>
            <input type="text" className='w-full p-2 outline-none mt-2 bg-transparent border-solid border-b border-slate-300' placeholder='johndoe@gmail.com'/>
            <input type="text" className='w-full p-2 outline-none mt-2 bg-transparent border-solid border-b border-slate-300' placeholder='Message subject'/>
            <textarea type="text" className='w-full p-2 outline-none mt-2 bg-transparent border-solid border-b border-slate-300' rows="5">
              Your message here ...
            </textarea>
            <button className='mt-5'>
              <NextButton/>
            </button>

        </form>
        <div className="bg-slate-600/20 backdrop-blur-sm w-full p-4 rounded-2xl pl-10
        sm:w-4/5
        md:w-1/2
        lg:w-1/3
        xl:w-1/3">
          <ContactInfo icon="Fa" title="Adress" desc="Kg 655 st,Kacyiru , Kigali Height"/>
          <ContactInfo icon="Fa" title="Phone" desc="(+250) 078 151 067"/>
          <ContactInfo icon="Fa" title="Email" desc="scenicrwanda@gmail.com"/>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Testimony
