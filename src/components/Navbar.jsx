import React, { useContext, useState } from 'react'
import { Navitems } from './Navitems'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx'
import { Context } from '../main';

const Navbar = () => {
    const {clicked,setclicked} = useContext(Context)
    const hide = ()=>{
        setclicked(false)
    }
    const AllNavitems = Navitems.map(({title,url},ind)=>{
        return(
            <li key={ind} onClick={hide}>
                <NavLink exact="true" to={url} activeclassname="active">{title}</NavLink>
         </li>
        )
    })
  return (
    <nav>
        <div className='logo'>
            Programming <span style={{color:"#fff"}}> Community</span>
        </div>
        <div className='menu-icon' onClick={()=>{setclicked(!clicked)}}>
        {
            (clicked) ?  <RxCross1/> : <GiHamburgerMenu/>
        }
        </div>
        <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        {AllNavitems}
        </ul>
    </nav>
  )
}

export default Navbar