import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import LogoComp from '../Components/LogoComp';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 '>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        {/* Logo & Name */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <LogoComp />
          <p className='text-sm text-gray-400'>Connecting people, building community.</p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-wrap  justify-center gap-6 text-sm'>
          <Link to='/' className='hover:text-gray-300'>Home</Link>
          <Link to='/events' className='hover:text-gray-300'>Events</Link>
          <Link to='/about' className='hover:text-gray-300'>About</Link>
          <Link to='/support' className='hover:text-gray-300'>Support</Link>
       
        </div>

        {/* Social Media Links */}
        <div className='flex gap-4 mt-4 md:mt-0'>
          <a href='https://www.facebook.com' className='text-gray-400 hover:text-white'><FaFacebook size={20} /></a>
          <a href='https://www.twitter.com' className='text-gray-400 hover:text-white'><FaTwitter size={20} /></a>
          <a href='https://www.instagram.com' className='text-gray-400 hover:text-white'><FaInstagram size={20} /></a>
          <a href='https://www.linkdin.com' className='text-gray-400 hover:text-white'><FaLinkedin size={20} /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-gray-500 text-sm mt-6'>
        © {new Date().getFullYear()} Communion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
