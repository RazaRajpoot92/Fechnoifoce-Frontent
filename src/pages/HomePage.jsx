import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import ServiceCard from '../components/ServiceCard'

const HomePage = () => {
  return (
    <div className=''>
        <Hero />
        <ChooseUs />
        <div className='font-bold text-3xl bg-gray-50 text-gray-600 py-6 text-center'>Key Services <span className='text-yellow-400'>Offering</span> </div>
        <ServiceCard />
    </div>
  )
}

export default HomePage