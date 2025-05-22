import React from 'react';
import './intro.css';
import bg from '../../assets/imageRpp.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='intoText'>I'm <span className='introName'>Robby</span> <br/>Web Developer</span>
            <p className='introP'>I specialize in building modern and responsive websites<br/>that deliver great user experiences.</p>
            <Link><button className='btn'><img src={btnImg} alt='btnImg' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro
