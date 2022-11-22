import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero 
        heading='Contact' 
        message='' 
        action='contact us' 
        onClicked="#contactform" 
        title="Get the info you're looking for right now."
        text="Submit the form below for any queries or assistance."
        />
        <Contact />
    </div>
  )
}

export default contact