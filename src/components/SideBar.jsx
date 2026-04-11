import React from 'react'
import {Check} from 'lucide-react'

const SideBar = ({handleChange, categories}) => {
    
  return (
    <>
    {/* Sidebar */}
        <div className="w-full lg:w-[320px] bg-white border border-gray-200 rounded-xl p-4 shadow-sm h-fit">

            <h2 className="text-lg font-semibold text-yellow-400 mb-4">
                Filter Products
            </h2>

            <h3 className=" font-medium text-gray-800 mb-3">
                Category
            </h3>

            <div className="flex flex-col gap-3">

                {[
                    "Vehicle Lifting Solutions",
                    "Tire & Wheel Services",
                    "Car Wash & Cleaning Systems",
                    "Hydraulic & Pneumatic Tools",
                    "Body Repair & Paint Solutions",
                    "Air, Oil and Water Management System",
                    "Diagnostic & Testing Equipment",
                    "Safety and Storage (Warehousing) Solutions",
                    "General Workshop Tools",
                    "Servicing Equipment & Maintenance"
                ].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        
                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            value={cat}
                            checked = {categories.includes(cat)}
                            onChange={(e)=> handleChange(e)}
                            className="hidden peer"
                        />

                        {/* Custom UI */}
                        
                        <div className={`w-4 h-4 border-2   border-gray-300 rounded 
                            flex items-center justify-center
                            peer-checked:bg-yellow-300 
                            peer-checked:border-yellow-300
                            transition `}>
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