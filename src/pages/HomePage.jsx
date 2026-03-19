import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import ServiceCard from '../components/ServiceCard'
import ServicesContainer from '../components/ServicesContainer'
import WorkWithUs from '../components/WorkWithUs'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <ChooseUs />
      <ServicesContainer />
      <WorkWithUs />
    </div>
  )
}

export default HomePage