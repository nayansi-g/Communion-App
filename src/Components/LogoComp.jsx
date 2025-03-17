import React from 'react'
import image from '../assets/LogoPng.png';

const LogoComp = () => {
  return (
    <div className='flex items-center gap-2'>
        <img src={image} alt='Logo' className='w-9 h-9' />
        <h1 className='text-blue-600 text-2xl font-extrabold font-serif'>Communion</h1>
    </div>
  )
}

export default LogoComp
