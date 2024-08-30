import React from 'react'



const Card2 = ({name,difficulty,url}) => {
    var givecolor = {}

    if(difficulty=="Easy"){
        givecolor.color="lightgreen"
    }
    else if(difficulty=="Medium"){
        givecolor.color="#f0b03a"
    }
    else{
        givecolor.color="#e74040"
    }

  return (
    <div className='card2'>
    <div className='card-content'>
        <h1 className='problem-name'>{name}</h1>
        <h2>Difficulty:  <span style={givecolor}>{difficulty}</span></h2>
    </div>
    <a href={url} target='_blank'><button className='btn'>Solve Now</button></a>
    </div>
  )
}

export default Card2