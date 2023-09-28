import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import bg from '../../assets/bg.png'
import hire from '../../assets/hire.png'

const intro = () => {
  return (
    <section id='intro' >
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Sailesh Karki</span><br/>Software Developer</span>
            <p className='introPara'>
                Aspiring Fullstack Developer to Master the art of building robust web application <br/>with experience in creating visually appealing and user-friendly web applications<br/> Key skills: Full stack development, JavaScript, React JS, TypeScript,Material UI, Redux and C#.
            </p>
            <Link><button className='btn'><img src= {hire} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
            
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default intro