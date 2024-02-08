import React from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/login.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='my-5 login py-3 py-sm-5 w-50 mx-auto'>
      <div className='text-center'>
        <img src={logo} className='logo' />
      </div>
      <h1>လော့ဂ်အင်ဝင်ရန်</h1>
      <div className='mx-3 mx-sm-5 my-3 my-sm-5'>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <FaUser />
          </InputGroup.Text>
          <Form.Control
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <FaLock />
          </InputGroup.Text>
          <Form.Control
            type='password'
            placeholder='Password'
            aria-label='Password'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
        <button className='loginBtn'>Login</button>
      </div>
      <div
        style={{ cursor: 'pointer' }}
        className='px-3 px-sm-5 d-flex align-items-center justify-content-between'
      >
        <NavLink className='text-decoration-none text-light  ' to={'/slots/register'}>
          အကောင့်ဖွင့်ရန်
        </NavLink>
        <p className='mt-3'> ဆက်သွယ်ရန် </p>
      </div>
    </div>
  );
};

export default LoginPage;
