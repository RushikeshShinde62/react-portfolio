import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Code from './Components/Code.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Code />

      <Footer />
    </>
  )
}

export default App
