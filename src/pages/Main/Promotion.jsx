import React from "react";
import { Link } from "react-router-dom";

import promo1 from '../../assets/img/Main/promotion/promo_1.png'
import promo2 from '../../assets/img/Main/promotion/promo_2.png';
import promo3 from '../../assets/img/Main/promotion/promo_3.png';


const Promotion = ()=>{
    const promos = [
        {
            id:1,img:promo1,title:'❗💦 သင်္ကြန်နှစ်ကူး အထူးပရိုမိုးရှင်💦❗ 🔔💦သင်္ကြန်ကာလထဲမှာ Thai Sin ချစ်သူတို့ကိုပေးမယ့် ပရိုမိုးရှင်းလေးကတော့...'
        },
        {
            id:2,img:promo2,title:'🎉ပျော်ရွှင်ကံစမ်း ခရစ်စမတ်ပလန် ရှယ်လန်း🌲 🧑‍🤝‍🧑လူကြီးမင်းတို့နဲ့ အမြဲလက်တွဲနေတဲ့ 🐘Thai2D3D ရဲ့ 2D3D မိတ်ဟောင်းမိတ်သစ်လေးတွေအတွက် ပေးမယ် Christmas Promotion တွေကတော့....😉'
        },
        {
            id:3,img:promo3,title:'❗💦 သင်္ကြန်နှစ်ကူး အထူးပရိုမိုးရှင်💦❗ 🔔💦သင်္ကြန်ကာလထဲမှာ Thai Sin ချစ်သူတို့ကိုပေးမယ့် ပရိုမိုးရှင်းလေးကတော့...'
        },
        {
            id:4,img:promo1,title:'🎉ပျော်ရွှင်ကံစမ်း ခရစ်စမတ်ပလန် ရှယ်လန်း🌲 🧑‍🤝‍🧑လူကြီးမင်းတို့နဲ့ အမြဲလက်တွဲနေတဲ့ 🐘Thai2D3D ရဲ့ 2D3D မိတ်ဟောင်းမိတ်သစ်လေးတွေအတွက် ပေးမယ် Christmas Promotion တွေကတော့....😉'
        },
        {
            id:5,img:promo2,title:'🎉ပျော်ရွှင်ကံစမ်း ခရစ်စမတ်ပလန် ရှယ်လန်း🌲 🧑‍🤝‍🧑လူကြီးမင်းတို့နဲ့ အမြဲလက်တွဲနေတဲ့ 🐘Thai2D3D ရဲ့ 2D3D မိတ်ဟောင်းမိတ်သစ်လေးတွေအတွက် ပေးမယ် Christmas Promotion တွေကတော့....😉'
        }
    ]
    return <>
    <div>
        {
            promos.map((promo)=>{
                return <>
                <Link to='/promotiondetail' className="d-flex justify-content-between align-items-center my-2 p-2 text-decoration-none rounded" style={{backgroundColor:'rgba(102, 0, 149, 1)'}}>
                    <img src={promo.img} alt="" style={{borderRadius:'50%',width:'50px',height:'50px'}}/>
                    <div className="text-white mx-4">{promo.title}</div>
                    <i class="fa-solid fa-chevron-right"></i>
                </Link>
                </>
            })
        }
    </div>
    </>
}

export default Promotion;