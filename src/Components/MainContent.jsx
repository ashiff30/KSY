import React from "react";
import logo from "../assets/KSY-logo.png";
import Button from "./Button";


const MainContent = () => {
  return (
    <>
    <div className="container p-4">
      <div className="row">
        <div className="col-12">
        <h2 className="text-center mb-2">
        Your Car <span className="text-warning">Our Passion</span>
      </h2>
      
      <div className="text-center">
      <div className="mt-4 fs-4">
        <p>At <span className="text-warning">KSY</span>, we believe a clean car is more than just a look—it’s a feeling! <br /> </p>
        <p>Our premium cleaning services use top-quality products, eco-friendly techniques, and expert care to keep your car sparkling inside and out.</p>
      </div>
      </div>
      
      <div className="text-center">
        <h4 className="mb-3">A Clean Car is Just a Call or WhatsApp Away!</h4>
        <Button/>
      </div>
        </div>
      </div>
    </div>
      

      {/* <div className="container mt-4">
      <div className="container d-flex flex-column align-items-center">
        <div className="card bg-warning text-center card-1 align-self-md-start mb-5">
          <img src={logo} alt="" />
          <h4>CLEANING AND DETAILING FOR BIKES STARTS JUST @499</h4>
        </div>
        <div className="card bg-warning text-center card-2 align-self-md-center mb-5">
          <img src={logo} alt="" />
          <h4>CLEANING AND DETAILING FOR CARS STARTS JUST @999</h4>
        </div>
        <div className="card bg-warning text-center card-3  align-self-md-end">
          <img src={logo} alt="" />
          <h4>MONTHLY SUBSCRIPTION STARTS @999</h4>
        </div>
      </div>
      </div> */}
      <h2 className="text-center mt-32mb-4">
      CLEANING AND DETAILING SERVICES AT <span className="text-warning">YOUR DOORSTEP!</span>
      </h2>
    </>
  );
};

export default MainContent;
