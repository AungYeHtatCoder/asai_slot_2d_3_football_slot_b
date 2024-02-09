import React from 'react'
import '../../assets/css/tab.css';
import Carouselslidetwo from './Carouselslidetwo';
// import fishbackground from '../../assets/img/fishbackground';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import home from '../../assets/img/sidemenu/home.png';
import casino from '../../assets/img/sidemenu/casino.png';
import lotto from '../../assets/img/sidemenu/lotto.png';
import slot from '../../assets/img/sidemenu/slot.png';
import sport from '../../assets/img/sidemenu/sport.png';
import viber from '../../assets/img/sidemenu/viber.png';
import telegram from '../../assets/img/sidemenu/telegram.png';

import bbincasino from '../../assets/img/game/bbincasino.png';
import lotto1 from '../../assets/img/game/lotto1.png';
import lotto3 from '../../assets/img/game/lotto3.png';
import sagames from '../../assets/img/game/sagames.png';
import slot1 from '../../assets/img/game/slot1.png';
import slot2 from '../../assets/img/game/slot2.png';
import sport1 from '../../assets/img/game/sport1.png';
import sport2 from '../../assets/img/game/sport2.png';
import { useSearchParams } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
const HomeTabs = () => {
  const [searchParams]=useSearchParams();
    const tabs = [
        {id:1,img:home,title:'home',link:'?tab=1'},
        {id:2,img:casino,title:'casino',link:'?tab=2'},
        {id:3,img:lotto,title:'lotto',link:'/lotto'},
        {id:4,img:slot,title:'slot',link:'?tab=4'},
        {id:5,img:sport,title:'sport',link:'https://golden-horse-67e078.netlify.app/'},
        {id:6,img:viber,title:'viber',link:'/'},
        {id:7,img:telegram,title:'telegram',link:'/'}
    ];
    const casinoContents=[
      {id:1,img:bbincasino,title:'bbincasino'},
    ]
    const lottoContents=[
      {id:1,img:lotto1,title:'lotto1'},
      {id:2,img:lotto3,title:'lotto3'},
    ]
    const slotContents=[
      {id:1,img:slot1,title:'slot1'},
      {id:2,img:slot2,title:'slot2'},
    ]
    const sportContents=[
      {id:1,img:sport1,title:'sport1'},
      {id:2,img:sport2,title:'sport2'},
    ]
   
    
    return (
    <>
        <Tab.Container id="left-tabs-example"  defaultActiveKey={Number(searchParams.get('tab'))|| 1} >
      <Row>
        <Col xs={3} md={2}>
          <Nav variant="pills" className="flex-column  pt-4" style={{minHeight:'100vh'}}>
            <Nav.Item>
                {tabs.map((tab) => {
                    return  <Nav.Link href={tab.link} eventKey={tab.id} className='tabs'>
                    <img src={tab.img} alt="" className='tab-imgs'/>
                    <div className='ms-sm-3 ms-xs-1'>{tab.title}</div>
                    </Nav.Link>

                })}
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={8} md={10} className='mx-auto' >
          <Tab.Content>
          <Carouselslidetwo></Carouselslidetwo>
          <div className='text-center'>
                    <h3 className='text-title'>
                      {searchParams.get('tab')==1 ?  'Home': 
                      searchParams.get('tab')==2 ?  'Casino': 
                      searchParams.get('tab')==3 ?  'Lotto':
                      searchParams.get('tab')==4 ?  'Slot': 
                      searchParams.get('tab')==5 ?  'Sport':
                      'Home'  
                      }
                    </h3>
                  </div>  
                  {/* <Tab.Pane className='container ' eventKey={1}>
                    <div className="row">
                    {homeContents.map((data)=>{
                      return <div className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane> */}
                    <Tab.Pane className='container ' eventKey={2}>
                    <div className="row">
                    {casinoContents.map((data)=>{
                      return <div className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container ' eventKey={4}>
                    <div className="row">
                    {slotContents.map((data)=>{
                      return <div className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container ' eventKey={3}>
                    <div className="row">
                    {lottoContents.map((data)=>{
                      return <div className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container ' eventKey={5}>
                    <div className="row">
                    {sportContents.map((data)=>{
                      return <div className='col-5 col-sm-6 col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    
                 
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default HomeTabs;