import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutComponent from '../Components/AboutComponent'
import Services from '../Components/Services'
import OurValues from '../Components/OurValues'
import OurClients from '../Components/OurClients'
import Testmonials from '../Components/Testmonials'
import OurBlogs from '../Components/OurBlogs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutComponent/>
        <Services/>
        <OurValues/>
        <OurClients/>
        <OurBlogs/>
        

    </div>
  )
}

export default Home
