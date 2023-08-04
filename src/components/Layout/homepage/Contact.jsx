import React from 'react';
import {BsFillTelephoneFill, BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact' className=''>
        <h2 className='section-heading text-center m-5'>Contact</h2>
        <p className='text-xl mb-3'>You can reach using the contacts below:</p>
        <div className='w-full'>
            <p><BsFillTelephoneFill className='text-gray-500 inline mr-3' /> +27 63 200 8090</p>
            <p><MdEmail className='text-gray-500 inline mr-3' /> bbongs421@gmail.com</p>
        </div>
        <div className='flex justify-center gap-10 mt-5 text-cyan-500 text-3xl md:justify-start'>
            <a className='transition ease-out hover:scale-125' href='https://www.facebook.com/Nganiboo' target='_blank'><BsFacebook /></a>
            <a className='transition ease-out hover:scale-125' href='https://github.com/Bongani001' target='_blank'><BsGithub /></a>
            <a className='transition ease-out hover:scale-125' href='https://www.linkedin.com/in/bongani-nyaku' target='_blank'><BsLinkedin /></a>
        </div>
    </section>
  )
}

export default Contact