import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import FallingText from './complex/FallingText.jsx'
function App() {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
  };
  return (
    <><div data-theme="dark">
      
      <Navbar />
      <Hero />
      <About />
      <div className='h-[400px] w-[750px] border-2 rounded-lg border-gray-300 my-12 flex items-center justify-center ms-4'>
    <FallingText
      key={resetKey}   // 👈 forces remount
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
    {/* Reset Button */}
      <div className="bg-base">
        <button
          onClick={handleReset}
          className="btn btn-outline btn-primary py-4 me-2 btn-sm"
        >
          Reset
        </button>
      </div>     
      </div>
    <Footer />
    </div>
    </>
  )
}

export default App
