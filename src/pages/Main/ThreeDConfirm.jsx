import React, { useContext, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { IoMdRepeat } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../components/Main/MainLayout'

const ThreeDConfirm = () => {
    const {threeDSelectedNumbers,setThreeDSelectedNumbers,
        userThreedData,setUserThreedData}=useContext(AppContext);
        const [total,setTotal]=useState('0');
        const allRHandler=()=>{
            const numbersToAdd=[];
            // const numbersToAdd=threeDAllR(threeDSelectedNumbers);
           numbersToAdd.map((n)=>{
            if(!threeDSelectedNumbers.includes(n)){
                setThreeDSelectedNumbers((prev)=>[...prev,n]);
                setUserThreedData((prev)=>[...prev,{
                    id:Math.random(),
                    number:n,
                    amount:'100',
                    isAmountEdit:false
                }])
            }
           })
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
          const threedStoreData = () => {
            let oldStorageData=JSON.parse(localStorage.getItem('user-3d'))|| [];
            let dataToStore = [];
            dataToStore=userThreedData.map((data)=>{
                return {
                    id:data.id,
                    amount:data.amount,
                    value:data.number,
                    date:new Date().toLocaleDateString()
                };
            })
            const updatedStorage=[...oldStorageData,...dataToStore]
            // Convert the userTwodData array to a string using JSON.stringify
            console.log(updatedStorage)
            const dataString = JSON.stringify(updatedStorage);
            // // // Store the string in localStorage with a specific key
            localStorage.setItem('user-3d', dataString);
            setThreeDSelectedNumbers([]);
            setUserThreedData([]);
        };
        useEffect(()=>{
            let totalCopy=0;
            userThreedData.map((data)=>totalCopy+=Number(data.amount))
            setTotal(totalCopy)
        },[userThreedData])
  return (
    <div className="mx-2">
        <div className="startProfile mb-3 p-2 d-flex flex-column gap-2 ">
        <span className=" mt-3 ">ဂဏန်းအရေအတွက် : 
         <span className="mx-1 fw-bold">{threeDSelectedNumbers.length}</span> ကွက်
         </span>
        {threeDSelectedNumbers.length>0 &&
        <span className="mt-2" >ဂဏန်းများ :
            <span className="mx-1 fw-bold">
            {userThreedData.map((n,i)=>{
                if(i+1===userThreedData.length) return n.number
                else return n.number+', '
            })}
            </span>
        </span>
        }
        
        <span  className="mt-2" >
            စုစုပေါင်းကျသင့်ငွေ: <span className="fw-bold">{total} ကျပ်</span>
        </span>
        <span >
            လက်ကျန်ငွေ: <span className="fw-bold"> 0 </span> ကျပ်
        </span><br/>
        </div>
        <Button  onClick={allRHandler} className="mb-3 rounded-5 fw-bold border-0" style={{background:'purple',fontSize:'13px'}} >All R <IoMdRepeat size={23} /></Button><br/>
        {threeDSelectedNumbers.length>0 &&  <Table striped bordered hover className='mt-3 mx-3'>
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
             
             {bet.isAmountEdit ?  <td >
              <input  style={{width:'80px'}} onChange={(e)=>amountHandler(e,bet.id)} value={bet.amount} />
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
      </Table>}
       
        <Button onClick={threedStoreData}  style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}} >
         ထိုးမည် 
        </Button>
     </div>
  )
}

export default ThreeDConfirm

