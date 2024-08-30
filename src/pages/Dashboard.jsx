import React, { useState } from 'react'
import Button from '@mui/material/Button';
import '../styles/dashboard.css'

const Dashboard = () => {
  const [problem, setproblem] = useState("")
  const [problemurl, setproblemurl] = useState("")
  const [contest, setcontest] = useState("")
  const [contesturl, setcontesturl] = useState("")
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  return (
    <div className='page-content'>
      <div className='dashboard'>
        <div className='create-pod'>
          <h1 className='create-heading'>create problem of the day</h1>
          <div className='inputBox'>
            <span> problem name : </span>
            <input type="text" id='problemname' value={problem} onChange={(e) => setproblem(e.target.value)} placeholder='Enter problem name' />
          </div>
          <div className='inputBox'>
            <span> problem link : </span>
            <input type="text" id='problemlink' value={problemurl} onChange={(e) => setproblemurl(e.target.value)} placeholder='Enter problem link' />
          </div>
          <div className='inputBox'>
            <span> choose difficulty : </span>
            <select name="difficulty" id="difficulty">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <Button variant="contained" className='btn'>Create</Button>
        </div>
        <div className='create-contest'>
          <h1 className='create-heading'>create contest</h1>
          <div className='inputBox'>
            <span> contest name : </span>
            <input type="text" id='contestname' value={contest} onChange={(e) => setcontest(e.target.value)} placeholder='Enter contest name' />
          </div>
          <div className='inputBox'>
            <span> contest link : </span>
            <input type="text" id='contestlink' value={contesturl} onChange={(e) => setcontesturl(e.target.value)} placeholder='Enter contets link' />
          </div>
          <div className='inputBox'>
            <span> Date : </span>
            <input type="date" id='contestdate' value={date} onChange={(e) => setdate(e.target.value)} />
          </div>
          <div className='inputBox'>
            <span> Time : </span>
            <input type="time" id='contesttime' value={time} onChange={(e) => settime(e.target.value)} />
          </div>
          <Button variant="contained" className='btn'>Create</Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard