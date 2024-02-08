import React from 'react'
import '../../assets/css/Main/twoD.css'

const TwoDHoliday = () => {
    const holiday=[
        {month:'December',data:[
            {id:1,date:'05-12-2023',text:"H.M. King Bhumibol Adulyadej The Great's Birthday/ National Day / Father's Day"},
            {id:2,date:'11-12-2023',text:"Substitution for Constitution Day (Sunday 10 December 2023)"}
        ]}
    ]
  return (
    <div className='px-2 px-sm-0'>
      <h5 className="text-center fw-bold">2D ပိတ်ရက်</h5>
      <div className="my-4">
        {holiday.map((item)=>{
           return <div  >
            <h6 className="fw-bold">{item.month}</h6>
            {item.data.map((data)=>{
                return <div style={{background:'purple'}} className='mb-3 p-3 rounded-4 '>
                    <h6 className="text-center fw-bold">{data.date}</h6>
                    <p>{data.text}</p>
                </div>
            })}
            </div>
        })}
      </div>
    </div>
  )
}

export default TwoDHoliday
