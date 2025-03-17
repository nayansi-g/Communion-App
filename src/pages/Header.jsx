import LogoComp from '../Components/LogoComp';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white shadow-md sticky top-0 w-full z-50  '>
      <nav className='flex items-center justify-between p-4 max-w-7xl mx-auto'>
    
        <div className='flex items-center gap-2'>
        <LogoComp />
        </div>

        
        <div className='hidden md:flex  gap-8 font-bold'>
          <Link className='hover:text-xl transition duration-300' to='/'>Home</Link>
          <Link className='hover:text-xl transition duration-300' to='/events'>Events</Link>
          <Link className='hover:text-xl transition duration-300' to='/about'>About</Link>
          <Link className='hover:text-xl transition duration-300' to='/support'>Support</Link>
        </div>

      
        <div className='hidden md:block'>
          <button className='bg-black text-white px-6 py-2 rounded-full'>
            <Link to='/signin'>Sign In</Link>
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-xl'>
          {isOpen ? '✖' : '☰'}
        </button>
      </nav>

     
      {isOpen && (
        <div className='md:hidden flex  items-center gap-5 p-4 sticky shadow-md bg-gray-200'>
          <Link className='hover:text-xl transition duration-300' to='/'>Home</Link>
          <Link className='hover:text-xl transition duration-300' to='/events'>Events</Link>
          <Link className='hover:text-xl transition duration-300' to='/about'>About</Link>
          <Link className='hover:text-xl transition duration-300' to='/support'>Support</Link>
          <Link to='/signin' className='bg-black text-white rounded-full p-2 hover:text-xl transition duration-300'>Sign In</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
