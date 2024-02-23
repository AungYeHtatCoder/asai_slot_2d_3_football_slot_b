import React from 'react'
import user from '../assets/img/user.png';
import { Form } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <div className='px-2 py-5 d-flex flex-column  align-items-center'>
      <img src={user} style={{width:'50px',height:'50px',borderRadius:'100%'}} />
      <div className="mt-3 d-flex align-items-center gap-2">
      <i class="fa-solid fa-wallet"></i>
      <span>K 9,850</span>
      </div>
      <Form className='my-4'>
      <Form.Group className="mb-3" >
        <Form.Control type="file"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Name..." />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control  placeholder="Phone..." />
      </Form.Group>
      </Form>
      <button className='btn text-light ' style={{background:'#562991'}} >ပြောင်းမည်</button>
    </div>
  )
}

export default ProfilePage
