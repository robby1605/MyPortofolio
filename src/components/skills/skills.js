import React from 'react';
import './skills.css';
import UIdesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>I am skilled and passionate web developer with experience ....</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIdesign} alt='UIdesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>fdsfdskfdsfksd jfkfgfk jgdfjkgdfgj kdfhgjkdfhgjdfhgdfjkg hdfkjg hdfjghdfkj  gdfhgjkdfgjkdfgfjdg sdfsdhjgfj</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={appDesign} alt='appDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>fsdfksdfsk</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={webDesign} alt='webDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>ksfdsdkfsdk</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
