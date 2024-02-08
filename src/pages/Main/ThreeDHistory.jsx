import React from 'react'

const ThreeDHistoryPage = () => {
    const threeDListsArray=[
        {id:1,date:'16.11.2023',threeD:'970'},
        {id:2,date:'1.11.2023 ',threeD:'970'},
        {id:3,date:'16.10.2023 ',threeD:'970'},
        {id:4,date:'1.10.2023 ',threeD:'970'},
        {id:5,date:'16.9.2023 ',threeD:'970'},
        {id:6,date:'1.09.2023 ',threeD:'970'},
        {id:7,date:'16.08.2023 ',threeD:'970'},
        {id:8,date:'16.08.2023 ',threeD:'970'},
    ]
  return (
    <div>
        <h5 className="fw-bold text-center">3D ထီပေါက်စဥ်</h5>
       {/* 3D lists */}
       <div className='mt-4' >
      {threeDListsArray.map((item)=>{
        return <div className="rounded-4 p-2 p-sm-3 mb-3 twoDList ">
          <h5>{item.time}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className='fw-bold'>Date</h6>
              <h6>{item.date}</h6>
            </div>
            <div>
              <h6 className='fw-bold'>3D</h6>
              <h6>{item.threeD}</h6>
            </div>
            
          </div>
        </div>
      })}
    </div>
    </div>
  )
}

export default ThreeDHistoryPage
