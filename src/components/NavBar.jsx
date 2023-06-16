import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];

    return (
        <div className='flex items-center justify-between w-full h-20 bg-white text-black fixed px-4'>
            <div>
                <h1 className='font-signature text-5xl ml-2 text-black'>Grace</h1>
            </div>

            <ul className='hidden md:flex'>
                {/* loop through list items */}
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200
                    capitalize'>{link}</li>

                ))}              
            </ul>

                {/* set nav and nav condition */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />} 
            </div>  

            {nav && (
                <ul className="flex flex-col justify-center items-center w-full h-screen 
                absolute top-0 left-0  bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({id, link}) => (
                        <li key={id} className='px-4 py-5 cursor-pointer text-3xl hover:scale-105 duration-200
                        capitalize'>{link}</li>

                    ))}    
                </ul>
            )}  
            
            
        </div>
    )
}

export default NavBar