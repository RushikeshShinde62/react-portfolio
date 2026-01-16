import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import FallingText from './complex/FallingText.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className='h-[200px] border-t-2 border-b-2 border-gray-300 my-20 flex items-center justify-center'>

    <FallingText
      text={`hover to see magic, If the layout shifts when you hover, that is part of the design.
The web should feel responsive, alive, and aware of the user.`}
      highlightWords={["layout", "responsive", "web", "user", "hover","magic"]}
      highlightClass="highlighted"
      trigger="hover"
      backgroundColor="transparent"
      wireframes={false}
      gravity={0.56}
      fontSize="2rem"
      mouseConstraintStiffness={0.9}
    />      
      </div>
    <Footer />
    </>
  )
}

export default App
