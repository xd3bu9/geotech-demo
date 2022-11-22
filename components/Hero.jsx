import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HCard from './HCard';

const Hero = ({heading, message, action, onClicked, title, text}) => { 
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5  text-white z-[2] mt-[10rem]'>
        <h2 className='flex text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <a className='font-bold cursor-pointer inline-block border border-white bg-transparent text-white mx-auto px-8 py-2 hover:bg-blue-500 rounded hover:border-transparent group duration-300' href={onClicked}>{action} <FaArrowRight className='group-hover:rotate-90 group-hover:duration-500' size={30} /></a>
        <HCard className='z-[2]' title={title} text={text} />
      </div>
      
    </div>
  );
};

export default Hero;
