import React from 'react'
import pack1 from '../assets/Pack1.png'
import pack2 from '../assets/Pack2.png'
import pack3 from '../assets/Pack3.png'


const SubContent2 = () => {
  return (
    <>
    <div className="text-center border border-warning-subtle bg-warning py-2">
        <h3>Detailed Subscription</h3>
    </div>
    <div className="container">
    <div className="div d-flex justify-content-center mt-3">
        <img src={pack1} alt="" style={{width: "15rem"}} />
    </div>
    <div className="text-center mt-2">
    <h4>Complete Exterior+Interior
    cleaning+wax polishing @999/-</h4> <br />
    <h4>monthly subcription just @2999/-</h4>
    </div>

    <div className="div d-flex justify-content-center">
        <img src={pack2} alt="" style={{width: "15rem"}} />
    </div>
    <div className="text-center mt-2">
    <h4>Complete Exterior+wax polishing @499/-</h4> <br />
    <h4>monthly subcription just @1499/-</h4>
    </div>

    <div className="div d-flex justify-content-center">
        <img src={pack3} alt="" style={{width: "15rem"}} />
    </div>
    <div className="text-center mt-2">
    <h4>Complete Exterior and Interior
    cleaning @3999/-</h4> 
    </div>
    </div>
    <div className="div border border-black py-2" style={{fontWeight:"bolder"}}>
    <div className="text-center">
        Schedules <br />
        1 Wash/week x 4 weeks <br />
        (only for subscribers)
    </div>
    
    </div>
    
    </>
  )
}

export default SubContent2