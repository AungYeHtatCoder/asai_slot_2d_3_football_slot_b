import React from "react";

import '../../assets/css/Main/twoD.css';

import { Tabs,Tab } from "react-bootstrap";

const Result = ()=>{
    const twoDResult = [
        {
            id:1,date:'18/1/2024 Monday',datas:[
                {
                    time:'10:30 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'12:00 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'2:30 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'4:00 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                }
            ]
        },
        {
            id:2,date:'18/1/2024 Monday',datas:[
                {
                    time:'10:30 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'12:00 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'2:30 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                },
                {
                    time:'4:00 AM',set:'1,415.69',value:'13,474.43',twod:'98'
                }
            ]
        }
    ]

    const threeDResult = [
        {
            id:1,date:'15/2/2024',value:'987'
        },
        {
            id:2,date:'1/3/2024',value:'123'
        },
        {
            id:3,date:'15/3/2024',value:'258'
        }
    ]
    return <>
    <div className="twoDBetHistory">
        <Tabs
      defaultActiveKey="TwoD"
      id="uncontrolled-tab-example"
      className="mb-3 d-flex justify-content-center"
    >
            <Tab eventKey="TwoD" title="2D ထီပေါက်စဥ်">
                {
                    twoDResult.map((twod)=>{
                        return <div>
                        <p className="text-center my-3">{twod.date}</p>
                        {
                            twod.datas.map((data)=>{
                                return <>
                                <div className="py-3" style={{backgroundColor:'rgba(102, 0, 149, 1)'}}>
                                    <p className="text-center text-decoration-underline">{data.time}</p>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <p>Set</p>
                                        <p>Value</p>
                                        <p>2d</p>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center">
                                        <p>{data.set}</p>
                                        <p>{data.value}</p>
                                        <p>{data.twod}</p>
                                    </div>
                                </div>
                                </>
                            })
                        }
                        
                    </div>
                    })
                }
                
            </Tab>
            <Tab eventKey="ThreeD" title="3D ထီပေါက်စဥ်">
                {
                    threeDResult.map((threed)=>{
                        return <>
                        <div>
                            <div className="d-flex justify-content-around align-items-start">
                                <p>Date</p>
                                <p>Value</p>
                            </div>
                            <div className="d-flex justify-content-around align-items-center">
                                <p style={{color:'#ddd'}}>{threed.date}</p>
                                <p className="fw-bold">{threed.value}</p>
                            </div>
                        </div> 
                        <hr/> 
                        </>
                    })
                }
                  
            </Tab>
            
        </Tabs>
        </div>
    </>
}

export default Result