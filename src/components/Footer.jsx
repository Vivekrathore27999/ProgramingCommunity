import React from 'react'
import '../styles/footer.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer>
            <h1>Thanks for visiting us 😍</h1>
                <ul className='social-media'>
                    <li><SocialIcon className='icon' url='https://www.instagram.com/itsme_aryan14/?next=%2F' target='_blank'></SocialIcon></li>
                    <li><SocialIcon className='icon' url="https://www.linkedin.com/in/aryan-kumar-thakur/" target='_blank'></SocialIcon></li>
                    <li><SocialIcon className='icon' url="https://github.com/Aryan-Kumar-Thakur" target='_blank'></SocialIcon></li>
                </ul>
        </footer>
    )
}

export default Footer