import React from 'react'
import FocusImg from '../Asset/Img5.jpg'
import CompanyDetailCard from '../Components/Card/CompanyDetailCard'

const CompanyDetails = () => {
  return (
    <div className='bg-black w-screen text-slate-300'>
      <div className="flex px-8 flex-col
      sm:flex-col
      md:flex-col
      lg:flex-row
      xl:flex-row">
        <img src={FocusImg} alt="" className='w-full h-64 rounded-2xl
        sm:w-full sm:h-64
        md:w-full md:h-64
        lg:h-96
        xl:h-96'/>
        <div className=" w-full px-8">
        <div className="">
            <h1 className='text-5xl w-full text-slate-300 my-6
            sm:my-6
            md:
            lg:
            xl:'>We are able to <span className='text-green-500'>Provide</span> your digital needs</h1>
            <p className="my-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              <br /> 
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <div className="hidden
            sm:hidden
            md:grid md:grid-cols-4 md:gap-5 md:pt-8
            lg:grid lg:grid-cols-4 lg:gap-5 lg:pt-8
            xl:grid xl:grid-cols-4 xl:gap-5 xl:pt-8">
            <CompanyDetailCard/>
            <CompanyDetailCard/>
            <CompanyDetailCard/>
            <CompanyDetailCard/>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails
