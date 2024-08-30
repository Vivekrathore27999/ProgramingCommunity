import React from 'react'
import '../styles/errorpage.css'
import Button from '@mui/material/Button';
import errimg from '../images/404err.jpeg'
import { Navigate, useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <>
        <div className='page-content'>
        <div className="error-page">
            <img src={errimg} alt="This is error page" />
            <Button variant='contained' className='errbtn' onClick={() => {navigate(-1)}}>Go back</Button>
          </div>
        </div>
    </>
  )
}

export default Errorpage