import React from 'react';

const About = () => {
  return (
    <section id='about' className="relative overflow-hidden flex flex-col items-center px-2 top-right-section-corner-circle bottom-left-section-corner-circle">
        <h2 className='section-heading'>About</h2>
        <p className='text-center z-10 text-gray-600 leading-loose py-5 md:w-5/6'>I’m a self-taught web developer and I am looking for a job of a web developer, since that is where you can get the most out of the skills that I currently have. I have been learning web development using <a href='http://www.zaio.io/' className='font-bold italic' target='_blank'>Zaio Coding School</a> and an open source coding curriculum called <a href='http://www.theodinproject.com/' className='font-bold italic' target='_blank'>The Odin Project</a>. Throughout my learning journey I have built some responsive user-interface web applications that are not only interactive but also friendly. Besides that I am a normal guy who enjoys watching anime and spending time with friends on my spare time. I am ambitious and hard-working and believe you’ll give me a chance to prove my words.</p>
    </section>
  )
}

export default About;