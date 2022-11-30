import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import { logo } from '../components/ImageExports';

const work = () => {
  return (
    <div>
        <Hero
        logo={logo}
        heading='Services' 
        message='' 
        action='Explore' 
        onClicked="#services" 
        title='' 
        text='Geotech Developers Limited is well positioned to deliver turnkey & design-build projects across various sectors.'
        />
        <Services />
        <Portfolio />
    </div>
  )
}

export default work