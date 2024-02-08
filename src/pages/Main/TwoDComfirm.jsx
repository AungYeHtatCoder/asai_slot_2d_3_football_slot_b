import React, { useEffect, useState } from "react";
import { Button, Form, NavLink, Table } from "react-bootstrap";
import { AppContext } from '../../components/Main/MainLayout';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdRepeat } from "react-icons/io";

function twoDR(inputArray) {
    const resultArray = [];

    // Function to reverse the characters of a string while preserving leading zeros
    function reverseStringWithLeadingZeros(str) {
        const reversedString = str.split("").reverse().join("");
        return reversedString;
    }

    // Ensure unique strings and transform each
    const uniqueStrings = [...new Set(inputArray)];

    uniqueStrings.forEach(str => {
        // Include the original string with leading zeros if necessary
        resultArray.push(str);

        // Include the reversed string if it's different from the original
        const reversedString = reverseStringWithLeadingZeros(str);

        // Ensure that reversed '01' is '10' and handle duplicates like '11', '22'
        if (str !== reversedString) {
            resultArray.push(reversedString);

            // Include reversed forms starting with '0' for strings that originally start with '0'
            if (str.startsWith('0')) {
                const reversedWithZero = reverseStringWithLeadingZeros(reversedString);

                // Ensure that the reversed form with '0' is not duplicated
                if (reversedWithZero !== str) {
                    resultArray.push(reversedWithZero);
                }
            }
        }
    });

    return resultArray;
}
const TwoDComfirm = ()=>{
    const {twoDSelectedNumbers,setTwoDSelectedNumbers,twoDTime,
        twoDAmount,setTwoDAmount,userTwodData,setUserTwodData }=useContext(AppContext);
        const [totalAmount,setTotalAmount]=useState(0);
        // console.log(twoDSelectedNumbers,twoDTime,twoDAmount);
        const amountHandler=(e,id)=>{
            setUserTwodData(userTwodData.map((data)=>{
                if(data.id==id) {
                    data={...data,amount:e.target.value}
                }
                return data;
            }))
            // setTwoDAmount(e.target.value)
        }
        const editHandler=(id)=>{
            setUserTwodData(userTwodData.map((data)=>{
                if(data.id==id){
                    data={...data,isEdit:!data.isEdit}
                }
                return data;
            }))
        }
       
        const deleteUserTwoDData = (id,value) => {
            // console.log('before delete',twoDSelectedNumbers);
            setTwoDSelectedNumbers((twoDSelectedNumbers)=>twoDSelectedNumbers.filter(n=>n!=value))
            // console.log('after delete',twoDSelectedNumbers);
            setUserTwodData((userTwodData) => userTwodData.filter((data) => data.id !== id));
        };
       
        const allR=()=>{
            console.log('to r',twoDSelectedNumbers)
            const numbersToAdd=twoDR([...twoDSelectedNumbers])
            numbersToAdd.map((n)=>{
                if(!twoDSelectedNumbers.includes(n)) setTwoDSelectedNumbers((prev)=>[...prev,n])
            })
        }
        const twodStoreData = () => {
            let oldStorageData=JSON.parse(localStorage.getItem('user-2d'))|| [];
            let dataToStore = [];
            dataToStore=userTwodData.map((data)=>{
                return {
                    id:data.id,
                    amount:data.amount,
                    value:data.value,
                    time:twoDTime,
                };
            })
            const updatedStorage=[...oldStorageData,...dataToStore]
            // Convert the userTwodData array to a string using JSON.stringify
            console.log(updatedStorage)
            const dataString = JSON.stringify(updatedStorage);
            // // // Store the string in localStorage with a specific key
            localStorage.setItem('user-2d', dataString);
            setTwoDSelectedNumbers([]);
            setUserTwodData([]);
        };
        useEffect(()=>{
            // if(twoDSelectedNumbers.length>0)
            if(twoDSelectedNumbers.length>0){
                const objectArray = twoDSelectedNumbers.map((item, index) => ({
                    id: index + 1,
                    value: item,
                    amount:twoDAmount,
                    isEdit:false
                  }));
                  setUserTwodData([...objectArray]);
            }
            let copyTotalAmount=0;
            userTwodData.map((data)=>copyTotalAmount+=Number(data.amount))
            setTotalAmount(copyTotalAmount);
          },[twoDSelectedNumbers])
          useEffect(()=>{
            let copyTotalAmount=0;
            userTwodData.map((data)=>copyTotalAmount+=Number(data.amount))
            setTotalAmount(copyTotalAmount);
          },[userTwodData])
          useEffect(()=>{
            console.log('twoDSelectedNumbers',twoDSelectedNumbers)
            console.log('userTwodData',userTwodData)

          },[twoDSelectedNumbers,userTwodData ])
          

    
    return <>
    <div className="mx-2">
        <div className="startProfile mb-3 p-2 d-flex flex-column gap-2 ">
        <span className=" mt-3 ">အချိန် : 
         <span className="mx-1 fw-bold">{twoDTime || 'မရွေးချယ်ရသေးပါ'}</span> 
         </span>
        <span className=" mt-3 ">ဂဏန်းအရေအတွက် :
         <span className="mx-1 fw-bold">{userTwodData.length}</span> ကွက်
         </span>
        {twoDSelectedNumbers.length>0 &&
        <span className="mt-2" >ဂဏန်းများ :
            <span className="mx-1 fw-bold">
            {userTwodData.map((n,i)=>{
                if(i+1===userTwodData.length) return n.value
                else return n.value+', '
            })}
            </span>
        </span>
        }
        <span  className="mt-2" >
            စုစုပေါင်းကျသင့်ငွေ: <span className="fw-bold">{totalAmount} ကျပ်</span>
        </span>
        <span >
            လက်ကျန်ငွေ: <span className="fw-bold"> 0 </span> ကျပ်
        </span><br/>
        </div>
        <Button className="mb-3 rounded-5 fw-bold border-0" style={{background:'purple',fontSize:'13px'}} onClick={allR}>All R <IoMdRepeat size={23} /></Button><br/>
       {twoDSelectedNumbers.length>0 &&  <Table striped bordered hover style={{fontSize:'14px'}}>
        <thead  >
            <tr>
            <th className="m-0 p-1" >#</th>
            <th  className="m-0 p-1">ဂဏန်း</th>
            <th className="m-0 p-1">ငွေပမာဏ</th>
            <th className="m-0 p-1">ပြင်/ဖျက်</th>
            </tr>
        </thead>
        <tbody>
                {
                   userTwodData.map((obj)=>{
                    return <>
                    <tr>
                        <td>{obj.id}</td>
                        <td>{obj.value}</td>

                        {obj.isEdit ? 
                        <td style={{width:'110px'}}>
                            <Form onSubmit={(e)=>e.preventDefault()} style={{fontSize:'13px'}} >
                                <Form.Control  className="p-1 " style={{width:'100%',fontSize:'13px'}} value={obj.amount}
                             onChange={(e)=>amountHandler(e,obj.id)}/>
                            </Form>
                        </td> : 
                        <td>{obj.amount}</td>
                        }
                        <td>
                        <i  onClick={()=>editHandler(obj.id)} class="fa-regular fa-pen-to-square fa-lg mx-2"></i>
                            <i class="fa-solid fa-trash-can fa-lg mx-2" 
                             onClick={() => deleteUserTwoDData(obj.id,obj.value)}></i>
                        </td>
                       
                       
                    </tr>
                    </>
                   }) 
                }
            <tr>
            
            {/* <td colSpan={2}>စုစုပေါင်းထိုးငွေ {totalAmount}</td> */}
            </tr>
        </tbody>
        </Table>}
        <Button disabled={userTwodData.length<1} style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}} >
        <NavLink to='/bet-history' style={{background:'none'}} className=' text-decoration-none text-white btn'   onClick={twodStoreData}>ထိုးမည်</NavLink>
        </Button>
     </div>
    </>
}

export default TwoDComfirm