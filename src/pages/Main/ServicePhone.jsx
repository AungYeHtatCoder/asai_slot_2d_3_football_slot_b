import React from 'react'
import '../../assets/css/Main/servicePhone.css'
import { FaTelegram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ServicePhone = () => {
    const servicePhones=[
        {id:1,title:'ငွေဖြည့် / ငွေထုတ်',icon1:<FaTelegram color='white'  size={35} />,icon2:<FaViber color='white' size={35} />,link1:'/',link2:'/'},
        {id:2,title:'ငွေဖြည့် / ငွေထုတ်',icon1:<FaTelegram color='white' size={35} />,icon2:<FaViber color='white' size={35} />,link1:'/',link2:'/'},
        {id:3,title:'ငွေဖြည့် / ငွေထုတ်',icon1:<FaTelegram color='white' size={35} />,icon2:<FaViber color='white' size={35} />,link1:'/',link2:'/'},
    ]
  return (
    <div className=' px-2 px-sm-0'>
      <div className="servicePhoneTitle p-3 text-center">
      ကျွန်ုပ်တို့ကို ဆက်သွယ်ရန် အောက်ပါတို့သည် Thai2D3D တရားဝင်ဖုန်းနံပါတ်များ ဖြစ်ပါသည်
      </div>
      <div className="my-4">
        {servicePhones.map((item)=>{
            return <div className='mb-3 p-3 d-flex align-items-center justify-content-between serviceCard '>
                <p>{item.title}</p>
                <NavLink to={item.link1} >{item.icon1}</NavLink>
                <NavLink to={item.link2} >{item.icon2}</NavLink>
            </div>
        })}
      </div>
      <h5 className="text-center">Channel Link</h5>
      <div className="text-center">
      <NavLink to={'/'}>
        <button className="px-4 py-3 text-white serviceJoinBtn my-3">
                <FaTelegram size={35} />
                <span className='ms-2 fs-5' >Join Channel</span>
        </button>
      </NavLink>
      
      </div>
      
    </div>
  )
}

export default ServicePhone
