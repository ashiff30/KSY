import React from 'react'

const SubContent = () => {
  return (
    <>
    <div className="text-center border border-warning-subtle bg-warning" id='Plans'>
        <h3>Cleaning Subscription Plans</h3>
    </div>
    {/* <div className="container text-center" style={{height: "100vh"}}>
        <div className="row d-flex align-items-center mt-2 mb-2 border">
            <div className="col-4">
                <p>Standard</p>
            </div>
            <div className="col-4">
                <p>Exterior×12 <br />
                Exterior wax polishing×1</p>
            </div>
            <div className="col-4">
                <p>@999/-</p>
            </div>

            <div className="col-4">
                <p>Standard Plus</p>
            </div>
            <div className="col-4">
                <p>Exterior×12 <br />  Alloys×12 <br />
                Exterior wax polishing×1</p>
            </div>
            <div className="col-4">
                <p>@1199/-</p>
            </div>

            <div className="col-4">
                <p>Premium</p>
            </div>
            <div className="col-4">
                <p>Exterior×12 <br /> Interior×2 <br />
                Exterior wax polishing×1</p>
            </div>
            <div className="col-4">
                <p>@1999/-</p>
            </div>
        </div>
    </div> */}
    <table className="table align-middle table-bordered border-dark mt-4">
  <thead>
    <tr className='text-center'>
      <th scope="col">Plan</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody className='table-group-divider' style={{fontWeight:"bolder" }}>
    <tr>
      <th scope="row">Standard</th>
      <td >Exterior×12 <br /><br /> Exterior wax polishing×1</td>
      <td>999/-</td>
    </tr>
    <tr>
      <th scope="row">Standard Plus</th>
      <td> Exterior×12 <br /><br /> Alloys×12 <br /><br /> Exterior wax polishing×1</td>
      <td>1199/-</td>
    </tr>
    <tr>
      <th scope="row">Premimum</th>
      <td> Exterior×12 <br /><br /> Alloys×12 <br /><br /> Interior×2 <br /><br /> Complete wax polishing×1</td>
      <td>1999/-</td>
    </tr>

    <tr>
        <th  colSpan={"3"} className='text-center'>
            Schedules <br />
            3 cleaning/week x 4 weeks
            Monday/Wednesday/Friday
            Tuesday/Thursday/Saturday
        </th>
    </tr>
  </tbody>
</table>


    </>
  )
}

export default SubContent