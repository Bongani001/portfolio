import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white z-50 flex justify-between py-2 sticky top-0'>
        <h1 className='text-cyan-600 font-logo font-bold text-3xl'><Link to='/'>B</Link></h1>
        <ul className='flex items-center gap-5'>
            <li className='font-bold uppercase hover:text-cyan-500 cursor-pointer'><a href='#about'>About</a></li>
            <li className='font-bold uppercase hover:text-cyan-500'><a href='#projects'>Projects</a></li>
            <button className='text-white border-2 bg-cyan-400 border-cyan-400 rounded font-bold hover:text-cyan-400 hover:bg-white px-3 py-1 transition ease-out hover:scale-110'><a href='#contact'>Contact</a></button>
        </ul>
    </nav>
  )
}

export default Navbar