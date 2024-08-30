import React from 'react'
import '../styles/home.css'
import '../styles/app.css'
import logo from '../images/logo.jpeg'
import Button from '@mui/material/Button';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

import PODimage from '../images/POD.jpg'
import Contestsimage from '../images/contestsimg.jpeg'

const Home = () => {

  // const Navigate = useNavigate()

  const handleNavigate = () => {
    window.location.href = '/login';
  };

  return (
    <div className='page-content'>
      <div className='main-container'>
        <div className='upper-container'>
          <div className='intro-text'>
            <h1>WHO ARE WE ?</h1>
            <p>The <span className='brand'>programming community</span> of our college is a vibrant hub of aspiring developers and programmers,
             where students come together to learn, collaborate, and share their passion for coding.</p>
             <Button variant="contained" className='btn' onClick={handleNavigate}>Join Us</Button>
          </div>
          <div className='intro-img'>
            <img src={logo} alt="demo img" />
          </div>
        </div>
        <div className='lower-container'>
          <Card 
            title={"Har Din DSA"}
            imgurl={PODimage}
            url="/pod"
          />
          <Card 
            title={"Contests"}
            imgurl={Contestsimage}
            url="/contest"
          />
        </div>
      </div>
    </div>
  )
}

export default Home