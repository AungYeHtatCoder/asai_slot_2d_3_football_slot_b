import React from "react";

import { Form } from "react-router-dom";

const ChangePassword = ()=>{
    return <>
    <div className="text-center">
        <p className="fw-bold text-center">လျှို့ဝှက်နံပါတ်ပြောင်းမည်</p>
        <Form className="mx-3">
            <input type="password" className="form-control" placeholder="လျှို့ဝှက်နံပါတ်အဟောင်း"/>

            <div className="mt-5">
                <small >ကျေးဇူးပြု၍လျှို့ဝှက်နံပါတ်အသစ်ကိုနှစ်ကြိမ်ရိုက်ထည့်ပါ။</small>
                <small className="text-danger">မှတ်ချက် - လျှို့ဝှက်နံပါတ် နှစ်ခုတူညီရပါမည်</small>
            </div>

            
            <input type="password" className="form-control my-4" placeholder="လျှို့ဝှက်နံပါတ်အသစ်"/>
            <input type="password" className="form-control" placeholder="အတည်လျှို့ဝှက်နံပါတ်"/>
            <small className="text-danger d-flex justify-content-end">လျှို့ဝှက်နံပါတ်မေ့နေပါသလား?</small>

            <button className="btn btn-outline-success p-3 w-75 my-5">ပြောင်းမည်</button>

            <p>လျှို့ဝှက်နံပါတ်</p>
            <p>1. အကောင့်ဝင်ရန် အသုံးပြုရမည်</p>
            <p>2. ငွေထုတ်ယူရန် အသုံးပြုရမည်</p>
            <p>အကောင့်လုံခြုံမှုရှိစေရန် သင်၏ လျှို့ဝှက်နံပါတ် ကို မည်သူ့ကိုမျှမပြောပါနှင့်။</p>
        </Form>
    </div>
    </>
}

export default ChangePassword