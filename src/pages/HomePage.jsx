import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import ServiceCard from '../components/ServiceCard'
import ServicesContainer from '../components/ServicesContainer'
import WorkWithUs from '../components/WorkWithUs'
import ClientSection from '../components/ClientSection'
import TeamSection from '../components/TeamSection'
import CTASection from '../components/CTASection'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <ChooseUs />
      <div id='services'></div>
      < ServicesContainer />
      <WorkWithUs />
      <ClientSection />
      <TeamSection />
      <CTASection />
    </div>
  )
}

export default HomePage