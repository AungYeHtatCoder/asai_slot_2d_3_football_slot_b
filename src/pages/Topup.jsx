import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../assets/css/topup.css';
import kpay from '../assets/img/bank/kpay-bank.svg';
import kbz from '../assets/img/bank/kbz-bank.svg';
import aya from '../assets/img/bank/aya-bank.svg';
import wave from '../assets/img/bank/wavemoney-bank.svg';

const Topup = () => {
  const bankData = [
    {
      id: 1,
      bname: 'Ayayarwady Bank',
      uname: 'User 1',
      account: '20010002900',
      imgUrl: aya,
    },
    {
      id: 2,
      bname: 'Kanbawza Bank',
      uname: 'User 2',
      account: '1234567890',
      imgUrl: kbz,
    },
    {
      id: 3,
      bname: 'K Pay Bank',
      uname: 'User 3',
      account: '0987654321',
      imgUrl: kpay,
    },
    {
      id: 4,
      bname: 'Wave Money',
      uname: 'User 4',
      account: '112233445566',
      imgUrl: wave,
    },
  ];
  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className='mt-4 mx-auto shadow-lg py-3 px-5 text-center fs-4 fw-bolder topupHeader'>
          <i class='fa-solid fa-building-columns'></i> ငွေသွင်း
        </div>
        <div className='py-3 px-5 text-center topupCard mx-auto mt-3'>
          <p>
            ငွေလွှဲရန်အတွက်သာ လျှောက်ထားသောအကောင့်ကို အသုံးပြုပါ။
            <br />{' '}
            <span className='topupText'>
              စနစ်သည် လက်ကျန်ငွေကို အလိုအလျောက် စစ်ဆေးနေသည်။
            </span>
          </p>
          <div>
            <img src={kpay} alt='' className='bankImg' />
            <span className='ms-3'>K Pay Bank</span>
            <p>
              အကောင့်နံပါတ် : <span>XXXXXXX192</span> <br />
              အကောင့်အမည် : <span>testingUser Myanmar</span>
            </p>
            <p>
              ငွေသွင်းခြင်း သို့မဟုတ် အခြားပြဿနာရှိလျှင်{' '}
              <span className='viber py-3 px-3 ms-2 rounded'>
                <i class='fa-brands fa-viber'></i> Viber - 09123456789
              </span>
            </p>
          </div>
        </div>
        <div className='topupMain'>
          <Card style={{ width: '19rem' }} className='mt-3 m-sm-3 topupBank'>
            <Card.Body>
              <Card.Title>ကျေးဇူးပြု၍ ငွေလွှဲပါ။</Card.Title>
              {bankData.map((bank) => {
                return (
                  <>
                    <div className='bankCard px-3 py-3 my-3 rounded shadow'>
                      <div className='d-flex'>
                        <img
                          src={bank.imgUrl}
                          alt=''
                          style={{ width: '18%', height: '18%' }}
                        />
                        <div className='ms-3'>
                          <span className='d-block'> {bank.bname}</span>
                          <span className='d-block'>
                            ‌အကောင့်အမည်: {bank.uname}
                          </span>
                          <span className='d-block'>
                            အကောင့်နံပါတ်: {bank.account}{' '}
                          </span>
                        </div>
                      </div>
                      <div className='rounded mt-2 px-2 copy'>
                        <i class='fa-regular fa-copy'></i> အကောင့်နံပါတ်ကို
                        ကူးယူပါ။
                      </div>
                    </div>
                  </>
                );
              })}
              <p className='text-success fw-bold'>
                <i class='fa-regular fa-circle-check'></i> ဘဏ်အားလုံးအတွက် အခမဲ့
                ငွေလွှဲခ
              </p>
            </Card.Body>
          </Card>
          <div>
            <Card style={{ width: '19rem' }} className='m-3 topupForm'>
              <Card.Body>
                <Card.Title>ငွေသွင်းဖောင်</Card.Title>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>ဘဏ်ငွေလွှဲခြင်း</Form.Label>
                    <Form.Control type='text' value='KBZ Bank 0912345666' />
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>ပမာဏ</Form.Label>
                    <Form.Control type='text' value='ပမာဏ' />
                  </Form.Group>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Label>ပရိုမိုးရှင်း</Form.Label>
                    <Form.Control type='text' value='ပရိုမိုးရှင်း ရယူပါ။' />
                  </Form.Group>
                  <Form.Label>လွှဲပြောင်းအထောက်အထား</Form.Label>
                  <InputGroup className='mb-3'>
                    <Form.Control value='ဖိုင်ရွေးချယ်ပါ။' />
                    <InputGroup.Text type='file' className='btnWhite'>
                      ရွေးပါ
                    </InputGroup.Text>
                  </InputGroup>
                  <Button className='topupBtn'>တင်သွင်းရန်</Button>{' '}
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
