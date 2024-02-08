import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const StartProfile = ({amount1,amount2,timeLeftToClose}) => {
  return (
    <div className='p-3 startProfile d-flex align-items-center justify-content-between ' >
      <div className='d-flex gap-2 align-items-center'>
      <FaWallet/>
      <div>
        <span>လက်ကျန်ငွေ: {amount1} ကျပ်</span> <br/>
        <span>လက်ကျန်ငွေ: {amount2} ( ကျပ်) </span>
      </div>
      </div>
      <div >
        <span><FaClock className='me-2' />ပိတ်ရန်ကျန်ချိန်</span><br/>
        <span>{timeLeftToClose}</span>
      </div>
    </div>
  )
}

export default StartProfile
