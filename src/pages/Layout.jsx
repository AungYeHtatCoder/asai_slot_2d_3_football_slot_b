import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default Layout