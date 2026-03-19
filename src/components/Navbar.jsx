import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full flex my-2 items-center justify-center h-12 fixed z-[999] text-white'>
      
      <div className='w-full md:w-[70%] md:rounded-xl border-yellow-200 border flex justify-between items-center px-6 h-full bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-600/40 backdrop-blur-[6px]'>

        {/* Logo */}
        <h1 className='text-yellow-500 sm:text-xl font-semibold'>
          Techno I Force
        </h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-6'>
          <a href="" className='hover:text-yellow-400 transition'>Home</a>
          <a href="" className='hover:text-yellow-400 transition'>Products</a>
          <a href="" className='hover:text-yellow-400 transition'>Contact</a>
        </div>

        {/* Mobile Button */}
        <button 
          className='md:hidden text-2xl'
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-14 w-[90%] bg-gray-800/90 backdrop-blur-md rounded-xl flex flex-col items-center py-4 gap-4 md:hidden'>
          <a href="" className='hover:text-yellow-400'>Home</a>
          <a href="" className='hover:text-yellow-400'>Products</a>
          <a href="" className='hover:text-yellow-400'>Contact</a>
        </div>
      )}
    </div>
  )
}

export default Navbar