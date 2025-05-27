import React from 'react';
import './skills.css';
import UIdesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import dbms from '../../assets/dbms.png'
import backendDev from '../../assets/backendDev.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>I’m a skilled and passionate Full Stack Web Developer with experience in building end-to-end web applications — from designing responsive front-end interfaces to developing scalable and secure back-end systems.  
I turn ideas into fully functional digital products that are fast, reliable, and user-friendly.</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIdesign} alt='UIdesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Frontend Development</h2>
                <p>Building responsive and interactive user interfaces using HTML, CSS, JavaScript, React.js, Inertia.js, and Bootstrap.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={backendDev} alt='backendDev' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Backend Development</h2>
                <p>Developing secure and scalable server-side applications with Laravel and RESTful APIs.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={dbms} alt='dbms' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Database Management</h2>
                <p>Designing and managing relational databases using MySQL with optimized queries and migrations.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={webDesign} alt='webDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Full Stack Workflow</h2>
                <p>Integrating front-end and back-end seamlessly for complete web applications with modern development tools and Git version control.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
