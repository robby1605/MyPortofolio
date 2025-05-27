import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css';
import IG from "../../assets/instagram.png"
import FB from "../../assets/facebook-icon.png"
import YT from "../../assets/youtube.png"
import TW from "../../assets/twitter.png"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jo37m1n',
      'template_zfs4cyu',
      form.current,
      'a3aJkOky2eQLV0UP2'

    ).then((result) => {
      console.log(result.text)
      alert('Email Berhasil dikirim');
    }, (error) => {
      console.log(error.text);
      alert('gagal dikirim')
    });
    e.target.reset();
  }


  return (
    <section id='contact'>
      <span className='contactTitle'>Contact Me</span>
      <span className='contactDec'>Have a project or collaboration in mind? I’d love to hear from you.
Let’s build something amazing together.</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' name='user_name' className='name' placeholder='Your Name'/>
        <input type='email' name='email' className='email' placeholder='Your Email'/>
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
