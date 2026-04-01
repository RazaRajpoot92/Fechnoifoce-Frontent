import { useState } from 'react'
import ProductsBanner from '../components/ProductsBanner'
import ProductCard from '../components/ProductCard'
import SideBar from '../components/SideBar'
import CTASection from '../components/CTASection'
import productData from '../data/productsData'



const ProductsPage = () => {
    const [showingProducts, setShowingProducts] = useState(8)
    const [categories, setCategories] = useState([])

    const filteredProducts =
            categories.length > 0
                ? productData.filter(item => categories.includes(item.category))
                : productData

    const handleNext = () => {
        if (showingProducts < filteredProducts.length) {
            setShowingProducts(prev => prev + 8)
        }
    }

    const handlePrev = () => {
        if (showingProducts > 8) {
            setShowingProducts(prev => prev - 8)
        }
    }

    const handleChange = (e) => {
        const { value, checked } = e.target

        if (checked) {

            setCategories(prev => [...prev, value])
        } else {
            setCategories(prev => prev.filter(item => item !== value))
        }
        
        if(showingProducts > 8) setShowingProducts(8)

    }

    

    return (
        <>
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
                                            .slice(showingProducts - 8, showingProducts)
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
                                            className="px-5 py-2 border cursor-pointer border-gray-300 rounded-lg 
                                            text-gray-700 hover:bg-gray-100 transition">
                                            Prev
                                        </button>

                                        <button
                                            onClick={handleNext}
                                            className="px-5 py-2 border cursor-pointer border-gray-300 rounded-lg 
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
            <CTASection />
        </>
    )
}

export default ProductsPage