import React from 'react'
import '../../assets/css/Main/layout.css'
// import '../../assets/css/footer.css'

import { AiFillHome } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import menu from '../../assets/img/menu.png'
import viber from '../../assets/img/viber.png'
import profile from '../../assets/img/registerFooter.png'

import home from '../../assets/img/footer/home.png'
import deposit from '../../assets/img/footer/deposit.png'
import withDraw from '../../assets/img/footer/withDraw.png'
import promotion2 from '../../assets/img/footer/promotion.svg'
const Footer = () => {
    // const footerLinks=[
    //     {id:1,title:'ပင်မ',link:'/lotto/',icon:<AiFillHome/>},
    //     {id:2,title:'ပိုက်ဆံအိတ်',link:'/lotto/wallet',icon:<FaWallet/>},
    //     {id:3,title:'ပရိုမိုးရှင်း',link:'/lotto/promotion',icon:<FaGift/>},
    //     {id:4,title:'ဝန်ဆောင်မှုဖုန်း',link:'/lotto/service-phone',icon:<FaPhoneVolume/>},
    //     {id:5,title:'ကျွန်ုပ်',link:'/lotto/mePage',icon:<FaUser/>},
    // ]
    const footerLinks=[
      {id:1,img:home,link:'/lotto/',title:"အိမ်"},
      {id:2,img:deposit,link:'/slots/wallet',title:"ပိုက်ဆံအိတ်"},
      {id:3,img:menu,link:'/lotto/',title:"",isMiddle:true},
      {id:4,img:viber,link:'/lotto/service-phone',title:"ဝန်ဆောင်မှုဖုန်း"},
      {id:5,img:profile,link:'/lotto/mePage',title:"ကျွန်ုပ်"},
    ];
  return (
    // <div className='mainFooter p-3 d-flex justify-content-between '>
    //   {footerLinks.map((item)=>{
    //     return <NavLink style={{textAlign:'center'}} className=' text-decoration-none text-white' to={item.link}>
    //         {item.icon}<br/>
    //         <small>{item.title}</small>
    //     </NavLink>
    //   })}
    // </div>
    <footer className='mainFooter px-2 pt-2  rounded-top-5 d-flex justify-content-between align-items-center '>
    {footerLinks.map(item=>{
      return <NavLink key={item.id} className={`${item.isMiddle ? 'middleIcon' :' '} text-decoration-none text-center text-light `} to={item.link}>
        <img  src={item.img} />
        <p>{item.title}</p>
      </NavLink>
    })}
  </footer>
  )
}

export default Footer
