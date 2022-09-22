import React from 'react'
import ProcessCard from './Card/ProcessCard'
import ArrowRight from '../Asset/ArrowRight.svg'
import CurveArrow from '../Asset/Vector.svg'
import CurveArrow1 from '../Asset/VectorCurve1.svg'
import CurveArrow2 from '../Asset/Vector56.svg'


const ProcessWay = () => {
  return (
    <>
    {/* XLarge VS Large */}
    <div className='grid-cols-2 gap-y-20 pt-10 hidden
    sm:grid-cols-2 sm:hidden
    md:grid-cols-2 md:hidden
    lg:grid-cols-3 lg:grid
    xl:grid-cols-3 xl:grid'>
        <ProcessCard id="1" title="GATHER INFO" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <center><img src={ArrowRight} alt="Right Arrow" className='mt-12'/></center>
        <ProcessCard id="2" title="Develop Plan" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        {/* <center><img src={ArrowRight} alt="Right Arrow" className='mt-12'/></center> */}
        <center><img src={CurveArrow} alt="Right Arrow" className='absolute mt-14 ml-12'/></center>
        <ProcessCard id="5" title="Test and deploy" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <center><img src={ArrowRight} alt="Right Arrow" className='mt-12 rotate-90'/></center>
        {/* <center><img src={ArrowDown} alt="Right Arrow" className='-mt-6'/></center> */}
        <ProcessCard id="4" title="Build" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <center><img src={ArrowRight} alt="Right Arrow" className='mt-12 rotate-180'/></center>
        <ProcessCard id="3" title="Design" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
    </div>

    {/* Medium */}
    <div className='grid-cols-2 gap-y-4 pt-10 hidden
    sm:hidden
    md:grid-cols-2 md:grid
    lg:hidden
    xl:hidden'>
        <ProcessCard id="1" title="GATHER INFO" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <center className="flex justify-center items-center"><img src={CurveArrow1} alt="Right Arrow" className=' scale-50 -ml-32'/></center>
        {/* <center><img src={ArrowRight} alt="Right Arrow" className='mt-12'/></center> */}
        <center className="flex justify-center items-center"><img src={CurveArrow2} alt="Right Arrow" className='scale-50'/></center>
        <ProcessCard id="2" title="Develop Plan" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <ProcessCard id="3" title="Design" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <center className="flex justify-center items-center"><img src={CurveArrow1} alt="Right Arrow" className='scale-50'/></center>
        {/* <center><img src={ArrowDown} alt="Right Arrow" className='-mt-6'/></center> */}
        <center className="flex justify-center items-center"><img src={CurveArrow2} alt="Right Arrow" className='scale-50'/></center>
        <ProcessCard id="4" title="Build" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
        <ProcessCard id="5" title="Test and deploy" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae? Sunt inventore tenetur"/>
    </div>

    {/* Small and Xsmall */}
    <div className='grid-cols-1 gap-y-4 pt-10 grid
    sm:grid-cols-1 sm:grid
    md:hidden
    lg:hidden
    xl:hidden'>
        <div className="flex justify-between">
            <ProcessCard id="1" title="GATHER INFO" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae?"/>
            <span></span>
        </div>
        <div className="flex justify-between">
            <span></span>
            <ProcessCard id="2" title="Develop Plan" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae?"/>
        </div>
        <div className="flex justify-between">
            <ProcessCard id="3" title="Design" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae?"/>
            <span></span>
        </div>
        <div className="flex justify-between">
            <span></span>
            <ProcessCard id="4" title="Build" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae?"/>
        </div>
        <div className="flex justify-between">
            <ProcessCard id="5" title="Test & deploy" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in recusandae?"/>
            <span></span>
        </div>
    </div>
    </>
  )
}

export default ProcessWay
