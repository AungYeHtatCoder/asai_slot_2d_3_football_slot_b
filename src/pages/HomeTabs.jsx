import React, { useEffect, useState } from 'react'
import '../assets/css/tab.css';
import Carouselslidetwo from './../components/Layout/Carouselslidetwo';
// import fishbackground from '../../assets/img/fishbackground';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import home from '../assets/img/sidemenu/home.png';
import casino from '../assets/img/sidemenu/casino.png';
import lotto from '../assets/img/sidemenu/lotto.png';
import slot from '../assets/img/sidemenu/slot.png';
import sport from '../assets/img/sidemenu/sport.png';
import viber from '../assets/img/sidemenu/viber.png';
import telegram from '../assets/img/sidemenu/telegram.png';

import bbincasino from '../assets/img/game/bbincasino.png';
import lotto1 from '../assets/img/game/lotto1.png';
import lotto3 from '../assets/img/game/lotto3.png';
import sagames from '../assets/img/game/sagames.png';
import slot1 from '../assets/img/game/slot1.png';
import slot2 from '../assets/img/game/slot2.png';
import sport1 from '../assets/img/game/sport1.png';
import sport2 from '../assets/img/game/sport2.png';
import { Link, useSearchParams } from 'react-router-dom';
import '../assets/css/tab.css'
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const HomeTabs = () => {
  const {data: slotGames, loading, error} = useFetch(BASE_URL+'/gameTypeProviders/4');
  const {data: sportGames} = useFetch(BASE_URL+'/gameTypeProviders/3');
  const {data: casinoGames} = useFetch(BASE_URL+'/gameTypeProviders/2');
  const {data: hotGames} = useFetch(BASE_URL+'/hotgame');

  const [searchParams]=useSearchParams();
    const tabs = [
      {id:1,img:home,title:'ALL',link:'?tab=1'},
      {id:2,img:casino,title:'HOT',link:'?tab=2'},

      {id:4,img:slot,title:'SLOT',link:'?tab=4'},
      {id:5,img:sport,title:'SPORT BOOK',link:'?tab=5'},
      {id:6,img:sport,title:'LIVE CASINO',link:'?tab=6'},

      {id:3,img:lotto,title:'Lotto',link:'/lotto'},
      // {id:6,img:viber,title:'viber',link:'/'},
      // {id:7,img:telegram,title:'telegram',link:'/'}
    ];

    const [slotContents, setSlotContents] = useState("");
    useEffect(() => {
      setSlotContents(slotGames?.providers);
    }, [slotGames])

    const [sportContents, setSportContents] = useState("");
    useEffect(() => {
      setSportContents(sportGames?.providers);
    }, [sportGames])

    const [casinoContents, setCasinoContents] = useState("");
    useEffect(() => {
      setCasinoContents(casinoGames?.providers);
    }, [casinoGames])

    const [hotContents, setHotContents] = useState("");
    useEffect(() => {
      setHotContents(hotGames);
    }, [hotGames])

    const launchGame = (gameId) => {
      //fetch api calling
      fetch(BASE_URL + "/launchGame/" + gameId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Launch Game failed");
        }
        console.log("Launch Game success");
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        window.location.href = data.data;
      })
      .catch((error) => {
        console.error("Launch Game error:", error);
      });
    }
   
    
    return (
    <div className='px-2 ' >
        <Tab.Container id="left-tabs-example"  defaultActiveKey={1} >
      <Row>
        <Col xs={3} md={2}>
          <Nav variant="pills" className="flex-column  pt-4" style={{minHeight:'100vh'}}>
            <Nav.Item>
                {tabs.map((tab) => {
                    return <NavLink key={tab.id} className='text-decoration-none ' to={tab.link}>
                    <Nav.Link href={tab.link} eventKey={tab.id} className='tabs'>
                    <img src={tab.img} alt="" className='tab-imgs '/>
                    <div className='ms-sm-3 ms-xs-1'>{tab.title}</div>
                    </Nav.Link>
                    </NavLink>

                })}
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={8} md={10} className='ps-4 ms-3 ms-sm-0' >
          <Tab.Content>
          <Carouselslidetwo></Carouselslidetwo>
          <div className='text-center mt-4 mb-5 mt-lg-0'>
                    <h3 className='text-title'>
                      {searchParams.get('tab')==1 ?  'All Games': 
                      searchParams.get('tab')==2 ?  'Hot Games': 
                      searchParams.get('tab')==3 ?  'Lotto':
                      searchParams.get('tab')==4 ?  'Slot Games': 
                      searchParams.get('tab')==5 ?  'Sport Book':
                      searchParams.get('tab')==6 ?  'Live Casino':
                      'All Games'  
                      }
                    </h3>
                  </div>  
                    <Tab.Pane className='container-fluid ' eventKey={1}>
                      <h4 className='fw-bold mt-5' style={{ color: 'goldenrod' }}>Slot Games</h4>
                    <div className="row">
                    {slotContents && slotContents.map((data)=>{
                      return <Link to={'/games'} onClick={()=>{
                        localStorage.removeItem("provider_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("provider_id", data.id);
                        localStorage.setItem("gameType_id", data.pivot.game_type_id);
                        localStorage.setItem("title", data.description);
                      }} key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 my-sm-2 text-decoration-none text-white mb-4 mb-sm-5'>
                        {/* <span>{data.description}</span> */}
                        <img className='img-fluid rounded-sm-5 gameImg' src={data.img_url} />
                      </Link>
                    })}
                    </div>
                    <h4 className='fw-bold mt-5' style={{ color: 'goldenrod' }}>Sport Books</h4>
                    <div className="row">
                    {sportContents && sportContents.map((data)=>{
                      return <div key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 my-sm-2 ' onClick={() => launchGame(data.id)} style={{ cursor: "pointer" }}>
                        {/* <span>{data.description}</span> */}
                        <img className='img-fluid rounded-sm-5 gameImg' src={data.img_url} />
                      </div>
                    })}
                    </div>
                    <h4 className='fw-bold mt-5' style={{ color: 'goldenrod' }}>Live Casino</h4>
                    <div className="row">
                    {casinoContents && casinoContents.map((data)=>{
                      return <div key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 my-sm-2 mb-4 mb-md-5 ' onClick={() => launchGame(data.id)} style={{ cursor: "pointer" }}>
                        {/* <span>{data.description}</span> */}
                        <img className='img-fluid rounded-sm-5 gameImg' src={data.img_url} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='row ' eventKey={2}>
                    
                    {hotContents && hotContents.map((data)=>{
                      return  <img key={data.id}
                      style={{ objectFit: "cover" }}
                      className={` img-fluid   col-6 col-lg-4 col-xl-3 mb-4  rounded-sm-5 hotGameImg`}
                      src={data.img_url}
                      onClick={() => launchGame(data.id)}
                    />
                    })}
                    
                    </Tab.Pane>
                    <Tab.Pane className='container-fluid ' eventKey={4}>
                    <div className="row">
                    {slotContents && slotContents.map((data)=>{
                      return <Link to={'/games'} onClick={()=>{
                        localStorage.removeItem("provider_id");
                        localStorage.removeItem("gameType_id");
                        localStorage.removeItem("title");
                        localStorage.setItem("provider_id", data.id);
                        localStorage.setItem("gameType_id", data.pivot.game_type_id);
                        localStorage.setItem("title", data.description);
                      }} key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 my-sm-2 text-decoration-none text-white mb-4 mb-sm-5'>
                        {/* <span>{data.description}</span> */}
                        <img className='img-fluid rounded-sm-5 gameImg' src={data.img_url} />
                      </Link>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container-fluid ' eventKey={5}>
                    <div className="row">
                    {sportContents && sportContents.map((data)=>{
                      return <div key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 my-sm-2  ' onClick={() => launchGame(data.id)} style={{ cursor: "pointer" }}>
                        {/* <span>{data.description}</span> */}
                        <img  className='img-fluid rounded-sm-5 gameImg' src={data.img_url} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container-fluid ' eventKey={6}>
                    <div className="row">
                    {casinoContents && casinoContents.map((data)=>{
                      return <div key={data.id} className='col-6 col-sm-6 col-lg-4 col-xl-3 mb-4 my-sm-2 mb-sm-4 mb-md-5 ' onClick={() => launchGame(data.id)} style={{ cursor: "pointer" }}>
                        {/* <span>{data.description}</span> */}
                        <img  className='img-fluid rounded-sm-5 gameImg ' src={data.img_url} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    {/* <Tab.Pane className='container ' eventKey={3}>
                    <div className="row">
                    {lottoContents.map((data)=>{
                      return <div className='col-12 col-sm-6  col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane>
                    <Tab.Pane className='container ' eventKey={5}>
                    <div className="row">
                    {sportContents.map((data)=>{
                      return <div className='col-12 col-sm-6  col-lg-4 col-xl-4 my-2 '>
                        <span>{data.title}</span>
                        <img style={{width:'100%',height:'100%'}} className='rounded object-fit-contain ' src={data.img} />
                      </div>
                    })}
                    </div>
                    </Tab.Pane> */}
                    
                 
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default HomeTabs;