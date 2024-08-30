import React from 'react'
import Button from '@mui/material/Button';

const Card3 = ({name,imgurl,externalurl}) => {
  const date="14/11/2023"
  const time="20:20"
  return (
    <div className='card3'>
        <div className='contest-card-img'>
          <img src={imgurl} alt="contest image" />
        </div>
        <div className='contest-card-content'>
          <h1>{name}</h1>
          <p>Date : {date}</p>
          <p>Time : {time}</p>
          <a href={externalurl} target='_balnc'><Button variant="contained" className='btn'>Register Now</Button></a>
        </div>
      </div>
  )
}

export default Card3