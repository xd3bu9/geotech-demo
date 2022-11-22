import Image from 'next/image';
import React from 'react';
import { roadwork, sunset,  } from './ImageExports';

const Portfolio = () => {
  
  return (
    <div className='max-w-[1440px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Previous Projects</h1>
      <div className='grid grid-rows-none md:grid-cols-6 p-4 gap-2'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src= {sunset}
            alt='/'
            layout='responsive'
            width='677'
            height='451'
            className='rounded'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            alt='/'
            width='215'
            src='/img60.jpg'
            height='217'
            layout='responsive'
            objectFit='cover'
            className='rounded'
          />
        </div>
        <div className='w-full h-full row-span-2'>
          <Image
            src={roadwork}
            alt='/'
            width='215'
            height='451'
            layout='responsive'
            objectFit='cover'
            className='rounded'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='/img54.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            className='rounded'
          />
        </div>

        <div className='w-full h-full'>
          <Image
            src='/img51.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            className='rounded'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src="/img59.jpg"
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            className='rounded'
          />
        </div>

      </div>
      <div className='py-16 shadow-lg rounded-lg bg-gradient-to-r hover:'>
      <a href='/GEOTECH-PORTFOLIO.pdf' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded border shadow-lg p-3 mt-2'>Download Portfolio</a>
      </div>
    </div>
  );
};

export default Portfolio;
