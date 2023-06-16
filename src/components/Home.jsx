import React from 'react'
import HomeImage from '../assets/portfolio/homeImage.jpeg';
import {TbCircleArrowRightFilled} from 'react-icons/tb'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <div class="flex flex-col justify-center max-w-xl">
                <h1 className=' text-4xl md:text-6xl lg:mt-20'>Welcome!</h1>
                <h3 className=' text-xl mt-2 font-bold'>I am Grace Itamunoala</h3>
                <p className='text-gray-500 py-4'>I am a <span className='font-bold'>Full Stack</span> developer with a strong command of frontend and backend development, enabling me to build robust 
                and scalable web applcations. I love to work on web applications using various technologies including
                Python, Java, ReactJS, HTML, TailwindCSS and Django.</p>

                <div>
                    <button className='group w-fit text-white px-5 py-3 my-2
                    flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio <span className='group-hover:rotate-90 duration-200 ml-2 text-2xl'><TbCircleArrowRightFilled/></span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HomeImage} alt="laptop" className='mb-2 mt-8 mx-auto w-full h-60 md:ml-14 rounded-xl cursor-pointer' />
            </div>
          
        </div>
    </div>
  )
}

export default Home