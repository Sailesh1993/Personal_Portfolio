import React from 'react'
import './skills.css'
import UIDesign from '../../assets/uidesign.avif'
import WebDesign from '../../assets/webdesign.jpg'
import Cloud from '../../assets/cloud.webp'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span><br/> 
        <span className='skillDesc'>I am a skilled and passionate fullstack developer 
            with experience in building WebAPI and userfriendly websites.
            I have a strong understanding of design and a keen eye for details.<br/> I am proficient in React.js, 
            TypeScript, Redux.js, ASP.Net, C#,Material-UI, SASS, PostgreSQL, DevOps and cloud computing.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>
                        React.js, Node.js, Redux.js, Javascript, TypeScript, SASS, Material-UI, RestfulAPI, HTML5 and CSS. 
                    </p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development</h2>
                    <p>
                        C#, ASP.NetCore, EFCore, Clean Architecture, PostgreSQL,MySQL
                        Java and PHP.
                        </p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Cloud} alt='Cloud' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>DevOps and Cloud Integration</h2>
                    <p>BashScripting, Docker, CI/CD, Azure Cloud and Windows Server 2016</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills