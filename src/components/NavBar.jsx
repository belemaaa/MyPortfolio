import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className='flex items-center justify-between w-full h-20 bg-black text-white fixed px-4'>
            <div>
                <h1 className='font-signature text-5xl ml-2'>Grace</h1>
            </div>
            <ul className='hidden md:flex'>
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                capitalize'>Home</li>
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                capitalize'>About</li>
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                capitalize'>Portfolio</li>
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                capitalize'>Experience</li>
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                capitalize'>Contact</li>      
            </ul>
            <div className='cursor-pointer pr-4 z-10 text-gray-500'>
                <FaBars size={30} />
            </div>

        </div>
    )
}

export default NavBar