import React from 'react'

const Individual = () => {
  return (
    <>
    <div className="text-center border border-warning-subtle bg-warning mt-4" id='Plans'>
        <h3>Individual Cleaning services Plans</h3>
    </div>
    <table className="table align-middle table-bordered border-dark mt-4">
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
</table>
    </>
  )
}

export default Individual