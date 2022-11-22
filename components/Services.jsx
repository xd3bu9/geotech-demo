import Image from 'next/image'
import React from 'react'
import { ServicesData } from './ServicesData'

const Services = () => {

  return (
    <div id='services' className='max-w-[1440px] mx-auto py-16 text-center'>
      <h1 className='text-2xl font-bold p-4'>Our Services</h1>
      <div className='grid lg:grid-cols-5 gap-5 p-4'>
        {ServicesData.map(
          card => <div key={card.id} className=' shadow-lg rounded-lg '>
            <Image className='rounded-t-lg' src={"/" + card.img} alt="/" height='190' width='264' />
            <div className='p-4'>
              <h3 className=' font-bold text-slate-700 mb-3'>{card.title}</h3>
              <ul>
                {card.text.map(itemText => <li key={itemText.id} className=' p-2'>{itemText.item}</li>)}
              </ul>
            </div>
          </div>)}
      </div>

    </div>
  )
}

export default Services