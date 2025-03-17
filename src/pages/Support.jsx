import React, { useState } from 'react';


const Support = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className=' bg-white p-5 lg:p-10'>
            <div className='max-w-7xl mx-auto px-4 py-10'>
                <p className='text-center text-gray-600 mb-10'>Need help? Find answers to common questions or reach out to us.</p>

               
                <div className='mb-10'>
                    <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Frequently Asked Questions</h2>
                    <div className='space-y-4'>
                        <details className='bg-white shadow-md p-4 rounded-lg'>
                            <summary className='font-semibold cursor-pointer'>How do I reset my password?</summary>
                            <p className='text-gray-600 mt-2'>Go to the Sign In page and click "Forgot Password" to reset it.</p>
                        </details>
                        <details className='bg-white shadow-md p-4 rounded-lg'>
                            <summary className='font-semibold cursor-pointer'>How can I contact support?</summary>
                            <p className='text-gray-600 mt-2'>You can fill out the form below or email us at support@communion.com.</p>
                        </details>
                        <details className='bg-white shadow-md p-4 rounded-lg'>
                            <summary className='font-semibold cursor-pointer'>Can I change my email address?</summary>
                            <p className='text-gray-600 mt-2'>Yes, go to Account Settings and update your email.</p>
                        </details>
                    </div>
                </div>
            

                
                <div className='bg-white w-full shadow-md p-6 rounded-lg max-w-2xl mx-auto'>
                    <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Contact Us</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} className='w-full p-2 shadow-md  border rounded-lg' required />
                        <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} className='w-full shadow-md p-2 border rounded-lg' required />
                        <textarea name='message' placeholder='Your Message' value={formData.message} onChange={handleChange} className='w-full p-2 shadow-md resize-none border rounded-lg' required />
                        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;

