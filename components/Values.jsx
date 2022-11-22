import React from 'react'

const Values = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-6 rounded-lg shadow-lg'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl'>Our Values</h1>
            </div>
            <div className='text-left text-lg'>
                <ul className='list-disc px-16'>
                    <li><b>Integrity:</b> Geotech’s culture is grounded in integrity and respect. Our reputation
                        for adhering to these standards is one of our most valuable assets.</li>
                    <li><b>Quality:</b> We continually strive to improve our performance to give our customers the
                        best quality products. This is enforced through quality control and use of top notch
                        staff. Our human resource policies are designed to attract and retain the best talent.</li>
                    <li><b>Safety:</b> At Geotech, we believe every accident is preventable, and we continue our pursuit
                        of doing our work with zero accidents. No other number is acceptable.</li>
                    <li className='font-bold'>Environmental conservation & sustainable development</li>
                    <li><b>Team work:</b> We strive to work as a team not only with our personnel but also with
                        clients, supervisory team and host community for timely project completion.</li>
                    <li><b>Innovation:</b> We have invested in technology to ensure that our clients receive the best
                        there can be.</li>
                </ul>
            </div>
        </div>
    )
}

export default Values