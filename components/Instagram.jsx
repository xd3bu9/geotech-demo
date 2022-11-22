import React from 'react'
import IgImg3 from '../public/roadwork3.jpg';
import roadwork from '../public/roadwork.jpg';
import house3 from '../public/house3.jpg';
import house1 from '../public/house1.jpg';
import tractor2 from '../public/tractor2.jpg';
import InstagramImg from './InstagramImg';
import img31 from '../public/img31.jpg';
import grinder from '../public/grinder.jpg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto  py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 '>
        <InstagramImg socialImg={house1} />
        <InstagramImg socialImg={roadwork} />
        <InstagramImg socialImg={tractor2} />
        <InstagramImg socialImg={grinder} />
        <InstagramImg socialImg={house3} />
        <InstagramImg socialImg={IgImg3} />
      </div>
    </div>
  )
}

export default Instagram