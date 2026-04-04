import React from 'react'
import serviceData from '../data/servicesData'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'


const ServicesContainer = () => {
   
  return (
    <div className='bg-gray-50 relative pb-4 gap-4 flex flex-col items-center'>
        
        <h1 className='font-bold text-xl md:text-4xl text-gray-800 mb-4'>Key Services <span className='text-yellow-400'>Offering</span></h1>

        
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {serviceData.map((item, idx)=>(
                  <Link key={item.title} to={`/products/${item.title}`}>
                    <ServiceCard  item = {item} />
                  </Link>
                ))}
            </div>
        
    </div>
  )
}

export default ServicesContainer