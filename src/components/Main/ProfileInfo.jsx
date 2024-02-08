import React from 'react'
import '../../assets/css/Main/wallet.css'
import { FaUserCircle } from "react-icons/fa";

const ProfileInfo = () => {
  return (
    <div>
        <div className='profileInfo d-flex align-items-center gap-3 p-sm-3 p-2 ' >
            <FaUserCircle size={45} />
            <div>
                <h5 className='mb-1 pb-0'>Queen</h5>
                <p className='mt-0 pt-0' >+95-968*****44</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileInfo
