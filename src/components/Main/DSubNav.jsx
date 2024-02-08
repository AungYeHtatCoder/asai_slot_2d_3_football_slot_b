import React from 'react'
import '../../assets/css/Main/twoD.css'
import { NavLink } from 'react-router-dom'

const DSubNav = ({subNavArray}) => {
  return (
    <div className='p-3 rounded-3 my-4 dSubNav d-flex align-items-center justify-content-between' >
      {subNavArray.map((item)=>{
        return <NavLink to={item.link} className='text-white text-decoration-none text-center ' >
            {item.icon}<br/>
            <span>{item.title}</span>
        </NavLink>
      })}
    </div>
  )
}

export default DSubNav
