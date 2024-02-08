import React from 'react'
import '../../assets/css/Main/twoD.css'

const TwoDLists = ({twoDListsArray}) => {
  return (
    <div className='mt-4' >
      {twoDListsArray.map((item)=>{
        return <div className="rounded-4 p-2 p-sm-3 mb-3 twoDList text-center">
          <h5>{item.time}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6>Set</h6>
              <h6>{item.set}</h6>
            </div>
            <div>
              <h6>Value</h6>
              <h6>{item.value}</h6>
            </div>
            <div>
              <h6>2D</h6>
              <h6>{item.twoD}</h6>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default TwoDLists
