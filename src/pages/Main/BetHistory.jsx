import React from "react";

import { Tabs,Tab } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from '../../components/Main/MainLayout';
import { useContext } from "react";

import '../../assets/css/Main/twoD.css';

const BetHistory = ()=>{
    const TwoDHistory = [
         {
            id:1,date:'29/1/2024 Monday',datas:[
                {
                    time:'10:30 AM',
                    values:['40-300','34-200']
                },
                {
                    time:'12:00 AM',
                    values:['40-300','34-200']
                },
                {
                    time:'02:30 PM',
                    values:['40-300','34-200']
                }
                ,{
                    time:'4:00 PM',
                    values:['40-300','34-200']
                }
            ]
        },
        {
            id:2,date:'30/1/2024 Monday',datas:[
                {
                    time:'10:30 AM',
                    values:['40-300','34-200']
                },
                {
                    time:'12:00 AM',
                    values:['40-300','34-200']
                },
                {
                    time:'02:30 PM',
                    values:['40-300','34-200']
                }
                ,{
                    time:'4:00 PM',
                    values:['40-300','34-200']
                }
            ]
        }
    ]

    const ThreeDHistory = [
        {
            id:1,date:'16.1.2024',values:['398-300','455-200','987-1000']    
        },
        {
            id:2,date:'1.2.2024',values:['398-300','455-200','987-1000']    
        },
        {
            id:3,date:'16.2.2024',values:['398-300','455-200','987-1000']    
        },
        {
            id:4,date:'1.3.2024',values:['398-300','455-200','987-1000']    
        }
    ]

    // const [betPageData, setBetPageData] = useState([]);


    
    const {twoDSelectedNumbers,setTwoDSelectedNumbers,twoDTime,
        twoDAmount,setTwoDAmount }=useContext(AppContext);

    const [userTwodData, setUserTwodData] = useState([]);
    const [userThreedData, setUserThreedData] = useState([]);

    useEffect(() => {
        const storedDataString = localStorage.getItem('user-2d');
        if (storedDataString) {
            const storedData = JSON.parse(storedDataString);
           setUserTwodData(storedData);
            // Assuming you also want to use twoDTime from stored data
            // const storedTwoDTime = storedData.twoDTime;
            // Do something with storedTwoDTime if needed
        }
        const stored3dDataString = localStorage.getItem('user-3d');
        if (stored3dDataString) {
            const storedData = JSON.parse(stored3dDataString);
           setUserThreedData(storedData);
            // Assuming you also want to use twoDTime from stored data
            // const storedTwoDTime = storedData.twoDTime;
            // Do something with storedTwoDTime if needed
        }
    }, []);
    return <>
        <div className="twoDBetHistory">
        <Tabs
      defaultActiveKey="TwoD"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex justify-content-center"
    >
      <Tab eventKey="TwoD" title="2D  ထီထိုးမှတ်တမ်း">
      <div className="m-3 p-3 " style={{backgroundColor:'rgba(102, 0, 149, 1)'}}>
      <h6 className="fw-bold text-center">{new Date().toLocaleDateString()}</h6>
        <div  className="d-flex justify-content-around align-items-start">
            <p className="text-center fw-bold">Section</p>
            <p className="text-center fw-bold " >2D-Amount</p>
        </div>
        {
             userTwodData.map((data, index) => (
                <div className="d-flex justify-content-around align-items-start" key={index}>
                        <p >{data.time}</p>

                    <p >{data.value} <span>-</span>{data.amount} </p>
                </div>
            ))
            
        }
        </div>
      </Tab>
      <Tab eventKey="ThreeD" title="3D  ထီထိုးမှတ်တမ်း">
            <div className="m-3 p-3" style={{backgroundColor:'rgba(102, 0, 149, 1)'}}>
                <div className="d-flex justify-content-around align-items-start ">
                    <div>
                        <p className="fw-bold">Date</p>
                    </div>
                    <div>
                        <h6 className="fw-bold">3D - Amount</h6>
                    </div>
                </div>
            {
                userThreedData.map((data)=>{
                    return  <>
                    <div className="d-flex justify-content-around align-items-start my-3">
                    <p className="fw-bold" >{data.date}</p>
                    <div>
                        <span>{data.value}</span> - <span>{data.amount}</span>
                    </div>
                    </div>
                    <hr/>
                    </>
                })
            }
            </div>
      </Tab>
      
    </Tabs>
        </div>
    </>
}

export default BetHistory