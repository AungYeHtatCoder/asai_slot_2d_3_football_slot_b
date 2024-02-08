import React from 'react'
import StartProfile from '../../components/Main/StartProfile'
import '../../assets/css/Main/twoD.css'
import DSubNav from '../../components/Main/DSubNav'
import { FaClipboardList } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import TwoDLists from '../../components/Main/TwoDLists';
import TwoDBetButton from '../../components/Main/TwoDBetButton';

const TwoD = () => {
    const twoDSubNav=[
        {id:1,icon:<FaClipboardList/>,title:'မှတ်တမ်း',link:'/2d/bet-history'},
        {id:2,icon:<FaStar/>,title:'ကံထူးရှင်များ',link:'/2d/winners'},
        {id:3,icon:<FaCalendarAlt/>,title:'ပိတ်ရက်',link:'/2d/holiday'}
    ];
    const twoDListsArray=[
        {id:1,time:'11:00:00',set:1376.22,value:13059.18,twoD:29},
        {id:2,time:'12:01:00',set:13059.18,value:19408.60,twoD:78},
        {id:3,time:'15:00:00',set:1368.01,value:36229.23 ,twoD:19},
        {id:4,time:'16:30:00',set:1368.15,value:48277.69,twoD:57},
    ]
  return (
    <div className='px-2 px-sm-0'>
      <StartProfile amount1={0} amount2={0.00} timeLeftToClose={'10:20:00 AM'} />
      <DSubNav subNavArray={twoDSubNav} />
      <div className="twoDResult p-5 text-center">
            <h1>54</h1>
            <div className="d-flex  justify-content-center  align-items-center gap-1 fw-medium mt-3">
                <IoMdCheckmark />
                <div  className=' d-flex align-items-center justify-content-center gap-2 ' >
                  <span>{new Date().toLocaleDateString()}</span>
                  <span>{new Date().toLocaleTimeString()}</span>
                </div>
            </div>
      </div>
      <div className="text-center my-4">
       <TwoDBetButton/>
      </div>
      {/* 2D lists */}
      <TwoDLists twoDListsArray={twoDListsArray} />
    </div>
  )
}

export default TwoD
