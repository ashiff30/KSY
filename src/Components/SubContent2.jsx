import React from 'react'
import Card from './Card'


const SubContent2 = () => {
    const cardData = [
        {
            price: "999/-" ,
            pack: "Package 1",
            info: "In this packs the services provided are listed below",
            features: ["Complete Exterior", "Interior Cleaning", "Wax polishing"],
            month: "Monthly subription just @2999/-"
        },
        {
            price: "499/-" ,
            pack: "Package 2",
            info: "In this packs the services provided are listed below",
            features: ["Complete Exterior", "Wax polishing"],
            month: "Monthly subription just @1499/-"

        },
        {
            price: "3999/-" ,
            pack: "Package 3",
            info: "In this packs the services provided are listed below",
            features: ["Complete Exterior and Interior detailing"],
            month: "Monthly subription just @2999/-"
        }
    ]

  return (
    <>
    <div className="text-center border border-warning-subtle bg-warning py-2 mt-4">
        <h3>Detailed Subscription</h3>
    </div>
    <div className="container d-flex justify-content-center  ">
        <div className="row ">
            <div className="d-flex flex-column flex-md-row mb-4 ">
            {cardData.map((data, index)=>
                <Card
                  key = {index}
                  price = {data.price}
                  pack = {data.pack}
                  info = {data.info}
                  features = {data.features}
                  month = {data.month}
                  />
                )}
            
            </div>
        </div>
    </div>
    <div className="container text-center">
        <div className="col-12">
            <strong>Schedules: </strong>
            <strong>1 Wash/Week x 4 weeks</strong><br />
            <strong>(Only for subscribers)</strong>
        </div>
    </div>
   
    
    </>
  )
}

export default SubContent2