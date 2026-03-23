import React from 'react'
import imgUrl from '../assets/bgTeam.jpeg'

const CTASection = () => {
  return (
    <div className="w-full flex items-center justify-center py-4 bg-gray-900">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-[800px] rounded-2xl py-16 sm:py-20  bg-linear-to-r from-violet-600 via-purple-600 to-purple-800 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-3xl font-bold mb-4 text-center">Upgrade Your Workshop & Packaging Solutions Today!</h2>
        <p className="text-base md:text-sm sm:text-lg mb-6 text-center max-w-xl">
          Explore the latest automotive and packaging technologies, and get a personalized quote for your garage, workshop, or production facility.
        </p>
        <button className="bg-yellow-400 hover:cursor-pointer text-white font-semibold px-8 sm:px-12 py-2 sm:py-3 border border-yellow-500 shadow-lg hover:bg-gray-100/10 transition text-sm sm:text-base">
          Request a Quote
        </button>
      </div>
    </div>
  )
}

export default CTASection