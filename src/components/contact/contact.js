import React from 'react';
import './contact.css';
import IG from "../../assets/instagram.png"
import FB from "../../assets/facebook-icon.png"
import YT from "../../assets/youtube.png"
import TW from "../../assets/twitter.png"

const Contact = () => {
  return (
    <section id='contact'>
      <span className='contactTitle'>Contact Me</span>
      <span className='contactDec'>dsbdabsdbasa sasdajshabdasgasba sadkaa</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'/>
        <input type='email' className='email' placeholder='Your Email'/>
        <textarea className='msg' name='message' rows="5" placeholder=''></textarea>
        <button className='submitBtn' type='submit' value='Send'>Submit</button>
      </form>
      <div className='sosmed'>
        <img src={IG} alt='IG' className='sosmedImg'/>
        <img src={FB} alt='FB' className='sosmedImg'/>
        <img src={YT} alt='YT' className='sosmedImg'/>
        <img src={TW} alt='TW' className='sosmedImg'/>
      </div>
    </section>
  )
}

export default Contact
