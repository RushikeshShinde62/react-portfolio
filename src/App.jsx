import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Footer />
    </>
  )
}

export default App
