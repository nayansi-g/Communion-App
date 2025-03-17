import React from 'react';
import image1 from "../assets/event-1.avif";
import image2 from "../assets/event-2.webp";
import image3 from "../assets/event-3.avif";

const About = () => {
  return (
   <div className='bg-white p-5 lg:p-10'>
     <div className='max-w-7xl mx-auto  px-4 py-10'>
      
      <p className='text-center text-gray-600 mb-10 max-w-3xl mx-auto'>
        Communion is a platform designed to bring people together through meaningful events, 
        engaging discussions, and a strong community spirit. Whether you're looking for support, 
        networking opportunities, or a place to share your thoughts, Communion is here to connect you.
      </p>

     
      <div className='mb-10 text-center'>
        <h2 className='text-3xl font-semibold text-black mb-4'>Our Missions</h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          Our mission is to create a welcoming space where individuals from all backgrounds can 
          come together to support and uplift one another. We believe in the power of community 
          and strive to foster meaningful connections among our members.
        </p>
      </div>

     
      <div className='grid md:grid-cols-3 gap-6 text-center'>
        <div className="bg-white shadow-md  bg-cover  p-6 rounded-lg">
          <img src={image1} alt="" />
          <h3 className='text-xl font-semibold text-gray-800'>Inclusive Community</h3>
          <p className='text-gray-600 mt-2'>A safe space for everyone to express themselves.</p>
        </div>
        <div className='bg-white shadow-md p-6 rounded-lg'>
          <img src={image2} alt="" />
          <h3 className='text-xl font-semibold text-gray-800'>Exciting Events</h3>
          <p className='text-gray-600 mt-2'>Join live discussions, meetups, and networking sessions.</p>
        </div>
        <div className='bg-white shadow-md p-6 rounded-lg'>
          <img src={image3} alt="" />
          <h3 className='text-xl font-semibold text-gray-800'>Support & Growth</h3>
          <p className='text-gray-600 mt-2'>Connect with mentors and peers for personal and professional growth.</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;

