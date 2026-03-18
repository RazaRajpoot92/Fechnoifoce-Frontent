import React from 'react'
import { BookUser, Cpu, Heart, Rocket } from 'lucide-react'
import carImg from "../assets/car-robotic.png"

const ChooseUs = () => {
  return (
    <div className='bg-gray-100 relative overflow-hidden min-h-[70vh] flex flex-col md:flex-row items-center md:items-stretch justify-between'>
      
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-end p-4 md:p-0'>
        <img className='w-full max-w-md md:max-w-full object-contain' src={carImg} alt="Car" />
      </div>

      {/* Content Section */}
      <div className='relative w-full md:w-1/2 bg-gray-200 md:rounded-l-[100px] flex flex-col items-center md:items-start justify-center py-8 px-4 md:px-12 overflow-hidden'>
        
        {/* Background Circle */}
        <div className='absolute w-72 h-72 md:w-80 md:h-80 rounded-full -bottom-32 -right-32 bg-linear-to-br from-yellow-200 via-yellow-300 to-orange-300'></div>
        
        <div className='z-10 flex flex-col items-center md:items-start gap-6'>
          <h1 className='font-bold text-3xl sm:text-4xl text-gray-800 text-center md:text-left'>
            Why Choose <span className='text-yellow-500'>Us</span>
          </h1>
          <p className='text-sm sm:text-base text-gray-600 max-w-md text-center md:text-left'>
            At <span className='text-yellow-500'>Techno I Force</span>, we deliver premium automotive and packaging solutions with precision, innovation, and reliability, ensuring every vehicle and service experience exceeds your expectations.
          </p>

          {/* Features */}
          <div className=' text-white flex flex-wrap gap-4 justify-center md:justify-start'>
            <div className='flex items-center w-53 gap-2 px-4 py-2 bg-yellow-400 border border-yellow-500 rounded-md hover:bg-white/10 hover:text-yellow-400 transition-all duration-300'>
              <Cpu />
              <h2 className=''>Modern Technology</h2>
            </div>
            <div className='flex items-center w-53 gap-2 px-4 py-2 bg-yellow-400 border border-yellow-500 rounded-md hover:bg-white/10 hover:text-yellow-400 transition-all duration-300'>
              <Rocket />
              <h2 className=''>Expert Solutions</h2>
            </div>
            <div className='flex w-53 items-center gap-2 px-4 py-2 bg-yellow-400 border border-yellow-500 rounded-md hover:bg-white/10 hover:text-yellow-400 transition-all duration-300'>
              <Heart />
              <h2 className=''>Reliable & Trustworthy</h2>
            </div>
            <div className='flex w-53 items-center gap-2 px-4 py-2 bg-yellow-400 border border-yellow-500 rounded-md hover:bg-white/10 hover:text-yellow-400 transition-all duration-300'>
              <BookUser />
              <h2 className=''>Customer-Centric</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChooseUs