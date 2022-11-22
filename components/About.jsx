import React from 'react'
import Mission from './Mission'
import Values from './Values'
import Vision from './Vision'

const About = () => {
    return (
        <div id='aboutus' className='py-16'>
                <ul>
                    <li><Vision /></li>
                    <li><Mission /></li>
                    <li><Values /></li>
                </ul>
        </div>
    )
}

export default About