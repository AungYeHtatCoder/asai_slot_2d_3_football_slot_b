import React from 'react';
import '../assets/css/withdraw.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import kpay from '../assets/img/bank/kpay-bank.svg';

const Withdraw = () => {
  return (
    <div className='container'>
      <div className='withDrawCircle py-4 px-2 text-center mx-auto my-3'>
        <span className='fs-4'>0.00</span>
        <i class='fa-solid fa-arrows-rotate'></i> <br />
        <span>
          ထုတ်ယူနိုင်သော <br /> အကြွေ
        </span>
      </div>
      <div className='alignBox '>
        <div style={{ width: '20rem',overflowX:'scroll' }}>
          <div className='py-2 px-3 text-center withDrawBox'>
            <p className='fw-bold fs-5 mt-2'>ငွေထုတ်မှုအခြေအနေများ</p>
          </div>
          <div className='withDrawText px-2 py-3'>
            <div className='row'>
              <div className='col'>
                <p>ယနေ့ ထုတ်ယူနိုင်သော အကြိမ်အရေအတွက်</p>
              </div>
              <div className='col'>
                <p className=''>
                  အကန့်အသတ်မရှိ အရေအတွက်{' '}
                  <span className='text-danger fw-bold'>
                    ( ယနေ့ထုတ်ယူနိုင်သော လက်ကျန်အရေအတွက် 0 အချိန်)
                  </span>
                </p>
              </div>
            </div>

            <hr />
            <div className='row'>
              <div className='col'>
                <p>ယနေ့ ထုတ်ယူနိုင်သောပမာဏ</p>
              </div>
              <div className='col'>
                <p className='text-start'>
                  အကန့်အသတ်မရှိ အရေအတွက်{' '}
                  <span className='text-danger fw-bold'>
                    ( ယနေ့ထုတ်ယူလို့ရတဲ့ ပမာဏကျန်သေးတယ်။ 0)
                  </span>
                </p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col'>
                <p>အများဆုံး</p>
              </div>
              <div className='col'>
                <p className='text-start'>အကန့်အသတ်မရှိ အရေအတွက် </p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col'>
                <p>အနည်းဆုံးငွေထုတ်</p>
              </div>
              <div className='col'>
                <p className='text-start'>အကန့်အသတ်မရှိ အရေအတွက် </p>
              </div>
            </div>
          </div>
        </div>
        <Card style={{ width: '20rem',overflowX:'scroll' }} className='withDrawMain'>
          <Card.Body>
            <Card.Title>
              ငွေထုတ်ကြောင်း <br /> အကြောင်းကြားစာ
            </Card.Title>
            <div className='withDrawForm px-3 py-3'>
              <div className='pt-3 pb-1 px-4 fw-bold fs-5 mx-auto bgColor'>
                <p>အကောင့်သို့ငွေထုတ်</p>
              </div>
              <div className='withDrawCard my-3 text-dark px-3'>
                <div className='d-flex justify-content-between'>
                  <p className='fw-bold pt-3'>K pay Bank</p>
                  <img
                    src={kpay}
                    className='withDrawImg shadow-lg pt-3'
                    alt=''
                  />
                </div>

                <p>
                  အကောင့်နံပါတ် <br />
                  <span className='text-danger fw-bold fs-5'>xxxxxxx1924</span>
                </p>

                <div>
                  <p className='bg-dark px-3 py-2 text-white text-center d-block'>
                    နာမည် - မျိုးရိုးအမည်
                  </p>
                  <div className='d-block text-center pb-2'>
                    <p>
                      testingusername <br />
                      <p>myanmar</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='withDrawForm'>
              <div className='bgColor mx-3 text-center my-3 pt-1'>
                <p className='fw-bold fs-5'>
                  သင်ထုတ်ယူလိုသည့် ပမာဏကို ထည့်သွင်းပါ။
                </p>
              </div>
              <Form className='mx-3 my-1'>
                <Form.Control type='text' className='textBox' />
                <Button className='withDrawBtn my-2'>တင်သွင်းရန်</Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Withdraw;
