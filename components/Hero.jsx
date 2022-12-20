import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = ({ heading, message, action, onClicked, title, text, logo }) => {
  return (
    <div className='flex items-center w-screen lg:h-screen justify-center bg-fixed bg-center bg-cover custom-img'>
      {/* <div className='flex items-center justify-center lg:h-screen h-fit bg-fixed bg-center bg-cover custom-img'> */}
      {/* Overlay */}
      <div className='absolute top-0 bg-fixed w-full h-full bg-black/70' />
      {/* <div className='absolute top-0 lg:h-full w-full md:h-full h-[131%] bg-fixed bg-cover bg-black/70 z-[1]' /> */}
      <div className='p-4 text-white z-[2] mt-[4rem]'>
        <div className='flex p-2 flex-1'>
          <Image className='object-fill overflow-hidden rounded-2xl' src={logo} alt="image" height="90" width="250" />
        </div>
        <h2 className='flex text-2xl lg:text-5xl font-bold'>{heading}</h2>
        <p className='py-3 text-normal'>{message}</p>
        <a className='font-bold cursor-pointer inline-block border border-white bg-transparent text-white mx-auto px-8 py-2 hover:bg-blue-500 rounded hover:border-transparent group duration-300' href={onClicked}>{action} <FaArrowRight className='group-hover:rotate-90 group-hover:duration-500' size={30} /></a>
        <br /><br />
        <div className='relative max-w-[540px] z-[2] m-auto py-6 p-4 border-r border-b border-t border-l border-gray-400 lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
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
