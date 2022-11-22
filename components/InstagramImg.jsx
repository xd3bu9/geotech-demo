import Image from 'next/image';
import React from 'react';

const InstagramImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        layout='responsive'
        height='300'
        width='350'
        objectFit='cover'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
      </p>
      </div>
    </div>
  );
};

export default InstagramImg;
