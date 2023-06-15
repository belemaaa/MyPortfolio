import React from 'react'
import HomeImage from '../assets/portfolio/homeImage.jpeg';
import {FaCircleArrowRight} from 'react-icons/fa';
import {FaArrowRight} from "react-icons/fa";
import {TbCircleArrowRightFilled} from 'react-icons/tb'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <div class="flex flex-col justify-center h-full max-w-lg">
                <h1 className=' text-4xl md:text-6xl mt-40 md:mt-0'>Welcome!</h1>
                <h3 className=' text-xl mt-2 font-bold'>I am Grace Itamunoala</h3>
                <p className='text-gray-500 py-4'>I am a <span className='font-bold'>Full Stack</span> developer with a strong command of frontend and backend development, enabling me to build robust 
                and scalable web applcations. I love to work on web applications using various technologies including
                Python, Java, ReactJS, HTML, TailwindCSS and Django.</p>

                <div className='mt-6 bg-blue-400 rounded-2xl mr-96'>
                    <button className=''>
                        Portfolio <span><TbCircleArrowRightFilled/></span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HomeImage} className='rounded-xl mx-auto w-full h-60 md:ml-14' />
            </div>
          
        </div>
    </div>
  )
}

export default Home