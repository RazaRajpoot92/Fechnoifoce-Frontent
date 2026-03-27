import React from 'react'
import pr2 from "../assets/product2.png"

const ProductCard = ({item}) => {
  return (
    <div className="w-55 rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 hover:scale-105">
      
      {/* Image */}
      <div className="bg-gradient-to-r from-yellow-50  to-yellow-200/80 flex justify-center items-center h-44">
        <img 
          src={item.imgUrl} 
          alt="Scissor Lifts" 
          className="h-32 object-contain"
        />
      </div>

      {/* Content */}
      <div className="bg-gray-50 border-t border-gray-200 flex flex-col items-center justify-center py-4 px-3">
        <h2 className="text-md font-semibold text-gray-800 mb-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-500 text-center">
          {item.desc}
        </p>
      </div>

    </div>
  )
}

export default ProductCard