import React from 'react'
import ProfileInfo from '../../components/Main/ProfileInfo'
import '../../assets/css/Main/wallet.css'
import { FaMoneyBill } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdWallet } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const WalletPage = () => {
    const walletOptions=[
        {id:1,icon:<FaMoneyBill size={26} />,title:'ငွေဖြည့်',link:'/top-up'},
        {id:2,icon:<FaMoneyBillTransfer size={26} />,title:'ငွေထုတ်',link:'/with-draw'},
        {id:3,icon:<MdWallet size={26} />,title:'ဂိမ်းပိုက်ဆံအိတ်',link:''},
        {id:4,icon:<FaClipboardList size={26} />,title:'မှတ်တမ်း',link:''},
    ]
  return (
    <div className='px-2 px-sm-0' >
      <ProfileInfo/>
      <div style={{borderBottom:'1px solid purple'}}  className="my-3 ">
            <p>လက်ကျန်ငွေ: 0ကျပ်</p>
            <p>အမှတ်: 0 ( ကျပ်)</p>
        </div>
        <div className='p-2 p-sm-3  rounded-4 border border-white d-flex align-items-center justify-content-between'>
            {walletOptions.map((item)=>{
                return <NavLink className='text-center text-white text-decoration-none' to={item.link} >
                    {item.icon}<br/>
                    <small style={{fontSize:'13px'}} >{item.title}</small>
                </NavLink>
            })}
        </div>
        <div className='mt-4 text-center p-2 p-sm-3  rounded-4 border border-white'>
            <p>ငွေဖြည့်လိုပါက</p>
            <div className="mt-3 text-start">
                <p>၁။ "ငွေဖြည့်" ကို နှိပ်ပါ။</p>
                <p>၂။ KBZ Pay, Wave Pay, CB Pay, နှင့် AYA Pay တို့မှ မိမိငွေဖြည့်မည့် ဘဏ်ကိုရွေးပါ။</p>
                <p>၃။ သက်ဆိုင်ရာ Pay ဖြင့် ငွေသွင်းနိုင်သော အကောင့်များ ပေါ်လာပါလိမ့်မည်။</p>
            </div>
        </div>
    </div>
  )
}

export default WalletPage
