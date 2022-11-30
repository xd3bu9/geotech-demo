import React from 'react'
import { FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className='mx-auto max-w-[1240px] text-center'>
            <div className='text-center p-4'>
                <p className='text-2xl font-bold'>Connect with us</p>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center'>
                {/**Phone */}
                <div className='shadow-lg rounded-lg justify-center flex mb-4 p-3 hover:bg-sky-500 hover:text-white duration-300'>
                    <div className='h-12'>
                        <FaMobileAlt size={40} />
                    </div>
                    <div className='p-2 h-12'>+254 723 164 018</div>
                </div>
                {/**email*/}
                <div className='shadow-lg rounded-lg justify-center p-3 flex mb-4 hover:bg-stone-700 hover:text-white duration-300'>
                    <div className='h-12'>
                        <FaEnvelope size={40} />
                    </div>
                    <div className='p-2 h-12 truncate'>admin@geotech.co.ke</div>
                </div>
            </div>
        </div>
    )
}

export default Socials