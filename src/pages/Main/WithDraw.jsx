import React, { useState } from 'react'
import '../../assets/css/Main/wallet.css'
import kpay from '../../assets/img/Main/bank/kpay.png'
import apay from '../../assets/img/Main/bank/apay.png'
import cbpay from '../../assets/img/Main/bank/cbpay.png'
import wavepay from '../../assets/img/Main/bank/wavepay.png'
import Form from 'react-bootstrap/Form';

const WithDrawPage = () => {
    const [selectedBank,setSelectedBank]=useState('');
    const [amount,setAmount]=useState(0);
    const banks=[
        {id:1,img:kpay,title:'kpay'},
        {id:2,img:apay,title:'ayapay'},
        {id:3,img:cbpay,title:'cbpay'},
        {id:4,img:wavepay,title:'wavepay'},
    ];
    const amounts=[1000,2000,3000,4000,5000,10000]
  return (
    <div className='px-2 px-sm-0' >
      <h5 className="mb-4 text-center fw-bold ">ငွေထုတ်မည်</h5>
      <p>မိမိ ငွေထုတ်မည့်ဘဏ်တစ်ခုရွေးပါ</p>
      <div style={{cursor:'pointer'}} className='walletBanks mt-4 mb-3 d-flex align-items-center justify-content-between' >
        {banks.map((item)=>{
            return <img onClick={()=>setSelectedBank(item.title)} className={`${selectedBank===item.title ? 'walletBankActive' :'walletBankUnactive'}`} src={item.img} />
        })}
      </div>
      {/* This will show when a bank is selected */}
     {selectedBank && <>
        <div className='my-5'>
        <p>ကျေးဇူးပြု၍ အောက်ပါ အကောင့်သို့ ငွေလွှဲပါ။</p>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" defaultValue={'0912345689'} placeholder='ငွေလွှဲအကောင့်' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder='သင်ဧ။်ဖုန်းနံပတ်ထည့်ပါ။' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="number" placeholder='လုပ်ဆောင်မှုအမှတ်စဥ် (နောက်ဆုံးဂဏန်း ၆ လုံး)' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={amount || ''} type="number" placeholder='ငွေပမာဏဖြည့်ပါ' />
            </Form.Group>
        </Form>
      </div>
      <div className="mt-4 d-flex align-items-center justify-content-center gap-3 gap-sm-5 flex-wrap ">
        {amounts.map((amount)=>{
            return <div onClick={()=>setAmount(amount)} className="amount py-3 px-4">
                {amount}
            </div>
        })}
      </div>
      <div className="mt-3 text-center">
        <button className="continueBtn  py-2 px-4">
        ဆက်လက်လုပ်ဆောင်မည်
        </button>
      </div>
     </>}
    </div>
  )
}

export default WithDrawPage
