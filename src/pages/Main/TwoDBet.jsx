import React, { useContext, useEffect, useState } from 'react'
import '../../assets/css/Main/bettwod.css';
import OffcanvasBottom from '../../components/Main/Offcanvas';
import { AppContext } from '../../components/Main/MainLayout';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const TwoDBet = () => {
    const {twoDSelectedNumbers,setTwoDSelectedNumbers,twoDTime,
    twoDAmount,setTwoDAmount ,userTwodData,setUserTwodData}=useContext(AppContext);
    const toggleSelectedNumbers=(number)=>{
        const isNumberExists=twoDSelectedNumbers.includes(number);
        if(isNumberExists) {
          setTwoDSelectedNumbers(twoDSelectedNumbers.filter((n)=>n!==number))
        }
        if(!isNumberExists){
          setTwoDSelectedNumbers([...twoDSelectedNumbers,number]);
        }
    }
    useEffect(()=>{
    if(userTwodData.length<1) setTwoDSelectedNumbers([]);
    },[])
    
  return (
    <div className='mx-2'>
      <div className="row mb-2">
      <div className="  col-sm-4 pt-0 pt-sm-4">
        <h5 className='fw-bold '>{twoDTime || '12:00 PM' }</h5>
      </div>
      <div className=" col-sm-8">
      <Form style={{width:'100%'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  >
          <small>ငွေပမာဏ(အနည်းဆုံး100ကျပ်)</small>
        </Form.Label>
        <Form.Control defaultValue={twoDAmount} 
        onChange={(e)=>setTwoDAmount(e.target.value)}  type="number" placeholder="ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)" />
      </Form.Group>
      </Form>
      </div>

      <div className="col-6 col-sm-4">
        <OffcanvasBottom 
      selectedNumbers={twoDSelectedNumbers}
       setSelectedNumbers={setTwoDSelectedNumbers} />
      </div>
     {twoDSelectedNumbers.length>0 && <>
      <div className="col-6  col-sm-4">
          <NavLink to='/lotto/2d/twodcomfirm' >
          <Button className='text-white' style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}}  >ထိုးမည်</Button>
          </NavLink>
        </div>
        <div className="mt-3 mt-sm-0 col-6  col-sm-4">
          <Button onClick={()=>setTwoDSelectedNumbers([])} variant="danger">
            ဖျက်မည်
          </Button>
        </div>
     </>}
       
      </div>
      <p style={{fontSize:'14px'}} className="fw-bold mt-3 mb-4">ရွေးချယ်ထားသော ဂဏန်းအရေအတွက် :
      <span className="mx-1">{twoDSelectedNumbers.length}</span> ကွက်</p>
      {twoDSelectedNumbers.length>0 &&
      <p  style={{fontSize:'14px'}} className="fw-bold mt-3 mb-4">ရွေးချယ်ထားသော ဂဏန်းများ :
        <span className="mx-1">
          {twoDSelectedNumbers.map((n,i)=>{
            if(i+1===twoDSelectedNumbers.length) return n
            else return n+', '
          })}
        </span>
      </p>
      }
     <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
     {Array.from(new Array(100), (val, index) => {
        const number=index<10 ? '0'+index:index.toString();
        return (
          <div onClick={()=>toggleSelectedNumbers(number)}  className={`number-box  ${twoDSelectedNumbers.includes(number) ? 'clicked':''} p-2 rounded-2 border  `}  >
           {number}
          </div>
        );
      })}
     </div>
    </div>
  )
}

export default TwoDBet
