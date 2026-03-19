import React from 'react'
import OurProcess from './OurProcess'

const WorkWithUs = () => {
  return (
    <div className='bg-gray-100 py-20'>
        <div className='flex flex-col items-center gap-4 relative'>
            <h1 className='font-semibold text-6xl md:text-8xl text-gray-700 z-10'>Work With <span className='text-yellow-400'>Us</span></h1>
            <p className=' md:w-200 text-wrap text-center text-lg md:text-2xl text-gray-600 z-10'>We empower automotive and packaging companies with innovative solutions and expertise.</p>
            <div className='blob size-60 md:size-80 bg-linear-to-br from-yellow-200 via-yellow-200 to-orange-300 absolute -top-15 '></div>
            
        </div>

        <div className='flex flex-col items-center mt-40 '>
            <h1 className='text-5xl font-semibold text-gray-700'>The Way We <span className='text-yellow-400'>Deliver</span> </h1>
            <p className='text-yellow-400 mb-8'>6 Steps From Concept to Completion</p>    
            <OurProcess />
        </div>
    </div>
  )
}

export default WorkWithUs