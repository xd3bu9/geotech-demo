import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = ({ heading, message, action, onClicked, title, text, logo }) => {
  return (
    <div className='flex items-center justify-center  bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-4 text-white z-[2] mt-[4rem]'>
        {/* <div className='rounded z-[-2] mt-[2rem] h-16'>
          <Image
            src={logo}
            alt='/'
            layout='responsive'
            // height='90'
            // width='250'
            // contain
            objectFit='cover' />
        </div> */}
        <div class="flex p-2 flex-1">
          <img class="object-cover overflow-hidden rounded-2xl" src={logo} alt="image" height="90" width="250" />
        </div>
        <h2 className='flex text-2xl lg:text-5xl font-bold'>{heading}</h2>
        <p className='py-3 text-normal'>{message}</p>
        <a className='font-bold cursor-pointer inline-block border border-white bg-transparent text-white mx-auto px-8 py-2 hover:bg-blue-500 rounded hover:border-transparent group duration-300' href={onClicked}>{action} <FaArrowRight className='group-hover:rotate-90 group-hover:duration-500' size={30} /></a>
        <br /><br />
        <div className='relative max-w-[540px] z-[-2] m-auto py-6 p-4 border-r border-b border-t border-l border-gray-400 lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className='m-auto'>
            <div className='text-white font-bold text-xl'>{title}</div>
            <p className='text-white text-base'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
