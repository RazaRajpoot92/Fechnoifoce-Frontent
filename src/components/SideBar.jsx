import React from 'react'
import {Check} from 'lucide-react'

const SideBar = ({handleChange}) => {
  return (
    <>
    {/* Sidebar */}
        <div className="w-full lg:w-[300px] bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-fit">

            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter Products
            </h2>

            <h3 className=" font-medium text-gray-800 mb-3">
                Category
            </h3>

            <div className="flex flex-col gap-3">

                {[
                    "Vehicle Lifting Solutions",
                    "Tire and Wheel Services",
                    "Car Wash & Cleaning Systems"
                ].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        
                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            value={cat}
                            onChange={handleChange}
                            className="hidden peer"
                        />

                        {/* Custom UI */}
                        <div className="w-4 h-4 border-2 border-gray-300 rounded 
                            flex items-center justify-center
                            peer-checked:bg-black 
                            peer-checked:border-black
                            transition">
                                <Check color='white' />
                            
                            <svg
                                className="w-3 h-3 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <span className="text-xs text-gray-600 group-hover:text-gray-900 transition">
                            {cat}
                        </span>
                    </label>
                ))}

            </div>
        </div>
    </>
  )
}

export default SideBar