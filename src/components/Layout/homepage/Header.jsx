import React from 'react';
import { PiHandWavingBold } from 'react-icons/pi';
import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs';
import me from '../../../assets/me.jpeg';

const Header = () => {
  return (
    <div id='home' className='flex justify-around items-center py-10'>
        <div className='text-center md:text-start'>
            <h2 className='text-2xl'>Hi There <PiHandWavingBold className='inline text-cyan-500'/>, <br />
                I'm <span className='text-cyan-500 font-bold font-logo leading-10'>Bongani Nyaku</span>,</h2>
            <p className='italic w-80 text-gray-500 mt-4'>I am the next <span className='text-cyan-500'>Web Developer</span> you have been looking for.</p>
            <div className='flex justify-center gap-10 mt-5 text-cyan-500 text-3xl md:justify-start'>
              <a className='transition ease-out hover:scale-125' href='https://www.facebook.com/Nganiboo' target='_blank'><BsFacebook /></a>
              <a className='transition ease-out hover:scale-125' href='https://github.com/Bongani001' target='_blank'><BsGithub /></a>
              <a className='transition ease-out hover:scale-125' href='https://www.linkedin.com/in/bongani-nyaku' target='_blank'><BsLinkedin /></a>
            </div>
            <button className='text-white border-2 bg-cyan-400 border-cyan-400 rounded font-bold hover:text-cyan-400 hover:bg-white px-3 py-1 mt-9 mr-5 transition ease-out hover:scale-110'><a href='https://drive.google.com/file/d/1KY6E-vqVIovyJ6quMOyrCZZptv_vyY23/view?usp=drive_link' target='_blank'>Resume</a></button>
            <button className='btn mt-9 transition ease-out hover:scale-110'><a href='#contact'>Hire me</a></button>
        </div>
        <div className='w-60 rounded-lg overflow-hidden hidden md:block'>
            <img src={me} className='object-fill' alt='Profile photo' />
        </div>
    </div>
  )
}

export default Header