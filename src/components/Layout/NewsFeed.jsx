import React from 'react'
import logo from '../../assets/img/logo.png'
import gameLayout from '../../assets/img/gameLayout.png'
import bank from '../../assets/img/bank.png'
import lg1 from '../../assets/img/lg1.png'
import lg2 from '../../assets/img/lg2.png'
import lg3 from '../../assets/img/lg3.png'
import lg4 from '../../assets/img/lg4.png'
import lg5 from '../../assets/img/lg5.png'
import lg6 from '../../assets/img/lg6.png'
import lg7 from '../../assets/img/lg7.png'

import '../../assets/css/newsfeed.css'
import HorizontalLine from './HorizontalLine'
const NewsFeed = () => {
    const nfGames=[lg1,lg2,lg3,lg4,lg5,lg6,lg7];
    const tags=['WIN22MM','စလော့','အွန်လိုင်းဘောလုံး','ကာစီနို','ငါးသေနတ်ပစ်ဂိမ်း','စလော့','Sport betting','Casino online','ထီ']
  return (
    <div className='px-2 px-md-5 py-5'>
        {/* Section1 Start */}
        <div className='section1 '>
            <img src={logo} className='mx-auto logo d-flex align-items-center justify-content-center  ' /> 
            <h5 className='fw-bolder mb-4'>WIN22MM အပြည့်အဝအွန်လိုင်းကာစီနိုဝန်ဆောင်မှုများကိုပေးဆောင်သောဝဘ်ဆိုဒ်။ အွန်လိုင်းစလော့များ၊ တိုက်ရိုက်ကာစီနို၊ တိုက်ရိုက်ဘေကာရက်၊ ငါးလောင်းကစားဂိမ်းများ၊ အားကစားဂိမ်းများ စသည်တို့ ပါဝင်သည်။</h5>
            <p>ကစားသမားများသည် အနည်းဆုံး 3000 ကျပ်သာ လောင်းကြေးဖြင့် ကျွန်ုပ်တို့၏ဂိမ်းများကို ခံစားနိုင်ပြီး အဆင်ပြေသည့် အလိုအလျောက်စနစ်ဖြင့် တစ်ရက်လျှင် 24 နာရီ ငွေသွင်းခြင်းနှင့် ငွေထုတ်ခြင်းများ ပြုလုပ်နိုင်ပါသည်။ အလွန်မြန်သည်၊ 2023 ခုနှစ်တွင် နံပါတ် 1 အွန်လိုင်းလောင်းကစားဂိမ်းပုံစံဖြင့် လောင်းကစားလိုသူများအတွက် သင့်လျော်ပါသည်။</p>
            <h5 className='fw-bolder mb-4'>WIN22MM အထင်ကြီးစရာ ဝန်ဆောင်မှု ဒါဟာဘယ်သူမှဒုတိယမဟုတ်ပါဘူး။ အဖြေတိုင်းကို အာရုံစိုက်ပါ၊ တစ်နေ့ ၂၄ နာရီ၊ တစ်ပတ်လျှင် ၇ ရက်၊ ရပ်တန့်မနေပါ။</h5>
            <p>ဘာလို့လဲဆိုတော့ ကစားသမားတိုင်းက ကျွန်တော်တို့ရဲ့ အရေးကြီးတဲ့လူပါ။ ထို့အပြင် ကျွန်ုပ်တို့တွင် ကူညီရန်၊ မေးခွန်းများအားလုံးကို ဖြေဆိုရန်နှင့် တစ်နေ့လျှင် 24 နာရီမေးခွန်းများရှိသည့် ကိစ္စအားလုံးအတွက် ဝန်ဆောင်မှုပေးရန် အဆင်သင့်ရှိသော ဖောက်သည်ဝန်ဆောင်မှုအဖွဲ့လည်းရှိသည်။ ဒါမှ ကျွန်တော်တို့ရဲ့ အရေးကြီးတဲ့ လူတွေ ကြုံတွေ့ရတဲ့ ပြဿနာတွေကို အစကနေ အဆုံးထိ စိတ်ပူစရာမလိုပါဘူး။ဒါ့အပြင်၊ နှင့် ဂိမ်းအမျိုးမျိုးကို ဝန်ဆောင်မှုပေးရန်အတွက် ထိပ်တန်းပါတနာ slot များ ပျော်စရာ SA Gaming၊ WIN22MM Gaming၊ WM Casino၊ Dream Gaming၊ Pretty Gaming၊ ALLBET၊ Joker၊ PG Slot နှင့် အခြားကစားသမားများ ကျိန်းသေ စွဲစွဲမြဲမြဲ စွဲလမ်းစေမည့် အခြားဂိမ်းများစွာကို သင်နှစ်သက်ရန်။</p>
        </div>
        <HorizontalLine/>
         {/* Section1 End */}
        {/* Section2 Start */}
        <div className="section2  ">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img className='gameLayout' src={gameLayout} />
                </div>
                <div className=" content col-md-6 d-flex  flex-column align-items-center ">
                    <img className='gameLogo' src={logo} />
                    <h5 className='mb-4'>ပျော်ရွှင်ပြီး နေရာမရွေး၊ အချိန်မရွေး အနိုင်ယူလိုက်ပါ။</h5>
                    <p>
                    အရောင်းကိုယ်စားလှယ် “DEALER”၊ လှပပြီး ဆွဲဆောင်မှုရှိသော မိန်းကလေးများဖြင့် လောင်းကစားဂိမ်းတိုင်းကို အနိုင်ရရန် အခွင့်အရေးရရန် သင့်အား လောင်းကစားဂိမ်းတိုင်းကို လွယ်ကူစွာ အနိုင်ယူနိုင်သော အခွင့်အရေးရရန် အရောင်းကိုယ်စားလှယ် “DEALER” ဖြင့် တစ်ရက်လျှင် 24 နာရီ အဆုံးမရှိ ပျော်ရွှင်မှုကို ပံ့ပိုးပေးပါသည်။ လာပါ ရေကူးဝတ်စုံဝတ်ပါ၊ အရောင်တစ်ခုစီသည် နေ့တိုင်းတောက်ပနေသည်၊ လာ၍ ဖဲရိုက်ပါ။ လောင်းကစားတွင် အတွေ့အကြုံသစ်ကို သင်ရရှိပါမည်။
                    </p>
                </div>
            </div>
            <HorizontalLine/>
        </div>
        {/* Section2 End */}
        {/* Section3 Start */}
        <div className="py-5 section3 text-center">
            <img src={bank} className='bank'  />
            <p className='my-4 fs-5'>နံပါတ်တစ် website ပါ။ WIN22MM လှပတဲ့ မိန်းကလေးတွေ အများကြီးကို မင်း အံ့အားသင့်စေမယ့် အရာပါ။ Baccarat အွန်လိုင်းမှာ Sexy Baccarat၊ Sexy Gaming ဟုလည်းလူသိများသော ယခု အဆွဲဆောင်နိုင်ဆုံး၊ MGM 5G Sexy သို့မဟုတ် Sexy Games MGM 5G</p>
            <HorizontalLine/>
        </div>
        {/* Section3 End */}
        {/* Section4 Start */}
        <div className="section4 mb-5">
            <div className="row ">
                <div className="col-md-6">
                    <h6 className='mb-2'>WIN22MM နံပါတ်တစ် ကာစီနိုဝဘ်ဆိုဒ်၊ အရာပါ။ Baccarat အားကစား ဝန်ဆောင်မှု 24 နာရီ အဆင်သင့်ဖြစ်နေပါပြီ။</h6>
                    <p>WIN22MM ကာစီနိုဂိမ်းများအတွက် အကောင်းဆုံးအရင်းအမြစ်။ တိုက်ရိုက်၊ တည်ငြိမ်ပြီး ဘေးကင်းသော ဝဘ်ဆိုဒ်။</p>
                </div>
                <div className="col-md-6">
                    <h5>ဂိမ်းစခန်း</h5>
                    <div className='d-flex flex-wrap gap-2 '>
                        {nfGames.map((game)=>{
                            return <img style={{width:'50px',height:'50px'}} src={game} />
                        })}
                    </div>
                </div>
            </div>
            <h4 className='my-4'>TAG</h4>
            <div className="mb-5 d-flex gap-2 flex-wrap">
                {tags.map((tag)=>{
                    return <div className='tag'>{tag}</div>
                })}
            </div>
        </div>
        {/* Section4 End */}
        <div className="gameFooter">
            <h5 className='text-center mt-5 mb-2'>Terms and Conditions</h5>
            <h5 className='text-center mb-5 '>Copyright © 2024 WIN22MM Casino All Rights Reserved.</h5>
        </div>

    </div>
  )
}

export default NewsFeed