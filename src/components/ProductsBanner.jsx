import teamImg from "../assets/bgTeam.jpeg"

const ProductsBanner = () => {
  return (
    <div className="flex w-full justify-center bg-gray-50 px-2 py-4">
      <div className="flex flex-col lg:flex-row items-center w-full sm:w-[85%] max-w-6xl rounded-2xl 
      bg-gradient-to-r from-yellow-200  to-yellow-300/80 text-gray-700 
      px-6 sm:px-10 py-10 gap-6">

        {/* Text Section */}
        <div data-aos='fade-right' className="flex-1 text-center lg:text-left">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl lg:text-4xl leading-tight">
            One Stop for Automotive & Packaging <span className="text-orange-400">Solutions</span>
          </h1>  
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto lg:mx-0">
            Discover high-quality automotive equipment and advanced packaging solutions designed to improve efficiency, performance, and reliability. From modern workshops to industrial operations, we provide everything you need to power your business forward.
          </p>
        </div>

        {/* Image Section */}
        <div data-aos='fade-left' className="flex-1 flex justify-center">
          
            <img 
              className="w-60  rounded-2xl opacity-95 border-4 border-orange-400 sm:w-80 lg:w-96 object-contain" 
              src={teamImg} 
              alt="Automotive Solutions" 
            />
           
        </div>

      </div>
    </div>
  )
}

export default ProductsBanner


// 