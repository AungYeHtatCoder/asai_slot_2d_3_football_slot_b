import React from 'react'
import '../../assets/css/Main/layout.css'
import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { GrLinkPrevious } from "react-icons/gr";
import {useLocation} from 'react-router-dom'
const Navbar = () => {
  const location=useLocation();
  return (
    <div className='mb-4 navbar p-4 d-flex justify-content-between align-items-center'>
      {location.pathname!=='/' && <GrLinkPrevious onClick={()=>history.back()} size={30} />}
      <NavLink to={'/'} className='text-decoration-none text-light' ><h5>Delight 2D | 3D</h5></NavLink>
      <IoNotificationsSharp size={25} />
    </div>
  )
}

export default Navbar
