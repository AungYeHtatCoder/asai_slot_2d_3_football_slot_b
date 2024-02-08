import React,{useEffect,useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../../components/Main/MainLayout';
function threeDGenerateNumbers(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    // Convert the number to a string and pad with leading zeros if needed
    let formattedNumber = i.toString().padStart(2, '0');
  if(formattedNumber.length==2) formattedNumber='0'+i.toString().padStart(2, '0');
    result.push(formattedNumber);
  }

  return result;
}
function Offcanvas3D() {
    const {threeDSelectedNumbers,setThreeDSelectedNumbers,
        userThreedData,setUserThreedData}=useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [amount,setAmount]=useState('100');
  const threeDigits=['000','111','222','333','444','555','666','777','888','999'];
  const digit100=['000-099','100-199','200-299','300-399','400-499','500-599',
  '600-699','700-799','800-899','900-999'];
  const threeDigitToAdd=(digit)=>{
    if(!threeDSelectedNumbers.includes(digit)){
        setThreeDSelectedNumbers([...threeDSelectedNumbers,digit]);
        setUserThreedData([...userThreedData,{
            id:Math.random(),
            number:digit,
            amount,
            isAmountEdit:false
        }])
    }
  }
  const generateNumbers=(startEndString)=>{
    const [start,end]=startEndString.split('-');
    const numbersToAdd=threeDGenerateNumbers(Number(start),Number(end));
    numbersToAdd.map((n)=>{
      if(!threeDSelectedNumbers.includes(n)){
        setThreeDSelectedNumbers((prev)=>[...prev,n])
        setUserThreedData((prev)=>[...prev,{
          id:Math.random(),
          number:n,
          amount,
          isAmountEdit:false
      }])
      }
    })
  }
  return (
    <>
      <Button className='btn p-2 rounded-xl w-max my-2 text-white' style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}} onClick={handleShow}>
      အမြန်ရွေး
      </Button>

      <Offcanvas style={{height:'100vh'}} placement='bottom' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)</p>
          <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className=' px-1 rounded w-50' placeholder='ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)' /> <br/>
         <div className='mb-3'>
            <h6>(3)လုံးပူး ဂဏန်းများ</h6>
          {
          threeDigits.map((digit)=>{
                            return <button onClick={()=>threeDigitToAdd(digit)} className='btn btn-outline-success px-3 m-3'>{digit}</button>
                        })
                    }
         </div>
         <div className='mb-3'>
            <h6>အကွက် 100</h6>
          {
          digit100.map((digit)=>{
                            return <button onClick={()=>generateNumbers(digit)} className='btn btn-outline-success px-3 m-3'>{digit}</button>
                        })
                    }
         </div>
       
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvas3D;