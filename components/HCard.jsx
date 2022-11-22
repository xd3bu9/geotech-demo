import React from 'react'
import { cranes4, house1, tractor } from './ImageExports'

const HCard = ({title, text}) => {
    return (
        <div className='relative max-w-[540px] mx-auto py-16 text-center duration-500'>
            {/* <!-- Carousel wrapper --> */}
            <div className='max-w-sm w-full lg:max-w-full lg:flex'>
                <div className='border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                    <div className='m-8'>
                        <div className='text-white font-bold text-xl mb-2'>{title}</div>
                        <p className='text-white text-base'>{text}</p>
                    </div>
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className='absolute z-[2] flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
                <button type="button" className='w-3 h-3 rounded-full' aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className='w-3 h-3 rounded-full' aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className='w-3 h-3 rounded-full' aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
        </div>
    )
}

export default HCard