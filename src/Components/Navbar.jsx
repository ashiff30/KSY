import React from 'react'
import logo from '../assets/KSY-logo.png'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg text-bg-light bg-transparent" >
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="LOGO" width={150} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Plans">Plans</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar