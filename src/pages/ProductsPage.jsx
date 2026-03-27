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
    const handleNext = ()=>{
        if(showingProducts < productData.length){
            setShowingProducts(prev => prev + 4)
        }
    }
    const handlePrev = ()=>{
        if(showingProducts > 4){
            setShowingProducts(prev => prev - 4)
        }
    }

    const handleChange = (e)=>{
        const {value, checked} = e.target
        console.log(value, checked)
        if(checked){
            setCategories([...categories, value])
        }else{
            setCategories(categories.filter(item => item != value))
        }

        console.log(categories)
    }

   const filteredData =  productData.filter(item => categories.includes(item.category))

    console.log(filteredData)

  return (
    <div className='pt-18 px-4 bg-gray-100'>
        <ProductsBanner />
        <div className='flex'>
            <div className='w-[30%] pl-4 rounded-4xl pt-4  border border-gray-300'>
                <h2 className=' text-lg text-gray-600'>Filter Products</h2>
                <h2 className='font-semibold text-md text-gray-700 mt-3'>Category</h2>
                <div className='flex flex-col gap-2 mt-4 pl-2'>
                    <div className='flex gap-2 items-center'>
                        <input
                        value={"Vehicle Lifting Solutions"}
                        onChange={handleChange}
                        className='size-4' type="checkbox" />
                        <p className='text-sm text-gray-600'>Vehicle Lifting Solutions</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input
                        value={"Tire and Wheel Services"}
                        onChange={handleChange}
                        className='size-4' type="checkbox" />
                        <p className='text-sm text-gray-600'>Tire and Wheel Services</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input
                        value={"Car Wash & Cleaning Systems"}
                        onChange={handleChange}
                        className='size-4 ' type="checkbox" />
                        <p className='text-sm text-gray-600'>Car Wash & Cleaning Systems</p>
                    </div>
                </div>
            </div>
            {/* product container */}
            <div className='w-full'>
                <h1 className='pl-6 py-2 pb-4 font-semibold text-3xl text-gray-700'>Our <span className='text-yellow-400'>Exclusive</span> Products</h1>
                <div className=' w-full px-6 grid grid-cols-4 gap-2'>
                
                    {
                    

                        productData.filter(item => categories.length >0? categories.includes(item.category): item).slice(0,showingProducts).map((item)=>(
                            <ProductCard key={item.id} item = {item}/>
                        ))
                    }
                </div>

                <div className='flex justify-center pt-6'>
                    <div className='flex gap-4 *:hover:cursor-pointer *:hover:bg-gray-400'>
                        <p onClick={handlePrev}  className='border py-1 px-5'>Prev</p>
                        <p onClick={handleNext} className='border py-1 px-5'>Next</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='h-[60vh]'></div>
    </div>
  )
}

export default ProductsPage