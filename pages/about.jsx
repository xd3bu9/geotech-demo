import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'

const about = () => {
    return (
        <div>
            <Hero heading='About' 
            message='Get to know who we are' 
            action='About Us' 
            onClicked='#aboutus' 
            title='Geotech Developers Limited' 
            text='Founded in May 2012, Geotech Developers was incorporated as Geotech Developers Limited in June 2014 that now engages in Architectural, Civil and structural design and services, Project Management and Project Supervision.' />
            <About />
        </div>
    )
}

export default about