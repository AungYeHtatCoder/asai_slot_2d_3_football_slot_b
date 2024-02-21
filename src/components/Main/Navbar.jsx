import React from 'react'
import '../../assets/css/Main/layout.css';
import logo from '../../assets/img/logo.png'
import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { GrLinkPrevious } from "react-icons/gr";
import {useLocation} from 'react-router-dom'
const Navbar = () => {
  const location=useLocation();
  return (
    <div className='mb-4 navbar px-4 d-flex justify-content-start gap-5 align-items-center'>
      {location.pathname!=='/lotto' && <GrLinkPrevious onClick={()=>history.back()} size={30} />}
      <NavLink to={'/lotto'} className='text-decoration-none text-light' > 
        <img src={logo} style={{height:'60px'}} />
      </NavLink>
      {/* <IoNotificationsSharp size={25} /> */}
      {/* <NavLink to={'/lotto/login'} className="btn px-3 rounded text-white" style={{border:'1px solid #a202ff'}}>Login</NavLink> */}
    </div>
  )
}

export default Navbar
