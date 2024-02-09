import React from 'react'
import { FaCalendarAlt, FaClipboardList, FaStar } from 'react-icons/fa';
import StartProfile from '../../components/Main/StartProfile';
import DSubNav from '../../components/Main/DSubNav';
import '../../assets/css/Main/twoD.css'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ThreeDPage = () => {
    const threeDSubNav=[
        {id:1,icon:<FaClipboardList/>,title:'မှတ်တမ်း',link:'/lotto/3d/bet-history'},
        {id:2,icon:<FaStar/>,title:'ကံထူးရှင်များ',link:'/lotto/3d/winners'},
        {id:3,icon:<FaCalendarAlt/>,title:' ထွက်ဂဏန်းများ',link:'/lotto/3d/history'}
    ];
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
    <div className='px-2 px-sm-0'>
      <StartProfile amount1={0} amount2={0.00} timeLeftToClose={'10:20:00 AM'} />
      <DSubNav subNavArray={threeDSubNav} />
      <div className="text-center my-4">
      <NavLink to={'/lotto/3d/bet'} > 
        <Button className="twoDBetBtn rounded-2 py-2 px-4 text-white" variant="primary" >
            ထိုးမည်
        </Button>
      </NavLink>
      </div>
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

export default ThreeDPage
