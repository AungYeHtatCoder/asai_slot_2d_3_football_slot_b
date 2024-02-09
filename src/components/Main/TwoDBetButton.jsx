import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Main/twoD.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from './MainLayout';

function TwoDBetButton() {
  const {setTwoDTime}=useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const betTimes=[ '10:00 AM','12:00 AM','2:00 PM','4:00 PM']
  return (
    <>
      <Button className="twoDBetBtn rounded-2 py-2 px-4 text-white" variant="primary" onClick={handleShow}>
        ထိုးမည် 
      </Button>

      <Modal className='text-black ' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>ထိုးမည့်အချိန် (section) ကိုရွေးပါ</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column gap-3'>
            {betTimes.map((time)=>{
                return <NavLink onClick={()=>setTwoDTime(time)} to={'/lotto/2d/twodbet'} style={{width:'100%'}} >
                   <Button  style={{width:'100%'}} variant="outline-primary">{time}</Button>
                </NavLink> 
            })}
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TwoDBetButton;