import React from 'react'
import '../../assets/css/Main/twoD.css'
import { FaCrown } from "react-icons/fa6";

const ThreeDWinners = () => {
    const topWinners=[
        {id:1,name:'Sa Zaw Min Ko ',bet:'35,000',win:'2,800,000',isMiddle:false,crownColor:'white'},
        {id:2,name:'Thinzar Phyo ',bet:'50,000 ',win:'4,000,000',isMiddle:true,crownColor:'goldenrod'},
        {id:3,name:'ajkarmareo',bet:'30,000',win:' 2,400,000',isMiddle:false,crownColor:'brown'},
    ]
    const winnerLists=[
        {id:1,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
        {id:2,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
        {id:3,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
        {id:4,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
        {id:5,name:'Shoon Thiri May ',img:'https://new-static-ui.vercel.app/assets/img/profile.png',bet:'30,000',win:'2,400,000'},
    ];
  return (
    <div className='px-2 ' >
      <h5 className="text-center fw-bold mb-5">3D ကံထူးရှင်များ စာရင်း</h5>
      {/* Top Winners */}
      <div className="row mb-4">
        {topWinners.map((winner)=>{
            return <div style={{background:'purple',marginTop:winner.isMiddle?'-20px':''}} className="topWinnerCard rounded-4 col-4">
                <FaCrown color={winner.crownColor} />
                <h6>{winner.name}</h6>
                <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2">
                    <small>ထိုးငွေ</small>
                    <small className='fw-bold'>{winner.bet}</small>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-2">
                    <small>အနိုင်ရငွေ</small>
                    <small className='fw-bold'>{winner.win}</small>
                </div>
            </div>
        })}
        
        
      </div>
      <div className="twoDWinnerInfo p-3 d-flex align-items-center justify-content-between">
        <div>
          <h6>Updated at:</h6>  
          <h6>Nov 17, 2023, 04:30 PM</h6>
        </div>
        <h3 className="fw-bold">87</h3>
      </div>
      <div className="my-4">
        {winnerLists.map((winner)=>{
            return <div style={{background:'purple'}} className='mb-3 p-2 rounded-4 d-flex flex-nowrap align-items-center justify-content-between gap-1 gap-sm-2'>
                <h6>{winner.id}</h6>
                <img style={{width:'40px',height:'40px',borderRadius:'100%'}} src={winner.img} />
                <h6>{winner.name}</h6>
                <div>
                    <h6>ထိုးငွေ</h6>
                    <h6>{winner.bet}</h6>
                </div>
                <div>
                    <h6>ထီပေါက်ငွေ</h6>
                    <h6>{winner.win}</h6>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default ThreeDWinners
