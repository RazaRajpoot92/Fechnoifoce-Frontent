import React from 'react'
import ContactBanner from '../components/ContactBanner'
import ContactForm from '../components/ContactForm'
import ContactCardContainer from '../components/ContactCardContainer'

const ContactUsPage = () => {
  return (
    <div className='bg-gray-100'>
      <ContactBanner />
      <ContactCardContainer />
      <div id='form' className='h-20'></div>
      <ContactForm />
    </div>
  )
}

export default ContactUsPage