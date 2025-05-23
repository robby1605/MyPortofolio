import React from 'react'
import './works.css'
import Porto1 from "../../assets/portfolio-1.png"
import Porto2 from "../../assets/portfolio-2.png"
import Porto3 from "../../assets/portfolio-3.png"
import Porto4 from "../../assets/portfolio-4.png"
import Porto5 from "../../assets/portfolio-5.png"
import Porto6 from "../../assets/portfolio-6.png"
import { Link } from 'react-scroll'

const Works = () => {
  return (
    <section id='works'>
      <span className='workTitle'>My Portofolio</span>
      <span className='workDesc'>bla bla bla bla bal abla badjsadas dsajdasda sadnsf afaf aa adafah hjfkjfas ja</span>
      <div className='works'>
        <img src={Porto1} alt='' className='workImg'/>
        <img src={Porto2} alt='' className='workImg'/>
        <img src={Porto3} alt='' className='workImg'/>
        <img src={Porto4} alt='' className='workImg'/>
        <img src={Porto5} alt='' className='workImg'/>
        <img src={Porto6} alt='' className='workImg'/>
      </div>
      <Link><button className='btn'>See More...</button></Link>
    </section>
  )
}

export default Works
