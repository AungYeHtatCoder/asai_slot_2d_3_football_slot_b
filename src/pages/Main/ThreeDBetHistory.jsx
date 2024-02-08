import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../assets/css/Main/twoD.css'
function ThreeDBetHistoryPage() {
 const threeDBetData=[
    {id:1,date:'16.11.2023',threeD:'123'},
    {id:2,date:'1.11.2023 ',threeD:'456'},
]
const threeDListsArray=[
    {id:1,date:'16.11.2023',threeD:'970'},
    {id:2,date:'1.11.2023 ',threeD:'970'},
    {id:3,date:'16.10.2023 ',threeD:'970'},
    {id:4,date:'1.10.2023 ',threeD:'970'},
    {id:5,date:'16.9.2023 ',threeD:'970'},
    {id:6,date:'1.09.2023 ',threeD:'970'},
    {id:7,date:'16.08.2023 ',threeD:'970'},
    {id:8,date:'16.08.2023 ',threeD:'970'},
]
  return (<div className='twoDBetHistory mx-2 mx-sm-0'>
    <h5 className=" my-3 fw-bold text-center">3D ထီထိုးမှတ်တမ်း</h5>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="3D  ထီထိုးမှတ်တမ်း">
      {threeDBetData.map((item)=>{
        return <div className="rounded-4 p-2 p-sm-3 mb-3 twoDList ">
          <h5>{item.time}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className='fw-bold'>Date</h6>
              <h6>{item.date}</h6>
            </div>
            <div>
              <h6 className='fw-bold'>3D</h6>
              <h6>{item.threeD}</h6>
            </div>
            
          </div>
        </div>
      })}
      </Tab>
      <Tab eventKey="profile" title="3D ထီပေါက်စဥ်">
      {threeDListsArray.map((item)=>{
        return <div className="rounded-4 p-2 p-sm-3 mb-3 twoDList ">
          <h5>{item.time}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h6 className='fw-bold'>Date</h6>
              <h6>{item.date}</h6>
            </div>
            <div>
              <h6 className='fw-bold'>3D</h6>
              <h6>{item.threeD}</h6>
            </div>
            
          </div>
        </div>
      })}
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default ThreeDBetHistoryPage;