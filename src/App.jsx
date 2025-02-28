import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent';
import SubContent from './Components/SubContent';
import SubContent2 from './Components/SubContent2';
import Individual from './Components/Individual';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <MainContent/>
    <SubContent2/>
    <Individual/>
    <Footer/>
    </>
  )
}

export default App