import React from 'react';
import '../assets/css/transferlog.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import kpay from '../assets/img/bank/kpay-bank.svg';

export default function TransferLog() {
  return (
    <div >
      <div className='mt-4 mx-auto shadow-lg py-3 px-5 text-center fs-4 fw-bolder transferHeader'>
        <i class='fa-solid fa-file-lines'></i> မှတ်တမ်း
      </div>
      <div className='transferBox mx-auto my-3'>
        <Tabs
          defaultActiveKey='in'
          transition={false}
          id='noanim-tab-example'
          className='mb-3 text-decoration-none'
        >
          <Tab eventKey='in' title='အပ်ငွေစာရင်း' className='text-white'>
            <Tab.Content className='mx-3 my-2 pb-2'>
              <Card className='inContent'>
                <Card.Header>
                  <p className='mx-3 my-2'>
                    <i class='fa-solid fa-file-lines'></i> အပ်ငွေမှတ်တမ်း
                  </p>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </Tab.Content>
          </Tab>
          <Tab eventKey='out' title='ငွေထုတ်စာရင်း'>
            <Tab.Content className='outContent mx-3 my-2 pb-2'>
              <div className='d-flex justify-content-between mx-3 my-2'>
                <p className='fw-bold pt-3'>K pay Bank</p>
                <img src={kpay} className='bankImg pt-3' alt='' />
              </div>
              <div className='mx-3 pb-3'>
                <p>
                  အကောင့်နံပါတ် <br />
                  <span className='text-danger fw-bold fs-5'>
                    xxxxxxx1924
                  </span>{' '}
                  <br />
                  <span className='fs-5'>testinguser myanmar</span>
                </p>
              </div>
              <div className='row mx-3 mb-4 text-center'>
                <div className='col bg-dark text-white'>
                  <p>ရက်စွဲ</p>
                </div>
                <div className='col bg-dark text-white'>
                  <p>ပမာဏ</p>
                </div>
              </div>
            </Tab.Content>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
