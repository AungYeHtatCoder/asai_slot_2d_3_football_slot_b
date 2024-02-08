import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../assets/css/Main/twoD.css'
function TwoDBetHistory() {
  const twoDBetData=[
    {date:'17-11-2023 Friday',data:[
      {
      time:'10:30 AM',
      twoD:['97 - 400','40 - 300']
    },
    {
      time:'12:00 AM',
      twoD:['97 - 400','40 - 300']
    },
    {
      time:'2:00 AM',
      twoD:['97 - 400','40 - 300']
    },
    {
      time:'4:30 AM',
      twoD:['97 - 400','40 - 300']
    }
  ]},
  {date:'16-11-2023 Thursday',data:[
    {
    time:'10:30 AM',
    twoD:['97 - 400','40 - 300']
  },
  {
    time:'12:00 AM',
    twoD:['97 - 400','40 - 300']
  },
  {
    time:'2:00 AM',
    twoD:['97 - 400','40 - 300']
  },
  {
    time:'4:30 AM',
    twoD:['97 - 400','40 - 300']
  }
]}
  ];
  const twoDWinnerResults=[
    {date:'17-11-2023 Friday',data:[
      {time:'10:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'12:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'2:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'4:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
    ]},
    {date:'16-11-2023 Thursday',data:[
      {time:'10:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'12:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'2:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
      {time:'4:30 AM',set:'1,415.69',value:'13,474.43',twoD:94},
    ]}
  ]
  return (<div className='twoDBetHistory mx-2 mx-sm-0'>
    <h5 className=" my-3 fw-bold text-center">2D ထီထိုးမှတ်တမ်း</h5>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="2D  ထီထိုးမှတ်တမ်း">
        {twoDBetData.map((bet)=>{
          return <div className="mb-4">
            <h5  className='text-center'>{bet.date}</h5>
            <div  className="betContainer p-2 p-sm-3 rounded-4 my-3">
              {bet.data.map((item)=>{
                return <div className='border-bottom py-2'>
                    <div className="row text-center">
                      <h6 className='fw-bold col-6'>Section</h6>
                      <h6 className=' fw-bold col-6'>2D</h6>
                    </div>
                    <div className="row text-center">
                      <h6 className='col-6 fw-bold'>{item.time}</h6>
                      <div className="col-6">
                        {item.twoD.map((twoD)=>{
                          return <h6>{twoD}</h6>
                        })}
                      </div>
                     
                    </div>
                </div>
              })}
            </div>
          </div>
        })}
      </Tab>
      <Tab eventKey="profile" title="2D ထီပေါက်စဥ်">
      {twoDWinnerResults.map((winner)=>{
          return <div className="mb-4">
            <h5  className='text-center'>{winner.date}</h5>
            <div  className="betContainer p-2 p-sm-3 rounded-4 my-3">
              {winner.data.map((item)=>{
                return <div className='border-bottom py-2'>
                  <h6 className="text-center fw-bold">{item.time}</h6>
                    <div className="row text-center">
                      <h6 className='fw-bold col-4'>Set</h6>
                      <h6 className='fw-bold col-4'>Value</h6>
                      <h6 className=' fw-bold col-4'>2D</h6>
                    </div>
                    <div className="row text-center">
                    <h6 className='fw-bold col-4'>{item.set}</h6>
                      <h6 className='fw-bold col-4'>{item.value}</h6>
                      <h6 className=' fw-bold col-4'>{item.twoD}</h6>
                    </div>
                </div>
              })}
            </div>
          </div>
        })}
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default TwoDBetHistory;