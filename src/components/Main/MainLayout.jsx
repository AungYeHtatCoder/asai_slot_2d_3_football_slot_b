import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/css/Main/layout.css'
import Navbar from './Navbar'
import Footer from './Footer'

export const AppContext=createContext();
const MainLayout = () => {
  const [twoDSelectedNumbers,setTwoDSelectedNumbers]=useState([]);
  const [twoDTime,setTwoDTime]=useState();
  const [twoDAmount,setTwoDAmount]=useState(100);
  const [userTwodData,setUserTwodData] = useState([]);
  const [threeDSelectedNumbers,setThreeDSelectedNumbers]=useState([]);
  const [threeDAmount,setThreeDAmount]=useState('100');
  const [userThreedData,setUserThreedData]=useState([]);
  return (
    <AppContext.Provider value={{
      twoDSelectedNumbers,setTwoDSelectedNumbers,
      twoDTime,setTwoDTime,
      twoDAmount,setTwoDAmount,
      userTwodData,setUserTwodData,
      threeDSelectedNumbers,setThreeDSelectedNumbers,
      threeDAmount,setThreeDAmount,
      userThreedData,setUserThreedData
    }} >
    <div className='layout'>
      <Navbar/>
      <Footer/>
      <div className="mainBody">
      <Outlet/>
      </div>
    </div>
    </AppContext.Provider>
  )
}

export default MainLayout
