import React from 'react'
import '../../assets/css/Main/layout.css'
import { AiFillHome } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const footerLinks=[
        {id:1,title:'ပင်မ',link:'/lotto/',icon:<AiFillHome/>},
        {id:2,title:'ပိုက်ဆံအိတ်',link:'/lotto/wallet',icon:<FaWallet/>},
        {id:3,title:'ပရိုမိုးရှင်း',link:'/lotto/promotion',icon:<FaGift/>},
        {id:4,title:'ဝန်ဆောင်မှုဖုန်း',link:'/lotto/service-phone',icon:<FaPhoneVolume/>},
        {id:5,title:'ကျွန်ုပ်',link:'/lotto/mePage',icon:<FaUser/>},
    ]
  return (
    <div className='mainFooter p-3 d-flex justify-content-between '>
      {footerLinks.map((item)=>{
        return <NavLink style={{textAlign:'center'}} className=' text-decoration-none text-white' to={item.link}>
            {item.icon}<br/>
            <small>{item.title}</small>
        </NavLink>
      })}
    </div>
  )
}

export default Footer
