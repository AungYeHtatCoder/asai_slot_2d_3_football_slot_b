import React from 'react'
import '../assets/css/promotion.css';
import p1 from '../assets/img/p1.gif'
import p2 from '../assets/img/p2.gif'
import NewsFeed from '../components/Layout/NewsFeed';
import HomeTabs from '../components/Layout/HomeTabs';

const PromotionPage = () => {
  const promotionData=[
    {id:1,title:'ပရိုမိုးရှင်း: 🏮 ငါးပစ်ဘောစိတို့အတွက် 🏮',img:p1},
    {id:2,title:'ပရိုမိုးရှင်း: 🏮 GiveAway 🏮',img:p2}
  ]
  return (
    <div className='py-5 px-3 px-sm-5'>
      <div className="mx-auto shadow-lg  py-4 px-5 text-center fs-4 fw-bolder   promotionHeader">
         ပရိုမိုးရှင်း
      </div>
      <div className="row my-5 gap-5 gap-sm-0">
        {promotionData.map((item)=>{
          return <div className="col-sm-6">
              <p>{item.title}</p>
              <img className='promotionImg' src={item.img} />
          </div>
        })}
      </div>
      <NewsFeed/>
    </div>
  )
}

export default PromotionPage