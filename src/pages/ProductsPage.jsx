import React from 'react'
import ProductsBanner from '../components/ProductsBanner'
import ProductCard from '../components/ProductCard'
import pr1 from "../assets/product1.png"
import pr2 from "../assets/product2.png"
import pr4 from "../assets/product4.png"

const productData = [
    {
    id:1,
    title: "Portable Car Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr1, 
},
    {
    id:2,
    title: "Scissor Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr2, 
},
{
    id:3,
    title: "Mobile Column Lifts",
    desc: "Reliable and efficient lifting solutions for modern workshops.",
    imgUrl: pr4, 
},

]

const ProductsPage = () => {
  return (
    <div className='pt-18 bg-gray-100'>
        <ProductsBanner />
        <div className='flex justify-center gap-2'>
            
            {
                productData.map((item)=>(
                    <ProductCard key={item.id} item = {item}/>
                ))
            }
        </div>
        <div className='h-[60vh]'></div>
    </div>
  )
}

export default ProductsPage