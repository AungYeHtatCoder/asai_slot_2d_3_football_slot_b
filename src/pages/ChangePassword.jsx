import React from 'react'
import { FaLock } from "react-icons/fa";
import '../assets/css/changePassword.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ChangePasswordPage() {
  return (<>
  <div className="cgPwTitle py-3 ">
        <FaLock /> လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
        </div>
        <Form className='p-4 cgPwForm'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>စကားဝှက်အသစ်</Form.Label>
            <Form.Control type="password" placeholder="စကားဝှက်အသစ်" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>စကားဝှက်အသစ်ကို အတည်ပြုပါ။</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="cgPwBtn">
            <Button  variant="warning" type="submit">
            အတည်ပြုပါ။
            </Button>
        </div>

        
        </Form>
    </>
  );
}

export default ChangePasswordPage;


//  လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
// စကားဝှက်အသစ်
// စကားဝှက်အသစ်ကို အတည်ပြုပါ။

