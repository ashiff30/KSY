import React from 'react'
import Card from './Card'


const SubContent2 = () => {
    const cardData = [
        {
            price: "999/-" ,
            pack: "Standard",
            info: "In this packs the services provided are listed below",
            features: ["Exterior x 12"," Exterior Wax polishing x 1"],
            month: "Monthly subription just @2999/-"
        },
        {
            price: "1999/-" ,
            pack: "standard +",
            info: "In this packs the services provided are listed below",
            features: ["Exterior x 12", "Exterior Wax polishing x 1", "Alloys x 12", "Interior @299/-"],

        },
        {
            price: "1999/-" ,
            pack: "Premium",
            info: "In this packs the services provided are listed below",
            features: ["Exterior x 12", "Alloys x 12", "Interior x 2", "Complete wax polisihing x 1"],
        }
    ]

  return (
    <>
    <div className="container text-center py-2 mt-4 p-4" >
        <div className="row border border-black " style={{borderRadius:"5px", backgroundColor:"yellow"}}>
            <div className="col-12 py-3">
            <h3>Cleaning Subscription Plans</h3>
            </div>
        </div>
    </div>
    <div className="container d-flex justify-content-center  ">
        <div className="row ">
            <div className="d-flex flex-column flex-md-row mt-3 ">
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