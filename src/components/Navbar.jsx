import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex my-2 items-center justify-center h-12 fixed z-30 text-white'>
        <div className=' w-full md:w-[70%] md:rounded-xl border-yellow-100 border  flex justify-between items-center px-6 h-full  bg-linear-to-r from-gray-950/40 via-gray-900/40 to-gray-800/40 backdrop-blur-[2px] '>
            <h1 className='text-yellow-500 sm:text-xl font-semibold'>Techno I Force</h1>
            <div className='flex items-center *:hover:text-yellow-400 transition-all duration-300 gap-4'>
                <a href="">Home</a>
                <a href="">Products</a>
                <a className='' href="">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar