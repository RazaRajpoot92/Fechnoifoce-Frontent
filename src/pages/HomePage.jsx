import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import ServiceCard from '../components/ServiceCard'
import ServicesContainer from '../components/ServicesContainer'
import WorkWithUs from '../components/WorkWithUs'
import ClientSection from '../components/ClientSection'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <ChooseUs />
      <ServicesContainer />
      <WorkWithUs />
      <ClientSection />
    </div>
  )
}

export default HomePage