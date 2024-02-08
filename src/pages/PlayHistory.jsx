import React from 'react'
import { FaGamepad } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import '../assets/css/playHistory.css'
const PlayHistoryPage = () => {
  return (
    <div>
        <div className="p-4 playHistoryTitle">
           <FaGamepad size={28} /> Play History
        </div>
        <div className="playHistoryTable">
            <div className="d-flex align-items-center justify-content-between gap-2 gap-sm-5">
            <Form.Select aria-label="Default select example">
                <option>Day</option>
                <option value="lastweek">Last Week</option>
                <option value="yesterday">Yesterday</option>
                <option value="today">Today</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
                <option>Game</option>
                <option value="sportsBook">Sports Book</option>
                <option value="casino">Casino</option>
                <option value="slots">Slots</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
                <option value="running">Running</option>
                <option value="settled">Settled</option>
            </Form.Select>
            </div>
        <Table className='mt-3' striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Games</th>
          <th>Win/Lose</th>
          <th>Play Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Jackson Tailor</td>
          <td>Win</td>
          <td>1-14-24</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Lose</td>
          <td>1-14-24</td>
        </tr>
       
      </tbody>
      </Table>
        </div>
    </div>
  )
}

export default PlayHistoryPage