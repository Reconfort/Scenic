import React from 'react'
import Footer from '../Section/Footer'
import Process from '../Section/Process'
import Reason from '../Section/Reason'
import Testimony from '../Section/Testimony'
import Welcome from '../Section/Welcome'

const Home = () => {
  return (
    <div>
        <Welcome/>
        <Reason/>
        <Process/>
        <Testimony/>
        <Footer/>
    </div>
  )
}

export default Home