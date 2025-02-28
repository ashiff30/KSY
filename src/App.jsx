import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
// import "aos/dist/aos.css"; // Import AOS style

import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent';
import SubContent2 from './Components/SubContent2';
import Individual from './Components/Individual';
import Footer from './Components/Footer';
import Particles from './Components/Background';

const App = () => {
  return (
    <>

  <div style={{ width: '100%'}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={1000}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={200}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>

  <div className="content-wrapper">
        <Navbar />
        <MainContent />
        <SubContent2 />
        <Individual />
        <Footer />
      </div>

    </>
  )
}

export default App