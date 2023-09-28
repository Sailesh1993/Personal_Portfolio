import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpeg'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contact} alt='' className='desktopMenuImg' />Contact Me
        </button>
    </nav>
  )
}

export default navbar