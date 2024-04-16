import React from 'react'
import PropTypes from 'prop-types'
import { Link,NavLink } from 'react-router-dom'
import { CiHome } from "react-icons/ci";

function Navbar(props) {
  return (
    <nav className='w-3/4 mx-auto flex items-center justify-between px-8 my- h-min bg-[#ffffff4c] py-2 rounded-sm'>
    <Link to='/'><div className='text-3xl font-bold flex items-center'><CiHome className='text-[#8bcc00]' /> U<span className='text-[#8bcc00]'>Estate</span></div></Link>
    <ul className='flex gap-6 text-xl items-center'>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About Us</NavLink>
        </li>
        <li>
            <NavLink to='/listing'>Listing</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact Us</NavLink>
        </li>
        <li>
            <NavLink to='/profile'>Profile</NavLink>
        </li>

        
    </ul>

    <div>
            <Link><button className='bg-transparent btn hover:bg-[#292929] btn-outline rounded-sm mr-6 font-bold'>Sign In</button></Link>
            <Link><button className='btn bg-transparent border-none shadow-none outline-1 font-bold hover:outline   rounded-sm hover:bg-transparent '>Sign Up</button></Link>
        </div>

    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar
