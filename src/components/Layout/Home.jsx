import React from "react";
import '../../assets/css/home.css';
import playbutton from '../../assets/img/buttonbg.png';
import deposit from '../../assets/img/deposit-1.png';
import withdraw from '../../assets/img/withdraw-1.png';
import present from '../../assets/img/promotion.png';
// import arrow from '../../assets/img/arrow.svg';
import todolist from '../../assets/img/to-do-list.svg';
import { Link } from "react-router-dom";

function Home(){
    const menus = [
        {id:1,img:deposit,title:'ငွေသွင်း',link:'/slots/topup'},
        {id:2,img:withdraw,title:'ငွေထုတ်',link:'/slots/withdraw'},
        {id:3,img:todolist,title:'မှတ်တမ်း',link:'/slots/transferlog'},
        {id:4,img:present,title:'ပရိုမိုးရှင်း',link:'/slots/Promotion'}
        // {id:5,img:arrow,link:'/Logout'}

    ]

    return(
        <>
            <div className="px-2 px-md-0 mt-5 d-flex justify-content-center align-items-center " >

                <div className=" home-div mt-5" >
                    <div className="d-flex justify-content-around align-items-center  px-2 px-md-5 py-2 first-div" >
                        <div style={{lineHeight:'50px'}}>
                            <small>ကြိုဆိုပါတယ်။! tawer01172 </small>
                            <div>ပိုက်ဆံအိတ်</div>
                            <div className="fw-bold">0.00</div>
                        </div>

                        <div>
                            <img src={playbutton} style={{width:'70px'}} alt="" />
                            {/* <i class="fa-solid fa-play"></i> */}
                        </div>
                    </div>

                    <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center align-items-center mt-5">
                        {
                            menus.map((menu)=>{
                                return <>
                                    <Link to={menu.link} key={menu.id} className="menus">
                                        <div className="d-flex justify-content-center align-items-center"><img src={menu.img} alt="" className="menu-img"/></div>
                                        <div className="text-center mt-2 text-white menu-titles">{menu.title}</div>
                                    </Link>
                                </>
                            })
                        }
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home