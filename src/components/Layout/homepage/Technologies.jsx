import React from 'react';
import {AiFillHtml5, AiOutlineGithub} from 'react-icons/ai';
import {RiBootstrapFill} from 'react-icons/ri';
import {BiLogoReact, BiLogoJava, BiLogoSpringBoot, BiLogoFirebase, BiLogoTailwindCss, BiLogoJavascript, BiLogoPostgresql, BiLogoGit} from 'react-icons/bi';
import {SiSpringboot} from 'react-icons/si';
import {DiMysql} from 'react-icons/di';
import {TbApi} from 'react-icons/tb';

const Technologies = () => {
  return (
    <section className='flex flex-col items-center py-5'>
      <h2 className='section-heading'>Skills</h2>
      <ul className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 mt-10'>
        <li className='flex items-center justify-self-start gap-3 text-xl'><AiFillHtml5 className='text-cyan-500' /> HTML/CSS</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><RiBootstrapFill className='text-cyan-500' /> Bootstrap</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoTailwindCss className='text-cyan-500' /> Tailwindcss</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoJavascript className='text-cyan-500' /> JavaScript</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoGit className='text-cyan-500' /> Git</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><AiOutlineGithub className='text-cyan-500' /> Github</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoReact className='text-cyan-500' /> React</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoFirebase className='text-cyan-500' /> Firebase</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoJava className='text-cyan-500' /> Java</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoSpringBoot className='text-cyan-500' /> Spring</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><SiSpringboot className='text-cyan-500' /> SpringBoot</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><BiLogoPostgresql className='text-cyan-500' /> PostgreSQL</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><DiMysql className='text-cyan-500' /> MySQL</li>
        <li className='flex items-center justify-self-start gap-3 text-xl'><TbApi className='text-cyan-500' /> REST API</li>
      </ul>
    </section>
  )
}

export default Technologies;