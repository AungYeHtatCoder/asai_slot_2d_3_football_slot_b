import React from "react";
import { Link } from "react-router-dom";

import bank from '../../assets/img/Main/profile/bankacc.png';
import bethistory from '../../assets/img/Main/profile/bethistory.png';
import password from '../../assets/img/Main/profile/cpassword.png';
import logout from '../../assets/img/Main/profile/logout.png';
import result from '../../assets/img/Main/profile/result.png';

const mepage = ()=>{
    const links = [
        {
            id:1,img:'',title:'profile',link:'/lotto/profile'
        },
        {
            id:2,img:bethistory,title:'ထီထိုးမှတ်တမ်း',link:'/lotto/bet-history'
        },
        {
            id:3,img:result,title:'ထွက်ဂဏန်းများ',link:'/lotto/result'
        },
        {
            id:4,img:bank,title:'ဘဏ်အကောင့်များ',link:'/lotto/bank'
        },
        {
            id:5,img:password,title:'လျှို့ဝှက်နံပါတ်ပြောင်းရန်',link:'/lotto/change-password'
        },
        {
            id:6,img:logout,title:'ထွက်ခွာရန်'
        }
    ]
    return <>
    <div>
        {
            links.map((link)=>{
                return <Link to={link.link} className="d-flex justify-content-between align-items-center text-decoration-none text-white p-2 mb-2 rounded" style={{boxShadow: '3px 3px 5px rgba(102, 0, 149, 1)'}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={link.img} style={{width:'25px'}} alt="" />
                        <p className="mt-3 ms-3">{link.title}</p>
                    </div>
                    <i class="fa-solid fa-right-to-bracket"></i>
                </Link>
            })
        }
    </div>
    </>
}

export default mepage