import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2'>
        <h1 className='text-cyan-600 font-logo font-bold text-3xl'><Link to='/'>B <span className=' text-sm uppercase italic'>Portfolio</span></Link></h1>
        <ul className='flex items-center gap-5'>
            <li className='font-bold uppercase hover:text-cyan-500'><a href='#home'>Home</a></li>
            <li className='font-bold uppercase hover:text-cyan-500 cursor-pointer'><a href='#about'>About</a></li>
            <li className='font-bold uppercase hover:text-cyan-500'><a href='#projects'>Projects</a></li>
            <li className='font-bold uppercase hover:text-cyan-500 cursor-pointer'><a href='#contact'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar