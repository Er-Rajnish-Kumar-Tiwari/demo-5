import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Testmonials from './Components/Testmonials'
import Services from './Components/Services'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/testimonials' element={<Testmonials/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App