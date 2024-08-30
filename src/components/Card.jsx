import React from 'react'
import Button from '@mui/material/Button';

const Card = ({ title, imgurl, url, externalurl }) => {
  const handleNavigate = () => {
    window.location.href = `${url}`;
  };
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={imgurl} alt="pod logo image" />
        </div>
        <div className='card-title'>
          <h1>{title}</h1>
          {
            (url === "") ?
              <a href={externalurl} target='_balnc'><Button variant="contained" className='btn'>Visit Site</Button></a> :
              <Button variant="contained" className='btn' onClick={handleNavigate}>Visit Page</Button>
          }
        </div>
      </div>
    </>
  )
}

export default Card