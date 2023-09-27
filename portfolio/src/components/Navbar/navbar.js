import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpeg'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListITem'>Home</Link>
            <Link className='desktopMenuListITem'>About</Link>
            <Link className='desktopMenuListITem'>Portfolio</Link>
            <Link className='desktopMenuListITem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src='' alt='' className='desktopMenuImg' />Contact Me
        </button>
    </nav>
  )
}

export default navbar