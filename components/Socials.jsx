import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaIcons } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className='mx-auto max-w-[1240px] text-center'>
            <div className='text-center p-4'>
                <p className='text-2xl font-bold'>Connect with us on Social Media</p>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center'>
                {/**Twitter */}
                <div className='shadow-lg rounded-lg justify-center flex mb-4 p-3 hover:bg-sky-500 hover:text-white duration-300'>
                    <div className='h-12'>
                        <FaTwitter size={40} />
                    </div>
                    <div className='p-2 h-12'>@geotechdevelopers</div>
                </div>
                {/**Facebook */}
                <div className='shadow-lg rounded-lg justify-center flex mb-4 p-3 hover:bg-blue-600 hover:text-white duration-300'>
                    <div className='h-12'>
                        <FaFacebook size={40} />
                    </div>
                    <div className='p-2 h-12'>geotechdevelopers</div>
                </div>
                {/**Instagram */}
                <div className='shadow-lg rounded-lg justify-center flex p-3 mb-4 bg-gradient-to-r hover:text-white hover:from-pink-500 hover:to-yellow-500 duration-300'>
                    <div className='h-12'>
                        <FaInstagram size={40} />
                    </div>
                    <div className='p-2 h-12'>@geotechdevelopers</div>
                </div>
                {/**email*/}
                <div className='shadow-lg rounded-lg justify-center p-3 flex mb-4 hover:bg-stone-700 hover:text-white duration-300'>
                    <div className='h-12'>
                        <FaEnvelope size={40} />
                    </div>
                    <div className='p-2 h-12 truncate'>contact@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Socials