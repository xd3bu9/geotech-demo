import React from 'react'

const HCard = ({ title, text }) => {
    return (
        <div className='relative max-w-[540px] m-auto py-16 text-center duration-500'>
            {/* <!-- Carousel wrapper --> */}
            <div className='lg:flex'>
                <div className='border-r border-b border-t border-l border-gray-400 lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                    <div className='m-8'>
                        <div className='text-white font-bold text-xl mb-2'>{title}</div>
                        <p className='text-white text-base'>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HCard