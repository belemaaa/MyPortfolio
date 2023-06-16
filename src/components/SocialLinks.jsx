import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <span className='text-2xl'><FaLinkedin /></span>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <span className='text-2xl'><FaGithub /></span>
                </>
            ),
            href: 'https://github.com/belemaaa',
        },
        {
            id: 3,
            child: (
                <>
                    Email <span className='text-2xl'><HiOutlineMail /></span>
                </>
            ),
            href: 'mailto:graceitamunoala@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <span className='text-2xl'><BsFillPersonLinesFill /></span>
                </>
            ),
            href: '/CV - Grace Itamunoala.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style, download}) => (
                    <li key={id} className={'flex items-center justify-between w-32 px-4 bg-gray-500 ml-[-80px] hover:ml-[-10px] duration-200' 
                    + " " + style}>
                        <a
                            href={href}
                            className='flex justify-between items-center py-2 w-full text-white'>
                            {/* download={download}
                            target='blank'   */}
                            <>
                                {child}
                            </>
                        </a>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default SocialLinks