import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef()

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <div 
      ref={navRef}
      className='w-full flex my-2 items-center justify-center h-12 fixed z-[999] text-white'
    >
      
      <div className='w-full md:w-[70%] md:rounded-xl border-yellow-200 border flex justify-between items-center px-6 h-full bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-600/40 backdrop-blur-[6px]'>

        <h1 className='text-yellow-500 sm:text-xl font-semibold'>
          Techno I Force
        </h1>

        <div className='hidden md:flex items-center gap-6'>
          <Link to={'/'} className='hover:text-yellow-400 transition'>Home</Link>
          <Link to={'/products'} className='hover:text-yellow-400 transition'>Products</Link>
          <Link to={"/contact"} className='hover:text-yellow-400 transition'>Contact</Link>
        </div>

        <button 
          className='md:hidden text-2xl'
          onClick={handleClick}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className='absolute top-14 w-[90%] bg-gray-800/60 backdrop-blur-md rounded-xl flex flex-col items-center py-4 gap-4 md:hidden'>
          <Link onClick={handleClick} to={'/'} className='hover:text-yellow-400'>Home</Link>
          <Link onClick={handleClick} to={'/products'} className='hover:text-yellow-400'>Products</Link>
          <Link onClick={handleClick} to={'/contact'} className='hover:text-yellow-400'>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar