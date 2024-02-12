import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function topGenerateNumber(startDigit) {
    const resultArray = [];
    for (let i = 0; i < 10; i++) {
      const number = startDigit * 10 + i;
      const paddedNumber = number < 10 ? '0' + number : '' + number;
      resultArray.push(paddedNumber);
    }
    console.log('top',resultArray);
    return resultArray;
  }
function endGenerateNumber(endingDigit) {
    const resultArray = [];
    const endingNumber = parseInt(endingDigit);
    for (let i = 0; i <= 9; i++) {
      const number = i * 10 + endingNumber;
      const paddedNumber = number < 10 ? '0' + number : '' + number;
      resultArray.push(paddedNumber);
    }
    console.log('end',resultArray);
    return  resultArray;
   }
function roundGenerateNumber(inputDigit) {
    let resultArray =[]; 
    if(inputDigit==0) resultArray= ['00','01','02','03','04','05','06','07','08','09','10','20','30','40','50','60','70','80','90']
    if(inputDigit==1) resultArray= ['10','11','12','13','14','15','16','17','18','19','01','21','31','41','51','61','71','81','91']
    if(inputDigit==2) resultArray= ['20','21','22','23','24','25','26','27','28','29','02','12','32','42','52','62','72','82','92']
    if(inputDigit==3) resultArray= ['30','31','32','33','34','35','36','37','38','39','03','13','23','43','53','63','73','83','93']
    if(inputDigit==4) resultArray=  ['40','41','42','43','44','45','46','47','48','49','04','14','24','34','54','64','74','84','94']
    if(inputDigit==5) resultArray=  ['50','51','52','53','54','55','56','57','58','59','05','15','25','35','45','65','75','85','95']
    if(inputDigit==6) resultArray=  ['60','61','62','63','64','65','66','67','68','69','06','16','26','36','46','56','76','86','96']
    if(inputDigit==7) resultArray=  ['70','71','72','73','74','75','76','77','78','79','07','17','27','37','47','57','67','87','97']
    if(inputDigit==8) resultArray=  ['80','81','82','83','84','85','86','87','88','89','08','18','28','38','48','58','68','78','98']
    if(inputDigit==9) resultArray=  ['90','91','92','93','94','95','96','97','98','99','09','19','29','39','49','59','69','79','89']
    console.log(resultArray);
    return resultArray;
  }
function n20GenerateNumber(start, end) {
    const result = [];
  
    for (let i = start; i <= end; i++) {
      // Convert the number to a string and pad with leading zeros if needed
      const formattedNumber = i.toString().padStart(2, '0');
      result.push(formattedNumber);
    }
  
    return result;
  }

function OffcanvasBottom({selectedNumbers,setSelectedNumbers}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const tops = [0,1,2,3,4,5,6,7,8,9];
  const ends = [0,1,2,3,4,5,6,7,8,9];
  const rounds = [0,1,2,3,4,5,6,7,8,9];
  const twins = ['00','11','22','33','44','55','66','77','88','99'];
  const twentys = ['00-19','20-39','40-59','60-79','80-99'];
  const powers = ['16','27','38','49','50'];
  const thaipowers = ['18','24','35','69','70'];
    const selectedNumbersHandler=(state,number)=>{
        console.log(state,number);
        if(state==='top') {
            const numbersToAdd=topGenerateNumber(number);
            numbersToAdd.map((n)=>{
                const isNumberExist=selectedNumbers.includes(n);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,n])
                }
            })
        }
        if(state==='end') {
            const numbersToAdd=endGenerateNumber(number);
            numbersToAdd.map((n)=>{
                const isNumberExist=selectedNumbers.includes(n);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,n])
                }
            })
        }
        if(state==='round') {
            const numbersToAdd=roundGenerateNumber(number);
            numbersToAdd.map((n)=>{
                const isNumberExist=selectedNumbers.includes(n);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,n])
                }
            })
        }
        if(state==='twins'){
            const isNumberExist=selectedNumbers.includes(number);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,number])
                }
        }
        if(state==='power'){
            const isNumberExist=selectedNumbers.includes(number);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,number])
                }
        }
        if(state==='thaiPower'){
            const isNumberExist=selectedNumbers.includes(number);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,number])
                }
        }
    }
    const twentyHandler=(string20)=>{
        const [start,end]=string20.split('-');
            const numbersToAdd=n20GenerateNumber(Number(start),Number(end));
            numbersToAdd.map((n)=>{
                const isNumberExist=selectedNumbers.includes(n);
                if(!isNumberExist) {
                    setSelectedNumbers((prev)=>[...prev,n])
                }
            })
    }
  return (
    <>
      <Button variant="" onClick={handleShow} className='text-white' style={{background:' linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}}>
        အမြန်ရွေး
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="bottom"  style={{height:'70vh'}}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>အမြန်ရွေး</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div>
                <div>
                    <p style={{color:'#333'}}>ထိပ်စီး</p>
                    {
                        tops.map((top)=>{
                            return <button onClick={()=>selectedNumbersHandler('top',top)} className='btn btn-outline-success px-3 m-3'>{top}</button>
                        })
                    }
                </div>
                <div>
                    <p style={{color:'#333'}}>နောက်ပိတ်</p>
                    {
                        ends.map((end)=>{
                            return <button onClick={()=>selectedNumbersHandler('end',end)} className='btn btn-outline-success px-3 m-3'>{end}</button>
                        })
                    }
                </div>
                <div>
                    <p style={{color:'#333'}}>ပတ်ဂဏန်း</p>
                    {
                        rounds.map((round)=>{
                            return <button onClick={()=>selectedNumbersHandler('round',round)} className='btn btn-outline-success px-3 m-3'>{round}</button>
                        })
                    }
                </div>
                <div>
                    <p style={{color:'#333'}}>အပူးဂဏန်း</p>
                    {
                        twins.map((twin)=>{
                            return <button onClick={()=>selectedNumbersHandler('twins',twin)} className='btn btn-outline-success px-3 m-3'>{twin}</button>
                        })
                    }
                </div>

                <div>
                    <p style={{color:'#333'}}>ဂဏန်း ၂၀</p>
                    {
                        twentys.map((twenty)=>{
                            return <button onClick={()=>twentyHandler(twenty)} className='btn btn-outline-success px-3 m-3'>{twenty}</button>
                        })
                    }
                </div>

                <div>
                    <p style={{color:'#333'}}>ပါ၀ါဂဏန်း</p>
                    {
                        powers.map((power)=>{
                            return <button onClick={()=>selectedNumbersHandler('power',power)} className='btn btn-outline-success px-3 m-3'>{power}</button>
                        })
                    }
                </div>

                <div>
                    <p style={{color:'#333'}}>နက္ခတ်ဂဏန်း</p>
                    {
                        thaipowers.map((thai)=>{
                            return <button onClick={()=>selectedNumbersHandler('thaiPower',thai)} className='btn btn-outline-success px-3 m-3'>{thai}</button>
                        })
                    }
                </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasBottom;