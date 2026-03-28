import React, { useState } from 'react'
import ProductsBanner from '../components/ProductsBanner'
import ProductCard from '../components/ProductCard'
import pr1 from "../assets/product1.png"
import pr2 from "../assets/product2.png"
import pr3 from '../assets/products/product3.png'
import pr4 from "../assets/product4.png"
import pr5 from '../assets/products/product5.png'
import pr6 from '../assets/products/product6.png'
import pr7 from '../assets/products/product7.png'
import pr8 from '../assets/products/product8.png'
import SideBar from '../components/SideBar'

const productData = [
    {
    id:1,
    title: "Portable Car Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr1, 
    category:"Vehicle Lifting Solutions"
},
    {
    id:2,
    title: "Scissor Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr2, 
    category:"Vehicle Lifting Solutions"
},
{
    id:3,
    title: "Alignment Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr3, 
    category:"Vehicle Lifting Solutions"
},

{
    id:4,
    title: "Mobile Column Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr4, 
    category:"Vehicle Lifting Solutions"
},
{
    id:5,
    title: "Wheel Balancer",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr5, 
    category:"Tire and Wheel Services"
},
{
    id:6,
    title: "Tire Inflators",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr6, 
    category:"Tire and Wheel Services"
},
{
    id:7,
    title: "Rim Straightening Machines",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr7, 
    category:"Tire and Wheel Services"
},
{
    id:8,
    title: "Nitrogen Tire Inflators",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr8, 
    category:"Tire and Wheel Services"
},

]

const ProductsPage = () => {
    const [showingProducts, setShowingProducts] = useState(8)
    const [categories, setCategories] = useState([])

    const handleNext = () => {
        if (showingProducts < productData.length) {
            setShowingProducts(prev => prev + 4)
        }
    }

    const handlePrev = () => {
        if (showingProducts > 4) {
            setShowingProducts(prev => prev - 4)
        }
    }

    const handleChange = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setCategories(prev => [...prev, value])
        } else {
            setCategories(prev => prev.filter(item => item !== value))
        }
    }

    const filteredProducts =
        categories.length > 0
            ? productData.filter(item => categories.includes(item.category))
            : productData

    return (
        <div className='flex bg-gray-50 justify-center'>
            <div className="pt-15 px-4 lg:px-10 bg-gray-50 min-h-screen">
                
                <ProductsBanner />

                <div className="flex flex-col lg:flex-row gap-6 mt-6">

                    <SideBar handleChange = {handleChange} />

                    {/* Products Section */}
                    <div className='w-full flex justify-center'>
                        <div className="max-w-230 ">

                            <h1 className="mb-6 text-2xl md:text-3xl font-bold text-gray-800">
                                Our <span className="text-yellow-400">Exclusive</span> Products
                            </h1>

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                                {
                                    filteredProducts
                                        .slice(0, showingProducts)
                                        .map((item) => (
                                            <ProductCard key={item.id} item={item} />
                                        ))
                                }
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-8">
                                <div className="flex gap-4">

                                    <button
                                        onClick={handlePrev}
                                        className="px-5 py-2 border border-gray-300 rounded-lg 
                                        text-gray-700 hover:bg-gray-100 transition">
                                        Prev
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="px-5 py-2 border border-gray-300 rounded-lg 
                                        text-gray-700 hover:bg-gray-100 transition">
                                        Next
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="h-20"></div>
            </div>
        </div>
    )
}

export default ProductsPage