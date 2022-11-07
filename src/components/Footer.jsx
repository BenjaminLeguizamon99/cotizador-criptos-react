import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='backdrop-blur-md grid md:grid-cols-4 justify-items-center sm:grid-cols-1 py-7 mt-10 object-bottom w-full'>
        <div className='text-lg text-white font-semibold my-auto sm:my-3 text-center'>
            <p>Benjamin Leguizamon.</p>
        </div>
            
        <div className='flex text-4xl text-white my-auto sm:my-3'>
            <a href='https://www.linkedin.com/in/benjamin-leguizamon/' target='_blank'><BsLinkedin /></a>
        </div>
        <div className='flex text-4xl text-white my-auto sm:my-3'>
            <a href='https://github.com/BenjaminLeguizamon99' target='_blank'><BsGithub /></a>
        </div>
            
        <div className='text-lg text-white font-semibold my-auto sm:my-3'>
            <p>Córdoba, Argentina.</p>
        </div>
    </div>
  )
}

export default Footer