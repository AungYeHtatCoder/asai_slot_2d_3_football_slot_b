import React from 'react'
import { Button, Form } from 'react-bootstrap';
import '../assets/css/wallet.css'
const SlotWalletPage = () => {
    const gamingPrices=[
        {id:1,name:'WALLET',price:'K11,020'},
        {id:2,name:'ASIAGAMING',price:'21140.00'},
        {id:3,name:'GAMEPLAY',price:'0.00'},
        {id:4,name:'BBIN',price:'0.00'},
        {id:5,name:'JDB',price:'21708.00'},
        {id:6,name:'JOKER',price:'17620.00'},
        {id:7,name:'KING855 ',price:'12100.00 '},
        {id:8,name:'NEW LIVE22 ',price:'0.00'},
        {id:9,name:'PGSOFT',price:'100.00'},
        {id:10,name:'PRAGMATIC',price:'32718.00'},
        {id:11,name:'KING MAKER ',price:'2100.00 '},
        {id:12,name:'SBO',price:'11000.00'}
    ];
    const games=[
        {id:1,name:'ASIAGAMING',value:"AG"},
        {id:2,name:'BBIN',value:"GB"},
        {id:3,name:'GAMEPLAY',value:"G8"},
        {id:4,name:'JOKER',value:"JK"},
        {id:5,name:'JDB',value:"JD"},
        {id:6,name:'NEW LIVE22',value:"L4"},
        {id:7,name:'KING855',value:"K9"},
        {id:8,name:'PGSOFT',value:"PG"},
        {id:9,name:'PRAGMATIC',value:"PR"},
        {id:10,name:'KING MAKER',value:"RE"},
        {id:10,name:'SBO',value:"S3"},
    ];
    const banks=[
        {id:1,name:'CB Bank',value:'1'},
        {id:1,name:'AYA Bank',value:'2'},
        {id:1,name:'KBZ Bank',value:'3'},
        {id:1,name:'KBZ Pay',value:'4'},
        {id:1,name:'Yoma Bank',value:'5'},
    ]
  return (
    <div className="py-5 px-3 px-lg-5 ">
        <h2 style={{textAlign:'center'}} className='mb-5 fw-semibold'>My Wallet</h2>
        <div className=' d-flex flex-wrap flex-lg-nowrap  gap-md-5 '>
            <div style={{height:'max-content'}} className='mb-5 gamingPrices border rounded-3 p-3'>
                {gamingPrices.map((item)=>{
                    return <div className='d-flex align-items-center justify-content-between gap-2 gap-md-5 '>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                })}
            </div>
            <div className='walletForms'>
            <div style={{width:'100%'}} className="mb-4 border p-3 rounded-3">
                <h4>Deposit (ငွေသွင်းရန်)</h4>
                <Form className=" d-flex flex-wrap flex-sm-nowrap  align-items-center justify-content-between">
                <div>
                    <Form.Label>ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ</Form.Label>
                <Form.Select style={{height:'max-content'}} aria-label="ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ">
                    <option>ဂိမ်းအမျိုးအစား ရွေးချယ်ပါ</option>
                   
                    {games.map((game)=>{
                        return <option value={game.value}>{game.name}</option>
                    })}
                </Form.Select>
                </div>
                    <Form.Group className="m-3" >
                        <Form.Label>ငွေပမာဏ ထည့်ပါ</Form.Label>
                        <Form.Control type="text" placeholder="ငွေပမာဏ ထည့်ပါ" />
                        
                    </Form.Group>
                </Form>
                <div style={{textAlign:'end'}}>
                    <Button  variant="danger">ငွေသွင်းမည်</Button>
                </div>

            </div>
            <div style={{width:'100%'}} className="mb-4 border p-3 rounded-3">
                <h4>Withdraw (ငွေထုတ်ရန်)</h4>
                <Form >
               <div className=" d-flex flex-wrap flex-sm-nowrap  align-items-center justify-content-between">
                <div>
                        <Form.Label>ဘဏ် ရွေးချယ်ပါ</Form.Label>
                    <Form.Select style={{height:'max-content'}} aria-label="ဘဏ် ရွေးချယ်ပါ">
                        <option>ဘဏ် ရွေးချယ်ပါ</option>
                        {banks.map((bank)=>{
                            return <option value={bank.value}>{bank.name}</option>
                        })}
                    </Form.Select>
                    </div>
                        <Form.Group className="m-3" >
                            <Form.Label>ငွေပမာဏ ထည့်ပါ</Form.Label>
                            <Form.Control type="text" placeholder="ငွေပမာဏ ထည့်ပါ" />
                        </Form.Group>
                </div>
                <div className=" d-flex flex-wrap flex-sm-nowrap  align-items-center justify-content-between">
                        <Form.Group className="m-3" >
                                    <Form.Label>ဘဏ်အ‌ကောင့်အမည် ထည့်ပါ</Form.Label>
                                    <Form.Control type="text" placeholder="ဘဏ်အ‌ကောင့်အမည် ထည့်ပါ" />
                        </Form.Group>
                        <Form.Group className="m-3" >
                            <Form.Label>ဘဏ်အ‌ကောင့်နံပါတ် ထည့်ပါ</Form.Label>
                            <Form.Control type="text" placeholder="ဘဏ်အ‌ကောင့်နံပါတ် ထည့်ပါ" />
                        </Form.Group>
                </div>
                </Form>
                <div style={{textAlign:'end'}}>
                    <Button  variant="danger">ငွေထုတ်မည်</Button>
                </div>

            </div>
            <div style={{width:'100%'}} className="mb-4 border p-3 rounded-3">
                <h4>Transfer History (ငွေလွဲငွေ‌ထုတ်မှတ်တမ်း)</h4>
                <Form className=" d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between">
                <div>
                    <Form.Label>အမျိုးအစား ရွေးချယ်ပါ</Form.Label>
                <Form.Select style={{height:'max-content'}} aria-label="အမျိုးအစား ရွေးချယ်ပါ">
                    <option>အမျိုးအစား ရွေးချယ်ပါ</option>
                    <option value={'deposit'}>Deposit</option>
                    <option value={'withDraw'}>With Draw</option>
                </Form.Select>
                </div>
                <Form.Group className="m-3" >
                        <Form.Label>မှ</Form.Label>
                        <Form.Control type="date" placeholder="မှ" />
                        
                    </Form.Group>
                    <Form.Group className="m-3" >
                        <Form.Label>ထိ</Form.Label>
                        <Form.Control type="date" placeholder="ထိ" />
                        
                    </Form.Group>
                </Form>
                <div style={{textAlign:'end'}}>
                    <Button  variant="danger">တင်သွင်းမည်</Button>
                </div>

            </div>
       </div>
        </div>
       
    </div>
  )
}

export default SlotWalletPage
