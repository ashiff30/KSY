import React from 'react'

const Individual = () => {
  return (
    <>
     <div className="container text-center py-2 mt-4 p-4" >
        <div className="row border border-black " style={{borderRadius:"5px", backgroundColor:"yellow"}}>
            <div className="col-12 py-3">
            <h3>Cleaning Subscription Plans</h3>
            </div>
        </div>
    </div>
    {/* <table className="table align-middle table-bordered border-dark mt-4">
  <thead>
    <tr className='text-center'>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody className='table-group-divider' style={{fontWeight:"bolder" }}>
    <tr>
      <td >Water washing</td>
      <td>299/-</td>
    </tr>
    <tr>
      <td> Exterior cleaning</td>
      <td>299/-</td>
    </tr>
    <tr>
      <td> Interior Cleaning</td>
      <td>499/-</td>
    </tr>
    <tr>
      <td> Wax ploishing</td>
      <td>599/-</td>
    </tr>
    <tr>
      <td> Engine Bay Cleaning</td>
      <td>699/-</td>
    </tr>
    <tr>
      <td> Machine Polishing</td>
      <td>1499/-</td>
    </tr>
  </tbody>
</table> */}
<div className="container p-3">
  <div className="row d-flex align-content-center">
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:180}}>Water Washing @299</p>
    </div>
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:150}}>Water Washing @299</p>
    </div>
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:150}}>Water Washing @299</p>
    </div>
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:150}}>Water Washing @299</p>
    </div>
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:150}}>Water Washing @299</p>
    </div>
    <div className="col-2">
    <p className='border border-black' style={{maxWidth:150}}>Water Washing @299</p>
    </div>
  </div>
</div>
    </>
  )
}

export default Individual