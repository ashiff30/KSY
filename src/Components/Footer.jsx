import React from 'react'
import Icons from './Icons'

const Footer = () => {
  return (
    <>
    <div className="social bg-secondary text-center py-4 text-warning">
       <h5>Follow Us on !</h5>
        <div className="col-12 d-flex justify-content-center mb-2">
        <Icons/>
        </div>
        <h5>Mobile: +91 73583 82190</h5>
    </div>
    </>
  )
}

export default Footer