import React,{useEffect,useContext} from 'react'
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import StartProfile from '../../components/Main/StartProfile'
import Offcanvas3D from '../../components/Main/Offcanvas3D';
import { AppContext } from '../../components/Main/MainLayout';
import { NavLink } from 'react-router-dom';

const ThreeDBetPage = () => {
  const firsts = [0,1,2,3,4,5,6,7,8,9];
  const seconds = [0,1,2,3,4,5,6,7,8,9];
  const thirds = [0,1,2,3,4,5,6,7,8,9];
  const {threeDSelectedNumbers,setThreeDSelectedNumbers,
    userThreedData,setUserThreedData}=useContext(AppContext);
  const [selectedDigits, setSelectedDigits] = useState('000');
  const [inputPrize,setInputPrize] = useState('100');

  const handleSelectChange = () => {
    const firstDigit = document.getElementById('first').value;
    const secondDigit = document.getElementById('second').value;
    const thirdDigit = document.getElementById('third').value;

    setSelectedDigits(`${firstDigit}${secondDigit}${thirdDigit}`);
  };

  const handleInputPrize = (event) => {
    setInputPrize(event.target.value);
  };
  const addHandler=()=>{
   if(!threeDSelectedNumbers.includes(selectedDigits)){
    setUserThreedData([...userThreedData,{
      id:Math.random(),
      number:selectedDigits,
      amount:inputPrize,
      isAmountEdit:false
    }])
    setThreeDSelectedNumbers([...threeDSelectedNumbers,selectedDigits])
   }
  }
  const editBet=(betId)=>{
    setUserThreedData(userThreedData.map((item)=>{
       if(item.id===betId) item={...item,isAmountEdit:!item.isAmountEdit}
       else item;
       return item;
    }))
  }
  const updateBet=(betId)=>{
    setUserThreedData(userThreedData.map((item)=>{
       if(item.id==betId) item={...item,isAmountEdit:false}
       return item;
    }))
  }
  const deleteBet=(betId,numberToDelete)=>{
    setUserThreedData(userThreedData.filter(item=>item.id!==betId));
      setThreeDSelectedNumbers(threeDSelectedNumbers.filter(n=>n!==numberToDelete))
  }
  const amountHandler=(e,betId)=>{
    setUserThreedData(userThreedData.map((item)=>{
      if(item.id===betId) item={...item,amount:e.target.value}
      return item;
    }))
  }
 
  useEffect(()=>{
    console.log('userThreedData',userThreedData.length)
  },[userThreedData])
  
  
  return (
    <div>
      <StartProfile amount1={0} amount2={0.00} timeLeftToClose={'10:20:00 AM'} />
      <div className='d-flex justify-content-between mt-4'>
        <div className='d-flex' style={{fontSize:'14px'}}>
          <p >ထိပ်စီး</p>
          <p className='mx-2'>အလယ်</p>
          <p>နောက်ပိတ်</p>
        </div>
        <p className='me-5'>ထိုးငွေ</p>
      </div>
      <div className='d-flex justity-content-center'>
        <select name="first" id="first" className=' px-1 rounded border-none' onChange={handleSelectChange}>
          {
            firsts.map((first)=>{
              return <option value={first}>{first}</option>
            })
          }
        </select>
        <select name="second" id="second" className='mx-2 px-1 rounded border-none' onChange={handleSelectChange}>
          {
            seconds.map((second)=>{
              return <option value={second}>{second}</option>
            })
          }
        </select>
        <select name="third" id="third" className='mx-2 px-1 rounded border-none' onChange={handleSelectChange}>
          {
            thirds.map((third)=>{
              return <option value={third}>{third}</option>
            })
          }
        </select>
        <input type="text" className='px-1 rounded w-50' id='kyatprize' placeholder='at least 100 kyats' value={inputPrize} onChange={handleInputPrize}/>
      </div>
          <div className="text-center my-4">
          <Offcanvas3D/>
          <>
              <button className='ms-4 btn p-2 rounded-xl w-max my-2 text-white' style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}} onClick={addHandler} >ထည့်မည်</button>
          </>
          </div>

      <Table striped bordered hover className='mt-3 mx-3'>
          <thead>
          <tr>
            <td>စဉ်</td>
            <td>ဂဏန်း</td>
            <td>ပမာဏ</td>
            <td>ပြင်/ဖျက်</td>
          </tr>
          </thead>
          <tbody>
          {userThreedData.map((bet, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{bet.number}</td>
             
             {bet.isAmountEdit ?  <td   >
              <input style={{width:'80px'}}  onChange={(e)=>amountHandler(e,bet.id)} value={bet.amount} />
             </td> 
             :
             <td>{bet.amount}</td>
             }
              <td>
              <i onClick={()=>{
                if(bet.isAmountEdit) updateBet(bet.id)
                else editBet(bet.id)
              }} class="fa-regular fa-pen-to-square mx-2"></i>
              <i onClick={()=>deleteBet(bet.id,bet.number)} class="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
          </tbody>
      </Table>
      
      <NavLink to={'/3d/threedConfirm'}>
        <button className='ms-4 btn p-2 rounded-xl w-max my-2 text-white' style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}}  >ထိုးမည်</button>
      </NavLink>
    </div>
  )
}

export default ThreeDBetPage
