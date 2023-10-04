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
            TypeScript, Redux.js, ASP.Net, C#,Material-UI, SASS,PostgreSQL and cloud computing.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text.</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a demo text.</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Cloud} alt='Cloud' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Devops and Cloud Integration</h2>
                    <p>This is a demo text.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills